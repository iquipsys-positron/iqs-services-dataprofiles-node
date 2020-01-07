let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DataProfileV1 } from '../../src/data/version1/DataProfileV1';
import { DataProfilesMemoryPersistence } from '../../src/persistence/DataProfilesMemoryPersistence';
import { DataProfilesController } from '../../src/logic/DataProfilesController';
import { DataProfilesLambdaFunction } from '../../src/container/DataProfilesLambdaFunction';

let PROFILE: DataProfileV1 = {
    id: '1',
    param_types: [{
        id: 100,
        name: 'Param 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    event_types: [{
        id: 100,
        name: 'Event 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    command_types: [{
        id: 100,
        name: 'Command 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    state_types: [{
        id: 100,
        name: 'State 1',
        algorithm: 'custom'
    }]
};

suite('DataProfilesLambdaFunction', ()=> {
    let lambda: DataProfilesLambdaFunction;

    suiteSetup((done) => {
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'persistence.descriptor', 'iqs-services-dataprofiles:persistence:memory:default:1.0',
            'controller.descriptor', 'iqs-services-dataprofiles:controller:default:default:1.0'
        );

        lambda = new DataProfilesLambdaFunction();
        lambda.configure(config);
        lambda.open(null, done);
    });
    
    suiteTeardown((done) => {
        lambda.close(null, done);
    });
    
    test('Get and Set Profile', (done) => {
        async.series([
        // Set data profile
            (callback) => {
                lambda.act(
                    {
                        role: 'data_profiles',
                        cmd: 'set_profile',
                        profile: PROFILE
                    },
                    (err, profile) => {
                        assert.isNull(err);
                        
                        assert.equal(profile.id, PROFILE.id);
                        assert.isTrue(profile.param_types.length > 1);
                        assert.isTrue(profile.event_types.length > 1);
                        assert.isTrue(profile.command_types.length > 1);
                        assert.isTrue(profile.state_types.length > 1);

                        callback(err);
                    }
                );
            },
        // Get and check data profile
            (callback) => {
                lambda.act(
                    {
                        role: 'data_profiles',
                        cmd: 'get_profile',
                        profile_id: '1'
                    },
                    (err, profile) => {
                        assert.isNull(err);
                        
                        assert.equal(profile.id, PROFILE.id);
                        assert.isTrue(profile.param_types.length > 1);
                        assert.isTrue(profile.event_types.length > 1);
                        assert.isTrue(profile.command_types.length > 1);
                        assert.isTrue(profile.state_types.length > 1);

                        callback(err);
                    }
                );
            }
        ], done);
    });
});