
export class ChatMessage {

    text: string = '';
    timestamp: Date = new Date();
    isFromServer: boolean = false;
}

export enum SymptomsEnum {
    Fever = 1,
    Headache,
    Nausea,
    Rash,
    Diarrhea,
    // to be extended...
}

// Health check state
export class HealthCheckState
{
    history: ChatMessage[] = [];
    symptoms: SymptomsEnum[] = [];
}