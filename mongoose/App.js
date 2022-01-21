const mongoose = require('mongoose');
const User = require('./User')

mongoose.connect("mongodb://localhost/testdb",
    () => {
        console.log("connected")
    },
    e => console.error(e))

async function F1() {
    /*  */
    const user = await User.create({ name: "Kayle", age: 26 })
    user.name = "sally"
    await user.save()
    /*  */
    // const user = new User ({name:"Kayle", age:26});
    // await user.save()
    /*  */
    console.log(user)
}
// F1()
async function F2() {
    /*  */
    try {

        const user = await User.create({
            name: "Kayle",
            age: 22,
            email: "test@test.test",
            hobbies: ["one", "two"],
            address: {
                street: "LA"
            }

        })

        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
// F2()

/* Query Basics */

async function F3() {
    try {
        // const user = await User.findById("61e9cbcaa29f880c5d0856b1")
        /*  */
        // const user = await User.find({name:"Kayle"})
        /*  */
        // const user = await User.findOne({name:"Kayle"})
        /*  */
        // const user = await User.exists({name:"Kayle"})
        /*  */
        // const user = await User.deleteMany({name:"Kayle"})
        /*  */
        // const user = await User.deleteMany({name:"Kayle"})
        /*  */
        // const user = await User.where("name").equals("sally")
        /*  */
        // const user = await User.where("age")
        // .gt(21)
        // .where("name")
        // .equals("yassine")
        // .select("name")
        /* ADD bestFriend */
        // const user = await User.where("age")
        //     .gt(21)
        //     .where("name")
        //     .equals("yassine")
        //     .select("name")
        //     .limit(1)
        // user[0].bestFriend = "61e9cbcaa29f880c5d0856b1",
        //     await user[0].save()
        /* select include bestFriend */
        // const user = await User.where("age")
        //     .gt(21)
        //     .where("name")
        //     .equals("yassine")
        //     .select("name")
        //     .limit(2)
        //     .populate("bestFriend")
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
// F3()

/* Schema Methods */

async function F4() {
    try {
        // const user =  await User.findOne({name: "omar"})
        // user.sayHi()
        /* Static function */
        // const user =  await User.findByName("omar")
        /* query */
        // const user =  await User.find().byName("omar")

        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
// F4()

/* Virtual */

async function F5() {
    try {
        // const user = await User.findOne({ name: "sally", email: "test@test.ef" })
        console.log(user)
        console.log(user.namedEmail)
    } catch (e) {
        console.log(e.message)
    }
}
// F5()
