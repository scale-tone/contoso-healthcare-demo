
import { DurableEntity, VisibilityEnum } from '../common/DurableEntity';
import { HealthCheckState, ChatMessage, SymptomsEnum } from '../ui/src/shared/HealthCheckState';

// Healthcheck entity
export class HealthCheckEntity extends DurableEntity<HealthCheckState>
{

    sendHealthCheck(msg: string) {
        
        const healthCheck = new ChatMessage();

        healthCheck.text = msg;
        healthCheck.timestamp = new Date();

        // extracting symptoms
        const symptomKeys = Object.keys(SymptomsEnum).map(k => parseInt(k)).filter(k => !isNaN(k));
        symptomKeys.map(symptomKey => {

            const symptomName = SymptomsEnum[symptomKey];
            if (msg.toLowerCase().includes(symptomName.toLowerCase())) {
             
                this.state.symptoms.push(symptomKey);
            }
        });

        this.state.history.push(healthCheck);
    }

    // Custom state initialization for a newly created entity
    protected initializeState(): HealthCheckState {

        var newState = new HealthCheckState();

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
