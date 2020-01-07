let async = require('async');
let assert = require('chai').assert;

import { IDataProfilesPersistence } from '../../src/persistence/IDataProfilesPersistence';
import { DataProfileV1 } from '../../src/data/version1/DataProfileV1';

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
    
export class DataProfilesPersistenceFixture {
    private _persistence: IDataProfilesPersistence;
    
    constructor( persistence) {
        assert.isNotNull( persistence);
        this._persistence =  persistence;
    }

    public testGetAndSetProfiles(done) {
        async.series([
        // Set data profile
            (callback) => {
                this._persistence.set(
                    null,
                    PROFILE,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.equal(profile.id, PROFILE.id);
                        assert.lengthOf(profile.param_types, 1);
                        assert.lengthOf(profile.event_types, 1);
                        assert.lengthOf(profile.command_types, 1);
                        assert.lengthOf(profile.state_types, 1);

                        callback();
                    }
                );
            },
        // Read and check data profile
            (callback) => {
                this._persistence.getOneById(
                    null,
                    PROFILE.id,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.equal(profile.id, PROFILE.id);
                        assert.lengthOf(profile.param_types, 1);
                        assert.lengthOf(profile.event_types, 1);
                        assert.lengthOf(profile.command_types, 1);
                        assert.lengthOf(profile.state_types, 1);

                        callback();
                    }
                );
            }
        ], done);
    }

}
