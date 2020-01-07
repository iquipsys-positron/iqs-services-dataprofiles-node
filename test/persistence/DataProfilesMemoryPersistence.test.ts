import { DataProfilesMemoryPersistence } from '../../src/persistence/DataProfilesMemoryPersistence';
import { DataProfilesPersistenceFixture } from './DataProfilesPersistenceFixture';

suite('DataProfilesMemoryPersistence', ()=> {
    let persistence: DataProfilesMemoryPersistence;
    let fixture: DataProfilesPersistenceFixture;
    
    setup((done) => {
        persistence = new DataProfilesMemoryPersistence();
        fixture = new DataProfilesPersistenceFixture(persistence);
        
        persistence.open(null, done);
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('Get and Set Profiles', (done) => {
        fixture.testGetAndSetProfiles(done);
    });

});