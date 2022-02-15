
import * as DurableFunctions from "durable-functions"
import { HealthCheckEntity } from '../DurableEntities/HealthCheckEntity';
export default DurableFunctions.entity((ctx) => new HealthCheckEntity(ctx as any).handleSignal());
        