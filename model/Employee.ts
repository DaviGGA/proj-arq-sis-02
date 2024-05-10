
export abstract class Employee {
    protected goalReached: boolean

    constructor(
        protected name: string,
        protected cpf: string,
        protected salary: number,
        protected seniority: string

    ) {
        if (!name) throw new Error("Invalid error");
        if(!cpf) throw new Error("Invalid cpf");
        if (!salary || salary < 0) throw new Error("Invalid salary");
        this.goalReached = false;
    }

    getName() {
        return this.name;
    }

    getCpf() {
        return this.cpf;
    }

    abstract getBonus(): number;

    abstract getRole(): string

    getSalary() {
        return this.salary;
    }

    getFullSalary() {
        return this.salary + this.getBonus();
    }

    getSeniority() {
        return this.seniority;
    }


}