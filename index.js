import inquirer from "inquirer";
import { person } from "./person.js";
import { student } from "./student.js";
let getPersonInput = await inquirer.prompt({
    name: "question1",
    message: "Type 1 if you like talk to others. and type 2 if you would rather keep to yourself. ",
    type: "number"
});
let awnser = getPersonInput.question1;
let result = new person(awnser);
result.checkPerson(awnser);
console.log(`You are: ${result.getPersonality()}`);
let getStudentInput = await inquirer.prompt({
    name: "Question2",
    message: "What is your name? ",
    type: "input"
});
let studentAwnser = getStudentInput.Question2;
let studentResult = new student(studentAwnser);
console.log(`Your name is: ${studentResult.getName()} and You are ${result.getPersonality()}`);
