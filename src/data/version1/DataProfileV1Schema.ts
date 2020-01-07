import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { SensorParameterTypeV1Schema } from './SensorParameterTypeV1Schema';
import { SensorEventTypeV1Schema } from './SensorEventTypeV1Schema';
import { ActuatorCommandTypeV1Schema } from './ActuatorCommandTypeV1Schema';
import { SensorStateTypeV1Schema } from './SensorStateTypeV1Schema';

export class DataProfileV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withOptionalProperty('param_types', new ArraySchema(new SensorParameterTypeV1Schema()));
        this.withOptionalProperty('event_types', new ArraySchema(new SensorEventTypeV1Schema()));
        this.withOptionalProperty('command_types', new ArraySchema(new ActuatorCommandTypeV1Schema()));
        this.withOptionalProperty('state_types', new ArraySchema(new SensorStateTypeV1Schema()));
    }
}
