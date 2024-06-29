
export class person{
    personality: string;
    constructor(personality: string){
        this.personality = personality;
    }
    
    checkPerson(awnser: number): void{
        if(awnser == 1){
            this.personality = "Extrovert";
        }
        else if(awnser == 2){
            this.personality = "Introvart";
        }
        else{
            this.personality = "You still a Mystery."
        }
    }

    getPersonality(){
        return this.personality;
    }
}


