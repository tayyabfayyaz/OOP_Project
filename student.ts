import { person } from "./person.js";

export class student{
    _name: string;
    constructor(name: string){
        this._name = name;
    }

    getName(){
        return this._name;
    };
}