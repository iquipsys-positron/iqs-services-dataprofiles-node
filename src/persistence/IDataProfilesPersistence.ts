import { IGetter } from 'pip-services3-data-node';
import { ISetter } from 'pip-services3-data-node';

import { DataProfileV1 } from '../data/version1/DataProfileV1';

export interface IDataProfilesPersistence extends IGetter<DataProfileV1, string>, ISetter<DataProfileV1> {
    getOneById(correlationId: string, id: string,
        callback: (err: any, item: DataProfileV1) => void): void;

    set(correlationId: string, item: DataProfileV1,
        callback: (err: any, item: DataProfileV1) => void): void;
}
