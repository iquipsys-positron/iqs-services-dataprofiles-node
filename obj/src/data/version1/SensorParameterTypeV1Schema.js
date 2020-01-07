"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class SensorParameterTypeV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withRequiredProperty('name', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('algorithm', pip_services3_commons_node_2.TypeCode.String);
        this.withRequiredProperty('value_type', pip_services3_commons_node_2.TypeCode.String);
        this.withOptionalProperty('value_unit', pip_services3_commons_node_2.TypeCode.String);
        this.withOptionalProperty('min_value', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('max_value', pip_services3_commons_node_2.TypeCode.Float);
    }
}
exports.SensorParameterTypeV1Schema = SensorParameterTypeV1Schema;
//# sourceMappingURL=SensorParameterTypeV1Schema.js.map