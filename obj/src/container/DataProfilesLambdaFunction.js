"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const DataProfilesServiceFactory_1 = require("../build/DataProfilesServiceFactory");
class DataProfilesLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("data_profiles", "Data profiles function");
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'controller', 'default', '*', '*'));
        this._factories.add(new DataProfilesServiceFactory_1.DataProfilesServiceFactory());
    }
}
exports.DataProfilesLambdaFunction = DataProfilesLambdaFunction;
exports.handler = new DataProfilesLambdaFunction().getHandler();
//# sourceMappingURL=DataProfilesLambdaFunction.js.map