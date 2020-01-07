import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesController } from './IDataProfilesController';
export declare class DataProfilesController implements IConfigurable, IReferenceable, ICommandable, IDataProfilesController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _persistence;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    private addStandardTypes;
    private removeStandardTypes;
    getProfile(correlationId: string, profileId: string, callback: (err: any, profile: DataProfileV1) => void): void;
    setProfile(correlationId: string, profile: DataProfileV1, callback: (err: any, profile: DataProfileV1) => void): void;
}
