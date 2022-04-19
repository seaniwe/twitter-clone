const cors = require('cors')
global.db = require('../db/index');

module.exports = {
    async listenServer(app) {
        try {
            app.listen(5000, () => {
                console.log(`server is started`);
                db.connect()
            })
            
        } catch (error) {
            return this.listenServer(app);
        }
    },
    
    setHeaders(app, express, router) {
        app.use(cors())
        app.use(express.json())
        app.use('/ua', router)
    }
}