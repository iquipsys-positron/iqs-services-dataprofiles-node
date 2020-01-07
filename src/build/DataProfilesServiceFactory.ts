import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { DataProfilesMongoDbPersistence } from '../persistence/DataProfilesMongoDbPersistence';
import { DataProfilesFilePersistence } from '../persistence/DataProfilesFilePersistence';
import { DataProfilesMemoryPersistence } from '../persistence/DataProfilesMemoryPersistence';
import { DataProfilesController } from '../logic/DataProfilesController';
import { DataProfilesHttpServiceV1 } from '../services/version1/DataProfilesHttpServiceV1';

export class DataProfilesServiceFactory extends Factory {
	public static Descriptor = new Descriptor("iqs-services-dataprofiles", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("iqs-services-dataprofiles", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("iqs-services-dataprofiles", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("iqs-services-dataprofiles", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("iqs-services-dataprofiles", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("iqs-services-dataprofiles", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(DataProfilesServiceFactory.MemoryPersistenceDescriptor, DataProfilesMemoryPersistence);
		this.registerAsType(DataProfilesServiceFactory.FilePersistenceDescriptor, DataProfilesFilePersistence);
		this.registerAsType(DataProfilesServiceFactory.MongoDbPersistenceDescriptor, DataProfilesMongoDbPersistence);
		this.registerAsType(DataProfilesServiceFactory.ControllerDescriptor, DataProfilesController);
		this.registerAsType(DataProfilesServiceFactory.HttpServiceDescriptor, DataProfilesHttpServiceV1);
	}
	
}
