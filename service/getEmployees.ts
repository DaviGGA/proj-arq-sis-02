import { EmployeeRepository } from "../repository/employee-repository";

const employeeRepository = new EmployeeRepository();

export async function getEmployees() {
    const employees = await employeeRepository.getEmployees();
    return employees.map( e => {
        return {
            name: e.getName(),
            cpf: e.getCpf(),
            salary: e.getSalary(),
            type: 'a'
        }
        
    })
}