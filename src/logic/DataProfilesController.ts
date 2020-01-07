let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';

import { DataProfileV1 } from '../data/version1/DataProfileV1';
import { IDataProfilesPersistence } from '../persistence/IDataProfilesPersistence';
import { IDataProfilesController } from './IDataProfilesController';
import { DataProfilesCommandSet } from './DataProfilesCommandSet';
import { StandardSensorParameterTypesV1 } from '../data/version1/StandardSensorParameterTypesV1';
import { StandardSensorEventTypesV1 } from '../data/version1/StandardSensorEventTypesV1';
import { StandardActuatorCommandTypesV1 } from '../data/version1/StandardActuatorCommandTypesV1';
import { StandardSensorStateTypesV1 } from '../data/version1/StandardSensorStateTypesV1';

export class DataProfilesController implements IConfigurable, IReferenceable, ICommandable, IDataProfilesController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'iqs-services-dataprofiles:persistence:*:*:1.0',
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(DataProfilesController._defaultConfig);
    private _persistence: IDataProfilesPersistence;
    private _commandSet: DataProfilesCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IDataProfilesPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new DataProfilesCommandSet(this);
        return this._commandSet;
    }
    
    private addStandardTypes(profile: DataProfileV1): DataProfileV1 {
        if (profile == null) return null;

        profile.param_types = profile.param_types || [];
        profile.param_types.push(...StandardSensorParameterTypesV1);

        profile.event_types = profile.event_types || [];
        profile.event_types.push(...StandardSensorEventTypesV1);

        profile.command_types = profile.command_types || [];
        profile.command_types.push(...StandardActuatorCommandTypesV1);

        profile.state_types = profile.state_types || [];
        profile.state_types.push(...StandardSensorStateTypesV1);

        return profile;
    }

    private removeStandardTypes(profile: DataProfileV1): DataProfileV1 {
        if (profile == null) return null;

        profile.param_types = _.filter(profile.param_types, p => p.id >= 100);
        profile.event_types = _.filter(profile.event_types, e => e.id >= 100);
        profile.command_types = _.filter(profile.command_types, c => c.id >= 100);
        profile.state_types = _.filter(profile.state_types, s => s.id >= 100);

        return profile;
    }

    public getProfile(correlationId: string, profileId: string,
        callback: (err: any, profile: DataProfileV1) => void): void {
        this._persistence.getOneById(correlationId, profileId, (err, profile) => {
            if (err == null && profile == null) {
                profile = new DataProfileV1();
                profile.id = profileId;
            }
            profile = this.addStandardTypes(profile);
            callback(err, profile);
        });
    }

    public setProfile(correlationId: string, profile: DataProfileV1,
        callback: (err: any, profile: DataProfileV1) => void): void {
        
        profile = this.removeStandardTypes(profile);

        this._persistence.set(correlationId, profile, (err, profile) => {
            profile = this.addStandardTypes(profile);
            callback(err, profile);
        });
    }

}
