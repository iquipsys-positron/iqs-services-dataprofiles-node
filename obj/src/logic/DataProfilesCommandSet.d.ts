import { CommandSet } from 'pip-services3-commons-node';
import { IDataProfilesController } from './IDataProfilesController';
export declare class DataProfilesCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IDataProfilesController);
    private makeGetProfileCommand;
    private makeSetProfileCommand;
}
