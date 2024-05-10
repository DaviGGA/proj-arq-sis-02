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

}