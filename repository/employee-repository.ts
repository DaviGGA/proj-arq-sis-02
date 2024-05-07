import { Employee } from "../model/Employee";


export class EmployeeRepository {

    employees: Employee[];

    constructor () {
        this.employees = [];
    }

    createEmployee(employee: Employee) {
        this.employees.push(employee);
    }

}