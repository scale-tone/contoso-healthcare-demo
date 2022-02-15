
import { DurableEntity, VisibilityEnum } from '../common/DurableEntity';
import { HealthCheckState, ChatMessage, SymptomsEnum } from '../ui/src/shared/HealthCheckState';

// Healthcheck entity
export class HealthCheckEntity extends DurableEntity<HealthCheckState>
{

    sendHealthCheck(msg: ChatMessage) {
        
        msg.timestamp = new Date();

        // extracting symptoms
        Object.keys(SymptomsEnum).map(symptomKey => {

            const symptomName = SymptomsEnum[symptomKey];
            if (msg.text.toLowerCase().includes(symptomName.toLowerCase())) {
             
                this.state.symptoms.push();
            }
        });

        this.state.history.push(msg);
    }

    // Custom state initialization for a newly created entity
    protected initializeState(): HealthCheckState {

        var newState = new HealthCheckState();

        newState.history.push({
            text: `Hi ${this.stateMetadata.owner}, how do you feel today?`,
            timestamp: new Date()
        });

        return newState;
    }
}
