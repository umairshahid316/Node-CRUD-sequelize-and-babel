import db from "./config/db.config"
// var db = require("../config/db.config")

var Employee = function (employee) {
  this.first_name = employee.first_name
  this.last_name = employee.last_name
  this.email = employee.email
  this.salary = employee.salary
}

/* get all employee */
Employee.getAllEmployees = (result) => {
  db.query("SELECT * FROM employee ", (err, res) => {
    if (err) {
      console.log("Error while fetching employee: ", err)
      result(null, err)
    } else {
      console.log("Employee fetched Successfully")
      result(null, res)
    }
  })
}

/* get employee by ID */
Employee.getEmployeeByID = (id, result) => {
  db.query("SELECT * FROM employee where employeeID = ?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching employee by id ", err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

/* create new employee */
Employee.createEmployee = (employeeReqData, result) => {
  db.query("INSERT INTO employee SET ? ", employeeReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data ")
      result(null, err)
    } else {
      console.log("Employee Created Successfully")
      result(null, res)
    }
  })
}

/* update employee */
Employee.updateEmployee = (id, employeeReqData, result) => {
  db.query(
    "update employee set first_name=?, last_name=?, email=?, salary=? where employeeID=?",
    [
      employeeReqData.first_name,
      employeeReqData.last_name,
      employeeReqData.email,
      employeeReqData.salary,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the employee")
        result(null, err)
      } else {
        console.log("Employee updated successfully")
        result(null, res)
      }
    }
  )
}

/* delete employee */
Employee.deleteEmployee = (id, result) => {
  db.query("delete from employee where id=?", [id], (err, res) => {
    if (err) {
      console.log("Delete employee ", err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

export default Employee
