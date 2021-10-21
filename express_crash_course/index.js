const express = require('express');
const path = require('path');

const exphbs = require('express-handlebars')

const logger = require('./middelware/logger')
const app = express();



// Init Middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// app.get('/' , (req , res) => {
//     // res.send('<h1>Hello Word </h1>')
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'))
// })




// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// set static folder
app.use(express.static(path.join(__dirname , 'public')))
// Members API Routes
app.use('/api/members' , require('./routes/api/members'))
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log(`server strarted in port ${PORT}`));