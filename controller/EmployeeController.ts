import { createEmployee } from "../service/createEmployee"
import { getEmployees } from "../service/getEmployees";

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
}