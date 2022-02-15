"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DurableFunctions = require("durable-functions");
const HealthCheckEntity_1 = require("../DurableEntities/HealthCheckEntity");
exports.default = DurableFunctions.entity((ctx) => new HealthCheckEntity_1.HealthCheckEntity(ctx).handleSignal());
//# sourceMappingURL=index.js.map