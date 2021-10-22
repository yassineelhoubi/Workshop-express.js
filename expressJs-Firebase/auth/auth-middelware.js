const firebase = require('../config/db');
const fireAuth = firebase.auth();
const admin = require("../config/firebase-services");
const register = async (req , res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const response = await fireAuth.createUserWithEmailAndPassword(email , password)
            res.status(201).json({
                message: "the registration is done",
                response: response,
                error: false
            })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const login = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const response = await fireAuth.signInWithEmailAndPassword(email, password)
      .then(async ()=>{
        const token = await fireAuth.currentUser.getIdToken();
        res.status(201).json({
            message: "the registration is done",
            token: token,
            error: false
        })
      })
        .catch((error) => {
          console.log(error.message);
          res.status(201).json({
            message: "There is no user record corresponding to this identifier. The user may have been deleted.",
            error: false
        })
        });
   
    } catch (error) {
      res.status(400).json({ message: error.message });
      return null;
    } 
  };


  
  // Function that check if the user is authenticated
  const checkIfAuthenticated = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        req.authToken = req.headers.authorization.split(" ")[1];
      } else {
        req.authToken = null;
      }
    try {
        const { authToken } = req;
        const userInfo = await admin.auth().verifyIdToken(authToken);

        req.authId = userInfo.uid;
        return next();
      } catch (e) {
        return res
          .status(401)
          .json({ error: "You are not authorized to make this request" });
      }
  };

module.exports = {
    register,
    login,
    checkIfAuthenticated,
}
