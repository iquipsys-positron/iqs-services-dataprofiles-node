"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const DataProfileV1Schema_1 = require("../data/version1/DataProfileV1Schema");
class DataProfilesCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetProfileCommand());
        this.addCommand(this.makeSetProfileCommand());
    }
    makeGetProfileCommand() {
        return new pip_services3_commons_node_2.Command("get_profile", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('profile_id', pip_services3_commons_node_4.TypeCode.String), (correlationId, args, callback) => {
            let profileId = args.getAsNullableString("profile_id");
            this._logic.getProfile(correlationId, profileId, callback);
        });
    }
    makeSetProfileCommand() {
        return new pip_services3_commons_node_2.Command("set_profile", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('profile', new DataProfileV1Schema_1.DataProfileV1Schema()), (correlationId, args, callback) => {
            let profile = args.get("profile");
            this._logic.setProfile(correlationId, profile, callback);
        });
    }
}
exports.DataProfilesCommandSet = DataProfilesCommandSet;
//# sourceMappingURL=DataProfilesCommandSet.js.map