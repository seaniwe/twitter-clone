const express = require('express');
const cors = require('cors')
const app = express();
const serverUtils = require('./utils/index');
const router = require('./router/index')
const option = require('./corsOption')

app.use(cors(option))
app.use(express.json())
app.use('/ua', router)

// serverUtils.setHeaders(app, express, router)
serverUtils.listenServer(app)
