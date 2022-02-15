"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckEntity = void 0;
const DurableEntity_1 = require("../common/DurableEntity");
const HealthCheckState_1 = require("../ui/src/shared/HealthCheckState");
// Healthcheck entity
class HealthCheckEntity extends DurableEntity_1.DurableEntity {
    sendHealthCheck(msg) {
        msg.timestamp = new Date();
        /*
                // extracting symptoms
                Object.keys(SymptomsEnum).map(symptomKey => {
        
                    const symptomName = SymptomsEnum[symptomKey];
                    if (msg.text.toLowerCase().includes(symptomName.toLowerCase())) {
                     
                        this.state.symptoms.push();
                    }
                });
        */
        this.state.history.push(msg);
    }
    // Custom state initialization for a newly created entity
    initializeState() {
        var newState = new HealthCheckState_1.HealthCheckState();
        newState.history.push({
            text: `Hi ${this.stateMetadata.owner}, how do you feel today?`,
            timestamp: new Date()
        });
        return newState;
    }
}
exports.HealthCheckEntity = HealthCheckEntity;
//# sourceMappingURL=HealthCheckEntity.js.map