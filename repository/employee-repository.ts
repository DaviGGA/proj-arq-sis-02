import { Employee } from "../model/Employee";

const employees: Employee[] = []

export class EmployeeRepository {

    constructor () {}

    async createEmployee(employee: Employee) {
        employees.push(employee);
    }

    async getEmployees() {
        return employees;
    }

    async setGoalReachedByCPF(cpf: string) {
        const employeeIndex = employees.findIndex( e => e.getCpf() == cpf);
        employees[employeeIndex].setGoalReached();
    }

}