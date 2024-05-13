import { Employee } from "./Employee";

export class Marketing extends Employee {
    
    constructor(name:string, cpf: string, salary: number, seniority: string) {
        super(name, cpf, salary, seniority);
    }
    
    getBonus(): number {
        if (!this.goalReached) return 0;
        if (this.seniority == "TRAINEE") return this.salary * 0.03;
        if (this.seniority == "JUNIOR") return this.salary * 0.06;
        if (this.seniority == "MID") return this.salary * 0.1;
        return this.salary * 0.25;
    }

    getRole(): string {
        return "Marketing"
    }


}