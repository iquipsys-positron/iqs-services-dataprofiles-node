import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesPersistence } from './IDataProfilesPersistence';
export declare class DataProfilesMongoDbPersistence extends IdentifiableMongoDbPersistence<DataProfileV1, string> implements IDataProfilesPersistence {
    constructor();
}
