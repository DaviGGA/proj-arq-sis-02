import { Seniority } from "../enums/Seniority"
import { EmployeeFactory } from "../factories/EmployeeFactory"
import { Employee } from "../model/Employee"
import { EmployeeRepository } from "../repository/employee-repository"

type Input = {
    name: string,
    cpf: string,
    salary: number,
    seniority: Seniority,
    employeeType: string
}

const employeeRepository = new EmployeeRepository();

export async function createEmployee(input: Input): Promise<void> {
    const employee: Employee = EmployeeFactory.create(
        input.employeeType,
        input.name, 
        input.cpf, 
        input.salary, 
        input.seniority
    )

    await employeeRepository.createEmployee(employee);
}