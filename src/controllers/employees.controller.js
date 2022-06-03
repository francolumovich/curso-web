const employeeCtrl = {}

employeeCtrl.getEmployee = (req,res) => {}
employeeCtrl.getEmployees = (req,res) => {
    res.send('get employees')
}
employeeCtrl.createEmployees = (req,res) => {
    res.send('create employees')
}

employeeCtrl.updateEmployee = (req,res) => {}
employeeCtrl.deleteEmployee = (req,res) => {}

module.exports = employeeCtrl;