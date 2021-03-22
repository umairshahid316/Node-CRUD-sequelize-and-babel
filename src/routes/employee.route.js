import express, { Router } from "express"
const router = express.Router()

import {
  getEmployeeList,
  getEmployeeByID,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee.controller"
// const employeeController = require("../controllers/employee.controller")

/*get all employees  */
router.get("/", getEmployeeList)

/*get  employee by ID */
router.get("/:id", getEmployeeByID)

/*create new employee*/
router.post("/", createNewEmployee)

/* update employee */
router.put("/:id", updateEmployee)

router.delete("/:id", deleteEmployee)

export default router
// module.exports = router
