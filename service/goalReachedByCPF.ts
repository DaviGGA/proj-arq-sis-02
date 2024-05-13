import { EmployeeRepository } from "../repository/employee-repository";

const employeeRepository = new EmployeeRepository();

export async function goalReachedByCPF(cpf: string) {
    await employeeRepository.setGoalReachedByCPF(cpf);
}