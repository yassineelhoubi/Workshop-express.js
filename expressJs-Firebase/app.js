const express = require('express');
const config = require('./config/config')
const app = express();
const cors = require('cors');

const studentRouters = require('./routes/student-routes')

app.use(express.json());
app.use(cors())

app.use('/api/student' , studentRouters)

app.listen(config.port, ()=> console.log('serve is runing on port :'+config.port))