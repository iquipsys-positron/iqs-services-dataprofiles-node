import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { DataProfilesServiceFactory } from '../build/DataProfilesServiceFactory';

export class DataProfilesLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("data_profiles", "Data profiles function");
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-dataprofiles', 'controller', 'default', '*', '*'));
        this._factories.add(new DataProfilesServiceFactory());
    }
}

export const handler = new DataProfilesLambdaFunction().getHandler();