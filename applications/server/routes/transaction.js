const { query } = require('express');
let express = require('express');
let router = express.Router();

const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

// Insert functions that will input data onto mongodb
// ---------------------------
async function expenseInsert(bodyInfo) {

  try {
    await client.connect()

    const email = bodyInfo.email
    const amount = bodyInfo.amount
    const date = {
      day: bodyInfo.day,
      month: bodyInfo.month,
      year: bodyInfo.year
    }
    const description = bodyInfo.description
    const category = bodyInfo.category

    const validate = await client.db("testdb").collection("testc").findOne({ email: email })
    if (!validate && email === req.session.email) throw "Invalid User"

    const document = {
      email: email,
      amount: amount,
      date: date,
      description: description,
      category: category
    }

    const result = await client.db("testdb").collection("Expense").insertOne(document)
    if (!result.acknowledged) throw "No Result"
    return result

  } catch (err) {
    return "Incomplete"
  } finally {
    await client.close()
  }

}

async function incomeInsert(bodyInfo) {

  try {
    await client.connect()

    const email = bodyInfo.email
    const amount = bodyInfo.amount
    const date = {
      day: bodyInfo.day,
      month: bodyInfo.month,
      year: bodyInfo.year
    }
    const type = bodyInfo.type


    const validate = await client.db("testdb").collection("testc").findOne({ email: email })
    if (!validate) throw "Invalid User"

    const document = {
      email: email,
      amount: amount,
      date: date,
      type: type
    }

    const result = await client.db("testdb").collection("Income").insertOne(document)
    if (!result.acknowledged) throw "No Result"
    return result

  } catch (err) {
    return "Incomplete"
  } finally {
    await client.close()
  }

}

async function savingInsert() {

  try {
    await client.connect()

    const email = bodyInfo.email
    const amount = bodyInfo.amount
    const date = {
      day: bodyInfo.day,
      month: bodyInfo.month,
      year: bodyInfo.year
    }

    const validate = await client.db("testdb").collection("testc").findOne({ email: email })
    if (!validate) throw "Invalid User"

    const document = {
      email: email,
      amount: amount,
      date: date
    }

    const result = await client.db("testdb").collection("Saving").insertOne(document)
    if (!result.acknowledged) throw "No Result"
    return result

  } catch (err) {
    return "Incomplete"
  } finally {
    await client.close()
  }
}
// ---------------------------

// Functions will connect to with mongoDB to retrieve information of a given user
// If user does not exist, then error will be thrown and not list will be send back
// ---------------------------
async function getExpenseList(email, month, year) {
  let query;
  try {
    await client.connect()
    year = parseInt(year);
    if(!month.hyperparam){
      month = parseInt(month);
      query = {
        "email": email,
        "date.month": month,
        "date.year": year
      };
    }
    else{
      query = {
        "email": email,
        "date.year": year
      };
    }
    const result = await client.db("testdb").collection("Expense").find(query).toArray()

    if (result.length === 0) {
      throw 'List was not found'
    }
    return result
  } catch (err) {
    console.log(err)
  } finally {
    // await client.close()
  }
}

async function getIncomeList(email, month, year) {
  let query;
  try {
    await client.connect()
    year = parseInt(year);
    if(!month.hyperparam){
      month = parseInt(month);
      query = {
        "email": email,
        "date.month": month,
        "date.year": year
      };
    }
    else{
      query = {
        "email": email,
        "date.year": year
      };
    }
    const result = await client.db("testdb").collection("Income").find(query).toArray()
    if (result.length === 0) {
      throw 'List was not found'
    }
    return result
  } catch (err) {
    console.log(err)
  } finally {
    // await client.close()
  }
}

async function getSavingList(email) {
  try {
    await client.connect()
    const result = await client.db("testdb").collection("Saving").find({ email: email }).toArray()
    if (result.length === 0) {
      throw 'List was not found'
    }
    return result
  } catch (err) {
    console.log(err)
  } finally {
    await client.close()
  }
}
// ---------------------------

/* GET for inserting documents */
// ---------------------------
router.post('/expenseInsert', (req, res, next) => {
  expenseInsert(req.body)
    .then(result => {
      if (result === "Incomplete") {
        res.send("Could not add to expense")
      } else {
        res.send("Added expense")
      }
    })
})

router.post('/incomeInsert', (req, res, next) => {
  incomeInsert(req.body)
    .then(result => {
      if (result === "Incomplete") {
        res.send("Could not add to income")
      } else {
        res.send("Added income")
      }
    })
})

router.get('/savingInsert', (req, res, next) => {
  savingInsert(req.body)
    .then(result => {
      if (result === "Incomplete") {
        res.send({ msg: "Could not add to saving" })
      } else {
        res.send("Added saving")
      }
    })
})
// ---------------------------



/* GET list when requested from the front end */
// ---------------------------
router.get('/expenseList*', (req, res, next) => {
  getExpenseList(req.session.email.email, req.query.month, req.query.year)
    .then(result => {
      if (result === undefined) {
        res.send({ msg: "No list for expense" })
      } else {
        res.json(result)
      }
    })
});
router.get('/insightsExpenseList', (req, res, next) => {
  let email = req.session.email.email;
  let month = {
    body: req.query.month,
    hyperparam: req.query.hyperparam
  }
  let year = req.query.year;
  getExpenseList(email, month, year)
    .then(result => {
      if (result === undefined) {
        res.send({ msg: "No list for expense" })
      } else {
        res.json(result)
      }
    })
});
router.get('/insightsIncomeList', (req, res, next) => {
  let email = req.session.email.email;
  let month = {
    body: req.query.month,
    hyperparam: req.query.hyperparam
  }
  let year = req.query.year;
  getIncomeList(email, month, year)
    .then(result => {
      if (result === undefined) {
        res.send({ msg: "No list for income" })
      } else {
        res.json(result)
      }
    })
});

router.get('/incomeList*', (req, res, next) => {
  getIncomeList(req.session.email.email, req.query.month, req.query.year)
    .then(result => {
      if (result === undefined) {
        res.send({ msg: "No list for income" })
      } else {
        res.json(result)
      }
    })
});

router.get('/savingList', (req, res, next) => {
  getSavingList(req.body.email)
    .then(result => {
      if (result === undefined) {
        res.send({ msg: "No list for saving" })
      } else {
        res.json(result)
      }
    })
});
// ---------------------------

module.exports = {router, incomeInsert, expenseInsert};
