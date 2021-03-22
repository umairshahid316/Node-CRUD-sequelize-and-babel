// import Employee from "../models/employee.model"
import EmployeeModel from "../../employee.model"
// const EmployeeModel = require("../models/employee.model")
import { sequelize, User } from "../../models"
import user from "../../models/user"

/*OLD get all employee list */
// export const getEmployeeList = (req, res) => {
//   EmployeeModel.getAllEmployees((err, employees) => {
//     console.log("We are here")

//     if (err) res.send(err)
//     console.log("Employee ", employees)

//     res.send(employees)
//   })
// }

/* NEW get all employee list */
export const getEmployeeList = async (req, res) => {
  try {
    const employeeReqData = await User.findAll()
    return res.json(employeeReqData)
  } catch (err) {
    return res.status(500).json({ error: "something went wrong" })
  }
}

/* OLD get employee by id  */
// export const getEmployeeByID = (req, res) => {
//   EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
//     if (err) res.send(err)
//     console.log("Single employee data ", employee)
//     res.send(employee)
//   })
// }

/*NEW get employee by id  */
export const getEmployeeByID = async (req, res) => {
  const uuid = req.params.id
  try {
    const employeeReqData = await User.findOne({
      where: { uuid },
      include: "posts",
    })
    return res.json(employeeReqData)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: "something went wrong" })
  }
}

/* OLD create new employee */
// export const createNewEmployee = (req, res) => {
//   const employeeReqData = new EmployeeModel(req.body)
//   console.log("employeeReqData ", employeeReqData)
//   //check null

//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     console.log(" i am here 1")
//     res.send(400).send({ success: false, message: "please fill All feilds" })
//   } else {
//     EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
//       if (err) {
//         res.send(err)
//       }
//       res.json({
//         status: true,
//         message: "Employee created Successfully",
//         data: employee.insertId,
//       })
//     })
//   }
// }

/* NEW create new employee */
export const createNewEmployee = async (req, res) => {
  const { name, email, role } = req.body

  //check null

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log(" i am here 1")
    res.send(400).send({ success: false, message: "please fill All feilds" })
  } else {
    try {
      // const employeeReqData = await User.create(req.body)
      const employeeReqData = await User.create({ name, email, role })
      return res.json(employeeReqData)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }
}

/* NEW Update employee */
export const updateEmployee = async (req, res) => {
  // console.log("employeeReqData update ", employeeReqData)

  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "please fill all feilds" })
  } else {
    try {
      const uuid = req.params.id
      const { name, email, role } = req.body

      const employeeReqData = await User.findOne({ where: { uuid } })

      employeeReqData.name = name
      employeeReqData.email = email
      employeeReqData.role = role

      await employeeReqData.save()
      return res.json(employeeReqData)
    } catch (err) {
      console.log(err)
      return res.status(400).json({ error: "something went wrong" })
    }
  }
}

/* OLD Update employee */
// export const updateEmployee = (req, res) => {
//   const employeeReqData = new EmployeeModel(req.body)
//   console.log("employeeReqData update ", employeeReqData)

//   //check null
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res.send(400).send({ success: false, message: "please fill all feilds" })
//   } else {
//     EmployeeModel.updateEmployee(
//       req.params.id,
//       employeeReqData,
//       (err, employee) => {
//         if (err) res.send(err)
//         res.json({ status: true, message: "Employee updated successfully" })
//       }
//     )
//   }
// }

/* NEW Delete employee */
export const deleteEmployee = async (req, res) => {
  try {
    const uuid = req.params.id
    const employeeReqData = await User.findOne({ where: { uuid } })

    await employeeReqData.destroy()

    return res.json({ message: "User deleted" })
  } catch (err) {
    return res.status(500).json({ error: "something" })
  }
}

/* OLD Delete employee */
// export const deleteEmployee = (req, res) => {
//   EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
//     if (err) res.send(err)
//     res.json({ status: true, message: "Employee deleted successfully!" })
//   })
// }
