import { createEmployee } from "../service/createEmployee"
import { getPayroll } from "../service/getPayroll";
import { getEmployees } from "../service/getEmployees";
import { goalReachedByCPF } from "../service/goalReachedByCPF";

export class EmployeeController {
    constructor () {}

    async createEmployee(req: any, res: any) {
        try {
            await createEmployee(req.body);
            res.status(201).send();
        } catch (error) {
            console.log(error)
            res.status(500).send({message: error})
        }
    }

    async getEmployees(req:any, res:any) {
        try {
            const employees = await getEmployees();
            res.status(200).send(employees)
        } catch (error) {
            console.log(error)
            res.status(500).send({message: error})
        }
    }

    async getPayroll(req: any, res: any) {
        try {
            const payroll = await getPayroll();
            res.status(200).send(payroll);
        } catch (error) {
            console.log(error);
            res.status(500).send({message: error})
        }
    }

    async goalReachedByCPF(req: any, res: any) {
        const {cpf} = req.body;
        try {
            await goalReachedByCPF(cpf);
            res.status(200).send();
        } catch (error) {
            console.log(error);
            res.status(500).send({message: error})
        }
    }
}