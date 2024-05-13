import { EmployeeRepository } from "../repository/employee-repository";

const employeeRepository = new EmployeeRepository();

export async function getPayroll(): Promise<number> {
    const employees =  await employeeRepository.getEmployees();
    let payroll = 0;
    employees.forEach( e => payroll += e.getFullSalary());
    return payroll;
}