const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
//returns true if the email does exist in db

async function Registration_check(email) {
  var bool = false;
  var query = { email: email };
  try {
    var result = await client.db("testdb").collection("testc").findOne(query);

    //   console.log(result.length);

    if (result) {
      // console.log(result);
      // console.log(result + "should not be here");
      bool = true;
    }

  }
  catch (err) {
    console.log(err)
  }
  finally {
    await client.close();
  }
  return bool;
};

//returns true if the email and password exist in db
async function Login_Check(email, password) {
  var bool = false;
  var query = { email: email, password: password };
  try {
    var result = await client.db("testdb").collection("testc").findOne(query);

    if (result) {
      bool = true;
    }
  }
  catch (err) {
    console.log(err)
  }
  finally {
    await client.close
  }
  return bool;
};

//returns true if the expense was successfully inserted and can be found in the database
async function Expense_Insert_Check(email, amount, date, description, category) {

  const document = {
    email: email,
    amount: amount,
    date: date,
    description: description,
    category: category
  }

  client.db("testdb").collection("Expense").insertOne(document);

  var bool = true;
  var query = {email: email, date: date, description: description, category: category, amount: amount}


  try {
    var result = await (await client.db("testdb").collection("Expense").find(query).toArray());
    console.log(result);
    if (result.length) {
      bool = true;
    }
    else {
      bool = false;
    }

  }

  catch (err) {
    console.log(err)
  }
  finally {
    await client.close();
  }
  return bool;
}

//returns true if the income was successfully inserted and can be found in the database
async function Income_Insert_Check(email, amount, date, type) {

  const document = {
    email: email,
    amount: amount,
    date: date,
    type: type
  }

  client.db("testdb").collection("Income").insertOne(document);

  var bool = true;
  var query = {email: email, date: date, type: type, amount: amount}


  try {
    var result = await (await client.db("testdb").collection("Income").find(query).toArray());
    console.log(result);
    if (result.length) {
      bool = true;
    }
    else {
      bool = false;
    }

  }

  catch (err) {
    console.log(err)
  }
  finally {
    client.db("testdb").collection("Income").deleteOne(query);
    await client.close
  }
  return bool;
}


module.exports = { Registration_check, Login_Check, Expense_Insert_Check, Income_Insert_Check };
