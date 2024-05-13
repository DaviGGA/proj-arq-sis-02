import { Employee } from "../model/Employee";


export class EmployeeRepository {

    employees: Employee[];

    constructor () {
        this.employees = [];
    }

    async createEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    async getEmployees() {
        return this.employees;
    }

    async setGoalReachedByCPF(cpf: string) {
        const employeeIndex = this.employees.findIndex( e => e.getCpf() == cpf);
        this.employees[employeeIndex].setGoalReached();
    }

}