import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';

import { DataProfilesMemoryPersistence } from './DataProfilesMemoryPersistence';
import { DataProfileV1 } from '../data/version1/DataProfileV1';

export class DataProfilesFilePersistence extends DataProfilesMemoryPersistence {
	protected _persister: JsonFilePersister<DataProfileV1>;

    public constructor(path?: string) {
        super();

        this._persister = new JsonFilePersister<DataProfileV1>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
        this._persister.configure(config);
    }

}