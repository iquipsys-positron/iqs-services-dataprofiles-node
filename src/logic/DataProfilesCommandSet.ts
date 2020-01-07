let _ = require('lodash');

import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Schema } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { DataProfileV1Schema } from '../data/version1/DataProfileV1Schema';
import { IDataProfilesController } from './IDataProfilesController';

export class DataProfilesCommandSet extends CommandSet {
    private _logic: IDataProfilesController;

    constructor(logic: IDataProfilesController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeGetProfileCommand());
		this.addCommand(this.makeSetProfileCommand());
    }

	private makeGetProfileCommand(): ICommand {
		return new Command(
			"get_profile",
			new ObjectSchema(true)
				.withRequiredProperty('profile_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profileId = args.getAsNullableString("profile_id");
                this._logic.getProfile(correlationId, profileId, callback);
            }
		);
	}

	private makeSetProfileCommand(): ICommand {
		return new Command(
			"set_profile",
			new ObjectSchema(true)
				.withRequiredProperty('profile', new DataProfileV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profile = args.get("profile");
                this._logic.setProfile(correlationId, profile, callback);
            }
		);
	}

}