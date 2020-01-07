let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { DataProfileV1 } from '../../../src/data/version1/DataProfileV1';
import { DataProfilesMemoryPersistence } from '../../../src/persistence/DataProfilesMemoryPersistence';
import { DataProfilesController } from '../../../src/logic/DataProfilesController';
import { DataProfilesHttpServiceV1 } from '../../../src/services/version1/DataProfilesHttpServiceV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

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

suite('DataProfilesHttpServiceV1', ()=> {
    let persistence: DataProfilesMemoryPersistence;
    let service: DataProfilesHttpServiceV1;

    let rest: any;

    suiteSetup((done) => {
        persistence = new DataProfilesMemoryPersistence();
        let controller = new DataProfilesController();

        service = new DataProfilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-dataprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-dataprofiles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-dataprofiles', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup((done) => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
        persistence.clear(null, done);
    });
    
    test('Get and Set Profile', (done) => {
        async.series([
        // Set data profile
            (callback) => {
                rest.post('/v1/data_profiles/set_profile',
                    {
                        profile: PROFILE
                    },
                    (err, req, res, profile) => {
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
                rest.post('/v1/data_profiles/get_profile',
                    {
                        profile_id: '1'
                    },
                    (err, req, res, profile) => {
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