"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_mongodb_node_1 = require("pip-services3-mongodb-node");
class DataProfilesMongoDbPersistence extends pip_services3_mongodb_node_1.IdentifiableMongoDbPersistence {
    constructor() {
        super('data_profiles');
    }
}
exports.DataProfilesMongoDbPersistence = DataProfilesMongoDbPersistence;
//# sourceMappingURL=DataProfilesMongoDbPersistence.js.map