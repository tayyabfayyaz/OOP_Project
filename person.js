export class person {
    personality;
    constructor(personality) {
        this.personality = personality;
    }
    checkPerson(awnser) {
        if (awnser == 1) {
            this.personality = "Extrovert";
        }
        else if (awnser == 2) {
            this.personality = "Introvart";
        }
        else {
            this.personality = "You still a Mystery.";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
