import { createEmployee } from "../service/createEmployee"

export class EmployeeController {
    constructor () {}

    async createEmployee(req: any, res: any) {
        try {
            await createEmployee(req.body);
            res.status(201).send();
        } catch (error) {
            res.status(500).send({message: error})
        }
    }
}