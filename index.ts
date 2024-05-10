import express from "express"
import { EmployeeController } from "./controller/EmployeeController";

const app = express();

app.use(express.json());

const employeeController = new EmployeeController();

app.post('/employee', employeeController.createEmployee);

app.listen(3000, () => {
    console.log("Server online on port 3000")
})
