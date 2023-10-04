const Verify = require('../verification/Verify');

let result;

var promise = new Promise(function (resolve, reject) {
    let res = Verify.Login_Check('testuser', 'pass')
    if (res) {
        resolve();
    } else {
        reject();
    }
});

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


var promise2 = new Promise(function (resolve, reject) {
    let res = Verify.Expense_Insert_Check(email, amount, date, description, category)
    if (res) {
        resolve();
    } else {
        reject();
    }
});

var promise3 = new Promise(function (resolve, reject) {
    let res = Verify.Income_Insert_Check(email, amount, date, type)
    if (res) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        result = true;
    }).
    catch(function () {
        result = false;
    });
test("Login verification parameters an existing user", () => {
    expect(result).toBe(true)
});

promise2.
    then(function () {
        result = true;
    }).
    catch(function () {
        result = false;
    });
test("Expense successfully inserted", () => {
    expect(result).toBe(true)
});

promise3.
    then(function () {
        result = true;
    }).
    catch(function () {
        result = false;
    });
test("Income successfully inserted", () => {
    expect(result).toBe(true)
});
