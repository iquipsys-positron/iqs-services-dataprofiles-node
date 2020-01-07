import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class SensorEventTypeV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('id', TypeCode.Integer);
        this.withRequiredProperty('name', TypeCode.String);
        this.withRequiredProperty('algorithm', TypeCode.String);
        this.withRequiredProperty('value_type', TypeCode.String);
        this.withOptionalProperty('value_unit', TypeCode.String);
        this.withOptionalProperty('min_value', TypeCode.Float);
        this.withOptionalProperty('max_value', TypeCode.Float);
    }
}
