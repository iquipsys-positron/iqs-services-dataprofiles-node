"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const SensorParameterTypeV1Schema_1 = require("./SensorParameterTypeV1Schema");
const SensorEventTypeV1Schema_1 = require("./SensorEventTypeV1Schema");
const ActuatorCommandTypeV1Schema_1 = require("./ActuatorCommandTypeV1Schema");
const SensorStateTypeV1Schema_1 = require("./SensorStateTypeV1Schema");
class DataProfileV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('id', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('param_types', new pip_services3_commons_node_2.ArraySchema(new SensorParameterTypeV1Schema_1.SensorParameterTypeV1Schema()));
        this.withOptionalProperty('event_types', new pip_services3_commons_node_2.ArraySchema(new SensorEventTypeV1Schema_1.SensorEventTypeV1Schema()));
        this.withOptionalProperty('command_types', new pip_services3_commons_node_2.ArraySchema(new ActuatorCommandTypeV1Schema_1.ActuatorCommandTypeV1Schema()));
        this.withOptionalProperty('state_types', new pip_services3_commons_node_2.ArraySchema(new SensorStateTypeV1Schema_1.SensorStateTypeV1Schema()));
    }
}
exports.DataProfileV1Schema = DataProfileV1Schema;
//# sourceMappingURL=DataProfileV1Schema.js.map