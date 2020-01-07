"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const DataProfilesMongoDbPersistence_1 = require("../persistence/DataProfilesMongoDbPersistence");
const DataProfilesFilePersistence_1 = require("../persistence/DataProfilesFilePersistence");
const DataProfilesMemoryPersistence_1 = require("../persistence/DataProfilesMemoryPersistence");
const DataProfilesController_1 = require("../logic/DataProfilesController");
const DataProfilesHttpServiceV1_1 = require("../services/version1/DataProfilesHttpServiceV1");
class DataProfilesServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DataProfilesServiceFactory.MemoryPersistenceDescriptor, DataProfilesMemoryPersistence_1.DataProfilesMemoryPersistence);
        this.registerAsType(DataProfilesServiceFactory.FilePersistenceDescriptor, DataProfilesFilePersistence_1.DataProfilesFilePersistence);
        this.registerAsType(DataProfilesServiceFactory.MongoDbPersistenceDescriptor, DataProfilesMongoDbPersistence_1.DataProfilesMongoDbPersistence);
        this.registerAsType(DataProfilesServiceFactory.ControllerDescriptor, DataProfilesController_1.DataProfilesController);
        this.registerAsType(DataProfilesServiceFactory.HttpServiceDescriptor, DataProfilesHttpServiceV1_1.DataProfilesHttpServiceV1);
    }
}
exports.DataProfilesServiceFactory = DataProfilesServiceFactory;
DataProfilesServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "factory", "default", "default", "1.0");
DataProfilesServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "persistence", "memory", "*", "1.0");
DataProfilesServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "persistence", "file", "*", "1.0");
DataProfilesServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "persistence", "mongodb", "*", "1.0");
DataProfilesServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "controller", "default", "*", "1.0");
DataProfilesServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "service", "http", "*", "1.0");
//# sourceMappingURL=DataProfilesServiceFactory.js.map