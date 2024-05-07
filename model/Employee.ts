

export class Employee {
    private goalReached: boolean

    constructor(
        private name: string,
        private cpf: string,
        private salary: number
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

    getBonus() {
        if (this.goalReached) return this.salary * 0.1;
        return 0;
    }

    getSalary() {
        return this.salary;
    }

    getFullSalary() {
        return this.salary + this.getBonus();
    }


}