"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckState = exports.SymptomsEnum = exports.ChatMessage = void 0;
class ChatMessage {
    constructor() {
        this.text = '';
        this.timestamp = new Date();
    }
}
exports.ChatMessage = ChatMessage;
var SymptomsEnum;
(function (SymptomsEnum) {
    SymptomsEnum[SymptomsEnum["Fever"] = 1] = "Fever";
    SymptomsEnum[SymptomsEnum["Headache"] = 2] = "Headache";
    SymptomsEnum[SymptomsEnum["Nausea"] = 3] = "Nausea";
    SymptomsEnum[SymptomsEnum["Rash"] = 4] = "Rash";
    SymptomsEnum[SymptomsEnum["Diarrhea"] = 5] = "Diarrhea";
    // to be extended...
})(SymptomsEnum = exports.SymptomsEnum || (exports.SymptomsEnum = {}));
// Health check state
class HealthCheckState {
    constructor() {
        this.history = [];
        this.symptoms = [];
    }
}
exports.HealthCheckState = HealthCheckState;
//# sourceMappingURL=HealthCheckState.js.map