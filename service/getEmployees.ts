import { EmployeeRepository } from "../repository/employee-repository";

const employeeRepository = new EmployeeRepository();

type Output = {
    name: string,
    cpf: string,
    salary: number,
    role: string,
    seniority: string
}

export async function getEmployees(): Promise<Output[]> {
    const employees = await employeeRepository.getEmployees();
    return employees.map( e => {
        return {
            name: e.getName(),
            cpf: e.getCpf(),
            salary: e.getSalary(),
            role: e.getRole(),
            seniority: e.getSeniority()
        }
    })
}