const employeeCtrl = {}
const Employee = require('../models/Employee')

employeeCtrl.getEmployee = function(req,res) {
    if(req.params && req.params.id) {
        Employee
        .findById(req.params.id)
        .exec(function(err,employee){
            if(!employee){
                res.status(404).send({"message": "employee not found"});
                return;
            } else if (err) {
                res.status(404).send(err);
                return;
            }
            res.status(200).send(employee);
        });
    }else{
        res.status(404).send({"message": "No employee id in request"});
    }
};
/*
employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}*/

employeeCtrl.createEmployee = async (req,res) => {
    if (!req.body.name || !req.body.office || !req.body.position || !req.body.salary){
        res.status(400).send('Name, office, position and salary are required');
        return;
    }
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.status(201).send({message: 'Employee created'})
}

employeeCtrl.createEmployees = (req,res) => {
    res.send('create employees')
}

employeeCtrl.updateEmployee = async (req,res) => {
    const employee = Employee.findById(req.params.id)
    if(!employee) {
        res.status(404).send('The employee with the given ID does not exist')
        return;
    } else {
        if(!body){
            res.status(400).send('Body cannot be empty')
            return;
        }
        await Employee.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({message: 'Employee updated'})
    }
    
}

employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: "deleted"})
}

module.exports = employeeCtrl;