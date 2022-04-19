const hash = require('md5')

class AccountController {
    async login(req, res) {
        const { nameOrEmail, password} = req.body

        db.Models.User.findOne({
            where: {
                [Op.or]: {
                    name: nameOrEmail,
                    [Op.and]: {
                        email: nameOrEmail
                    }
                }
            }
        }).then((data) => handle(data))

        function handle(data) {
            if (data == null) return res.status(200).send('notFound')
            if (data.password != hash(password)) return res.status(200).send('incorrectPassword')
            else return res.status(200).send('success')
        }
    }

    async register(req, res) {
        const { name, email, password } = req.body

        db.Models.User.findOne({
            where: {
                [Op.or]: {
                    name: email,
                }
            }
        }).then((data) => handle(data))

        function handle(data) {
            if (!data) {
                db.Models.User.create({
                    name,
                    email,
                    password: hash(password),
                })
                return res.status(200).send('success')
            }
            else return res.status(200).send('emailIsBusy')
        }
    }
}

module.exports = new AccountController()