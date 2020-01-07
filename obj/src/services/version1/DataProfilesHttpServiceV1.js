"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DataProfilesHttpServiceV1 extends pip_services3_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/data_profiles');
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'controller', 'default', '*', '1.0'));
    }
}
exports.DataProfilesHttpServiceV1 = DataProfilesHttpServiceV1;
//# sourceMappingURL=DataProfilesHttpServiceV1.js.map