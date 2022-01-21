const mongoose = require('mongoose');
const User = require('./User')

mongoose.connect("mongodb://localhost/testdb",
()=>{
    console.log("connected")
},
e => console.error(e))

async function F1(){
    /*  */
    const user = await User.create({name:"Kayle", age:26})
    user.name = "sally"
    await user.save()
    /*  */
    // const user = new User ({name:"Kayle", age:26});
    // await user.save()
    /*  */
    console.log(user)
}
// F1()
async function F2(){
    /*  */
    try{

        const user = await User.create({
            name:"Kayle",
            age:22,
            email:"test@test.test",
            hobbies:["one","two"],
            address: {
                street: "LA"
            }
            
        })
         
        console.log(user)
    }catch(e){
    console.log(e.message)
    }
    }
F2()
