import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';
import { DataProfilesMemoryPersistence } from './DataProfilesMemoryPersistence';
import { DataProfileV1 } from '../data/version1/DataProfileV1';
export declare class DataProfilesFilePersistence extends DataProfilesMemoryPersistence {
    protected _persister: JsonFilePersister<DataProfileV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
