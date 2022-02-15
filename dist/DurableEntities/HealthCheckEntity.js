"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckEntity = void 0;
const DurableEntity_1 = require("../common/DurableEntity");
const HealthCheckState_1 = require("../ui/src/shared/HealthCheckState");
// Healthcheck entity
class HealthCheckEntity extends DurableEntity_1.DurableEntity {
    sendHealthCheck(msg) {
        const healthCheck = new HealthCheckState_1.ChatMessage();
        healthCheck.text = msg;
        healthCheck.timestamp = new Date();
        // extracting symptoms
        Object.keys(HealthCheckState_1.SymptomsEnum).map(symptomKey => {
            const symptomName = HealthCheckState_1.SymptomsEnum[symptomKey].toString();
            if (msg.toLowerCase().includes(symptomName.toLowerCase())) {
                this.state.symptoms.push(parseInt(symptomKey));
            }
        });
        this.state.history.push(healthCheck);
    }
    // Custom state initialization for a newly created entity
    initializeState() {
        var newState = new HealthCheckState_1.HealthCheckState();
        newState.history = [
            {
                text: `Hi, how do you feel today?`,
                timestamp: new Date(),
                isFromServer: true
            }
        ];
        return newState;
    }
}
exports.HealthCheckEntity = HealthCheckEntity;
//# sourceMappingURL=HealthCheckEntity.js.map