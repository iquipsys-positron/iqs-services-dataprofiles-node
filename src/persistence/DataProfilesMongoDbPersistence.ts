let _ = require('lodash');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';

import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesPersistence } from './IDataProfilesPersistence';

export class DataProfilesMongoDbPersistence 
    extends IdentifiableMongoDbPersistence<DataProfileV1, string> 
    implements IDataProfilesPersistence {

    constructor() {
        super('data_profiles');
    }

}
