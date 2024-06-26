import { Financist } from './../model/Financist';
import { Developer } from "../model/Developer";
import { Marketing } from '../model/Marketing';


export class EmployeeFactory {
    static create(type: string, name:string, cpf: string, salary: number, seniority: string) {
        if (type == "DEVELOPER") return new Developer(name,cpf, salary, seniority);
        if (type == "FINANCIST") return new Financist(name,cpf, salary, seniority);
        if (type == "Marketing") return new Marketing(name, cpf , salary, seniority);
        throw new Error("Could not create employe with type " + type);
    }
}