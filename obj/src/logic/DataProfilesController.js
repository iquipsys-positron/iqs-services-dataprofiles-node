"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const DataProfileV1_1 = require("../data/version1/DataProfileV1");
const DataProfilesCommandSet_1 = require("./DataProfilesCommandSet");
const StandardSensorParameterTypesV1_1 = require("../data/version1/StandardSensorParameterTypesV1");
const StandardSensorEventTypesV1_1 = require("../data/version1/StandardSensorEventTypesV1");
const StandardActuatorCommandTypesV1_1 = require("../data/version1/StandardActuatorCommandTypesV1");
const StandardSensorStateTypesV1_1 = require("../data/version1/StandardSensorStateTypesV1");
class DataProfilesController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(DataProfilesController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new DataProfilesCommandSet_1.DataProfilesCommandSet(this);
        return this._commandSet;
    }
    addStandardTypes(profile) {
        if (profile == null)
            return null;
        profile.param_types = profile.param_types || [];
        profile.param_types.push(...StandardSensorParameterTypesV1_1.StandardSensorParameterTypesV1);
        profile.event_types = profile.event_types || [];
        profile.event_types.push(...StandardSensorEventTypesV1_1.StandardSensorEventTypesV1);
        profile.command_types = profile.command_types || [];
        profile.command_types.push(...StandardActuatorCommandTypesV1_1.StandardActuatorCommandTypesV1);
        profile.state_types = profile.state_types || [];
        profile.state_types.push(...StandardSensorStateTypesV1_1.StandardSensorStateTypesV1);
        return profile;
    }
    removeStandardTypes(profile) {
        if (profile == null)
            return null;
        profile.param_types = _.filter(profile.param_types, p => p.id >= 100);
        profile.event_types = _.filter(profile.event_types, e => e.id >= 100);
        profile.command_types = _.filter(profile.command_types, c => c.id >= 100);
        profile.state_types = _.filter(profile.state_types, s => s.id >= 100);
        return profile;
    }
    getProfile(correlationId, profileId, callback) {
        this._persistence.getOneById(correlationId, profileId, (err, profile) => {
            if (err == null && profile == null) {
                profile = new DataProfileV1_1.DataProfileV1();
                profile.id = profileId;
            }
            profile = this.addStandardTypes(profile);
            callback(err, profile);
        });
    }
    setProfile(correlationId, profile, callback) {
        profile = this.removeStandardTypes(profile);
        this._persistence.set(correlationId, profile, (err, profile) => {
            profile = this.addStandardTypes(profile);
            callback(err, profile);
        });
    }
}
exports.DataProfilesController = DataProfilesController;
DataProfilesController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'iqs-services-dataprofiles:persistence:*:*:1.0');
//# sourceMappingURL=DataProfilesController.js.map