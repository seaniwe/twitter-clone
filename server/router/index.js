const Router = require('express')
const router = new Router
const accountRouter = require('./account')

router.use('/account', accountRouter)

module.exports = router