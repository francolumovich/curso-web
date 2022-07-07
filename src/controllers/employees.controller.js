const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployee = (req,res) => {}

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = (req,res) => {
    res.send('create employee')
}

employeeCtrl.createEmployees = (req,res) => {
    res.send('create employees')
}

employeeCtrl.updateEmployee = (req,res) => {}
employeeCtrl.deleteEmployee = (req,res) => {}

module.exports = employeeCtrl;