const { MongoClient } = require("mongodb")
const Transaction = require('../routes/transaction')

const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

let result1, result2, result3;

const email = "JESTEMAIL@JESTEMAIL.COM"
const amount = 999999;
const date = {
  day: 30,
  month: 11,
  year: 9999
}
const description = "JEST_TEST"
const category = "JEST_TEST_CATEGORY"

const type = "JEST_TYPE"


var promise1 = new Promise(function (resolve, reject) {
    let res = Expense_Insert_Check(email, amount, date, description, category)
    if (res) {
        resolve();
    } else {
        reject();
    }
});

var promise2 = new Promise(function (resolve, reject) {
    let res = Income_Insert_Check(email, amount, date, type)
    if (res) {
        resolve();
    } else {
        reject();
    }
});


var promise3 = new Promise(function (resolve, reject) {
    let res = Transaction_Date_Retrieval_Check(email, amount, date, description, category, type)
    if (res) {
        resolve();
    } else {
        reject();
    }
});



promise1.
    then(function () {
        result1 = true;
    }).
    catch(function () {
        result1 = false;
    });
test("Expense successfully inserted", () => {
    expect(result1).toBe(true)
});

promise2.
    then(function () {
        result2 = true;
    }).
    catch(function () {
        result2 = false;
    });
test("Income successfully inserted", () => {
    expect(result2).toBe(true)
});

promise3.
    then(function () {
        result3 = true;
    }).
    catch(function () {
        result3 = false;
    });
test("Transactions successfully accessed based on date", () => {
    expect(result3).toBe(true)
});


//returns true if the expense was successfully inserted and can be found in the database
async function Expense_Insert_Check(email, amount, date, description, category) {

    const document = {
      email: email,
      amount: amount,
      date: date,
      description: description,
      category: category
    }
  
    Transaction.expenseInsert(document);
    // client.db("testdb").collection("Expense").insertOne(document);
  
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
      client.db("testdb").collection("Expense").deleteOne(query);
      await client.close
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
  
    Transaction.incomeInsert(document);
  
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
  
  //returns true if a transaction and expense with a specific date can be found in the database
  
  async function Transaction_Date_Retrieval_Check(email, amount, date, description, category, type) {
  
    const incomeDocument = {
      email: email,
      amount: amount,
      date: date,
      type: type
    }
  
    client.db("testdb").collection("Income").insertOne(incomeDocument);
  
    var bool1 = true;
    var query = {date: date}
  
  
    try {
      var result = await (await client.db("testdb").collection("Income").find(query).toArray());
      console.log(result);
      if (result.date == date) {
        bool1 = true;
      }
      else {
        bool1 = false;
      }
  
    }
  
    catch (err) {
      console.log(err)
    }
  
    const expenseDocument = {
      email: email,
      amount: amount,
      date: date,
      description: description,
      category: category
    }
  
    client.db("testdb").collection("Expense").insertOne(expenseDocument);
  
    var bool2 = true;
  
  
    try {
      var result = await (await client.db("testdb").collection("Expense").find(query).toArray());
      console.log(result);
      if (result.date == date) {
        bool2 = true;
      }
      else {
        bool2 = false;
      }
  
    }
  
    catch (err) {
      console.log(err)
    }
  
    finally {
      client.db("testdb").collection("Income").deleteOne(query);
      client.db("testdb").collection("Expense").deleteOne(query);
      await client.close;
    }
    return (bool1 && bool2);
  }
