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

suite('DataProfilesController', ()=> {
    let persistence: DataProfilesMemoryPersistence;
    let controller: DataProfilesController;

    suiteSetup(() => {
        persistence = new DataProfilesMemoryPersistence();
        controller = new DataProfilesController();

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-dataprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-dataprofiles', 'controller', 'default', 'default', '1.0'), controller
        );

        controller.setReferences(references);
    });
    
    setup((done) => {
        persistence.clear(null, done);
    });

    test('Get and Set Profiles', (done) => {
        async.series([
        // Get default data profile
        (callback) => {
            controller.getProfile(
                null,
                PROFILE.id,
                (err, profile) => {
                    assert.isNull(err);

                    assert.equal(profile.id, PROFILE.id);
                    assert.isTrue(profile.param_types.length >= 1);
                    assert.isTrue(profile.event_types.length >= 1);
                    assert.isTrue(profile.command_types.length >= 1);
                    assert.isTrue(profile.state_types.length >= 1);

                    callback();
                }
            );
        },
        // Set data profile
            (callback) => {
                controller.setProfile(
                    null,
                    PROFILE,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.equal(profile.id, PROFILE.id);
                        assert.isTrue(profile.param_types.length > 1);
                        assert.isTrue(profile.event_types.length > 1);
                        assert.isTrue(profile.command_types.length > 1);
                        assert.isTrue(profile.state_types.length > 1);
    
                        callback();
                    }
                );
            },
        // Read and check data profile
            (callback) => {
                controller.getProfile(
                    null,
                    PROFILE.id,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.equal(profile.id, PROFILE.id);
                        assert.isTrue(profile.param_types.length > 1);
                        assert.isTrue(profile.event_types.length > 1);
                        assert.isTrue(profile.command_types.length > 1);
                        assert.isTrue(profile.state_types.length > 1);

                        callback();
                    }
                );
            }
        ], done);
    });
    
});