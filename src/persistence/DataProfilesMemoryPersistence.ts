let _ = require('lodash');

import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';

import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesPersistence } from './IDataProfilesPersistence';

export class DataProfilesMemoryPersistence 
    extends IdentifiableMemoryPersistence<DataProfileV1, string> 
    implements IDataProfilesPersistence {

    constructor() {
        super();
    }

}
