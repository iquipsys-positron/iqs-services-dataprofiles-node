"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const DataProfilesServiceFactory_1 = require("../build/DataProfilesServiceFactory");
class DataProfilesProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("data_profiles", "Data profiles microservice");
        this._factories.add(new DataProfilesServiceFactory_1.DataProfilesServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.DataProfilesProcess = DataProfilesProcess;
//# sourceMappingURL=DataProfilesProcess.js.map