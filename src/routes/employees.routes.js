const { Router } = require('express')
const router = Router()

const employeesCtrl = require('../controllers/employees.controller.js')
//CRUD
//CREATE -ROUTE -UPDATE -DELETE 

//router.get('/', employeesCtrl.getEmployees)
router.post('/', employeesCtrl.createEmployee)
router.get('/:id', employeesCtrl.getEmployee)
router.put('/:id', employeesCtrl.updateEmployee)
router.delete('/:id', employeesCtrl.deleteEmployee)

module.exports = router