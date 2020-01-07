"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class SensorStateTypeV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withRequiredProperty('name', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('algorithm', pip_services3_commons_node_2.TypeCode.String);
        this.withOptionalProperty('param_id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('command_id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('event_id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('on_event_id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('off_event_id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('min_value', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('max_value', pip_services3_commons_node_2.TypeCode.Float);
    }
}
exports.SensorStateTypeV1Schema = SensorStateTypeV1Schema;
//# sourceMappingURL=SensorStateTypeV1Schema.js.map