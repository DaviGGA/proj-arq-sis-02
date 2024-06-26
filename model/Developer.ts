import { Employee } from "./Employee";

export class Developer extends Employee {

    constructor(name:string, cpf: string, salary: number, seniority: string) {
        super(name, cpf, salary, seniority);
    }

    getBonus(): number {
        if (!this.goalReached) return 0;
        if (this.seniority == "TRAINEE") return this.salary * 0.05;
        if (this.seniority == "JUNIOR") return this.salary * 0.15;
        if (this.seniority == "MID") return this.salary * 0.20;
        return this.salary * 0.25;
    }

    getRole(): string {
        return "Developer"
    }



}