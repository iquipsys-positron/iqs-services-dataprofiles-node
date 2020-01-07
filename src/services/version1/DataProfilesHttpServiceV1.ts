import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class DataProfilesHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/data_profiles');
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-dataprofiles', 'controller', 'default', '*', '1.0'));
    }
}