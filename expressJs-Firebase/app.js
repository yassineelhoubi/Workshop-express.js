const express = require('express');
const config = require('./config/config')
const app = express();
const cors = require('cors');

const studentRouters = require('./routes/student-routes')
const authRouters = require('./routes/auth-routes')
const auth = require("./auth/auth-middelware");
app.use(express.json());
app.use(cors())

app.use(function (req, res, next) {
    var urls = ['/api/student/get','/api/auth/login','/api/auth/register' ]
    if (
        urls.includes(req.originalUrl)
      ) {
        return next();
      } else {
        auth.checkIfAuthenticated(req, res, next);
      }
})

app.use('/api/student' , studentRouters);
app.use('/api/auth' , authRouters);


app.listen(config.port, ()=> console.log('serve is runing on port :'+config.port))