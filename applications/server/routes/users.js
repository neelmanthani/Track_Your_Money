var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb")
const Verify = require('../verification/Verify')
const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

async function getName() {
  try {
    await client.connect()
    const result = await client.db("testdb").collection("testc").find().toArray()
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
  }
}

async function insertSingle(email, password) {
  try {
    const database = client.db("testdb");
    const collection = database.collection("testc");
    // create a document to insert
    const doc = {
      email: email,
      password: password,
    }
    const result = await collection.insertOne(doc);
    return result.insertedId;
  } finally {
    await client.close();
  }
}

/* GET users listing. */
router.get('/', (req, res, next) => {
  getName()
    .then(result => {
      res.json(result);
    })
});

router.post('/Registration', (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  Verify.Registration_check(email)
    .then(return_result => {
      if (return_result) {
        // console.log("email elready exist check in users.js");
      }
      else {
        insertSingle(req.body.email, req.body.password)
          .then(result => {
            res.send(result);
          })
      }
    });



});
router.get('/Get_Session_Data', (req, res, next) => {
  return res.send(req.session);
});

router.get('/Sign-out', (req, res, next) => {
  console.log("in sign out");
  req.session.active = false;
  req.session.email = null;
  return res.send(req.session);
});

router.post('/Login', (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  Verify.Login_Check(email, password)
    .then(return_result => {
      if (!return_result) {
        // if returns false emailand password dont exist
        console.log(return_result)
        return res.send({ result: false, msg: "Login Failed!" });
      }
      else {
        //console.log(return_result)
        // console.log(email, password);

        if (!req.session.active) {
          req.session.active = true;
          req.session.email = {
            email
          };

        }

        // var response_object = {
        //   result: true,
        //   session_object: req.session

        // }
        return res.send({ result: true, msg: "Login Successful!", session_object: req.session });
      }
    })

});


module.exports = router;
