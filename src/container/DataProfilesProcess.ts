import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';

import { DataProfilesServiceFactory } from '../build/DataProfilesServiceFactory';

export class DataProfilesProcess extends ProcessContainer {

    public constructor() {
        super("data_profiles", "Data profiles microservice");
        this._factories.add(new DataProfilesServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
