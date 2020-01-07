import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class SensorStateTypeV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('id', TypeCode.Integer);
        this.withRequiredProperty('name', TypeCode.String);
        this.withRequiredProperty('algorithm', TypeCode.String);
        this.withOptionalProperty('param_id', TypeCode.Integer);
        this.withOptionalProperty('command_id', TypeCode.Integer);
        this.withOptionalProperty('event_id', TypeCode.Integer);
        this.withOptionalProperty('on_event_id', TypeCode.Integer);
        this.withOptionalProperty('off_event_id', TypeCode.Integer);
        this.withOptionalProperty('min_value', TypeCode.Float);
        this.withOptionalProperty('max_value', TypeCode.Float);
    }
}
