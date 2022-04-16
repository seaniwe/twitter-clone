const express = require('express');
const app = express();
const serverUtils = require('./utils/index');

serverUtils.setHeaders(app, express)
serverUtils.listenServer(app)