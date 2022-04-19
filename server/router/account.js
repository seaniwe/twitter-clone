const Router = require('express')
const router = new Router
const accountController = require('../controllers/account')

router.post('/login', accountController.login)
router.post('/register', accountController.register)

module.exports = router