import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';
import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesPersistence } from './IDataProfilesPersistence';
export declare class DataProfilesMemoryPersistence extends IdentifiableMemoryPersistence<DataProfileV1, string> implements IDataProfilesPersistence {
    constructor();
}
