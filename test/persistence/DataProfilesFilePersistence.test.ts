import { ConfigParams } from 'pip-services3-commons-node';

import { DataProfilesFilePersistence } from '../../src/persistence/DataProfilesFilePersistence';
import { DataProfilesPersistenceFixture } from './DataProfilesPersistenceFixture';

suite('DataProfilesFilePersistence', ()=> {
    let persistence: DataProfilesFilePersistence;
    let fixture: DataProfilesPersistenceFixture;
    
    setup((done) => {
        persistence = new DataProfilesFilePersistence('./data/data_profiles.test.json');

        fixture = new DataProfilesPersistenceFixture(persistence);
        
        persistence.open(null, (err) => {
            if (err) done(err);
            else persistence.clear(null, done);
        });
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('Get and Set Profiles', (done) => {
        fixture.testGetAndSetProfiles(done);
    });
});