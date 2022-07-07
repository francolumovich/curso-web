const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployee = async (req,res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee created'})
}

employeeCtrl.createEmployees = (req,res) => {
    res.send('create employees')
}

employeeCtrl.updateEmployee = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: "employee updated"})
}

employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: "deleted"})
}

module.exports = employeeCtrl;