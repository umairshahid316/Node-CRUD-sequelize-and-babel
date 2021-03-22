// import Employee from "../models/employee.model"
import EmployeeModel from "../../employee.model"
// const EmployeeModel = require("../models/employee.model")
import { sequelize, User, post } from "../../models"

/* NEW create new Post */
export const createNewPost = async (req, res) => {
  const { userUuid, body } = req.body
  console.log("HERE ", userUuid + body)
  //check null

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log(" i am here 1")
    res.send(400).send({ success: false, message: "please fill All feilds" })
  } else {
    try {
      const user = await User.findOne({ where: { uuid: userUuid } })

      const postReqData = await post.create({ body, userId: user.id })
      console.log("HERE ", postReqData)
      return res.json(postReqData)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }
}

/* NEW get all employee list */
export const getPostList = async (req, res) => {
  try {
    const employeeReqData = await post.findAll({ include: "user" })
    return res.json(employeeReqData)
  } catch (err) {
    return res.status(500).json({ error: "something went wrong" })
  }
}

/*NEW get post by id  */
// export const getPostByID = async (req, res) => {
//   const uuid = req.params.id
//   try {
//     const employeeReqData = await Post.findOne({
//       where: { uuid },
//       // include: "posts",
//     })
//     return res.json(employeeReqData)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ error: "something went wrong" })
//   }
// }

/* END */

/* Update employee */
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

/* Delete employee */
// export const deleteEmployee = (req, res) => {
//   EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
//     if (err) res.send(err)
//     res.json({ status: true, message: "Employee deleted successfully!" })
//   })
// }
