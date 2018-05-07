const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello123',
  database: 'bamazon'
});

const initialize = function () {
  connection.connect((err) => {
    if (err) throw err;
    displayProducts();
  });
}

const endConnection = function () {
  connection.end();
}

const displayProducts = function () {
  const query = connection.query(`SELECT item_id, product_name, price FROM products`,
    function (err, res) {

      if (err) throw err;

      console.log(`Our line of products...`)
      console.table(res);

      const products = res.map(element => {
        return `(${element.item_id})      ${element.product_name}`;
      });

      productList.choices = products;
      question();

    });
}

const question = function () {

  inquirer.prompt([

    productList,
    quantity

  ]).then(answers => {
    const startIndex = answers.productId.indexOf('(') + 1;
    const endIndex = answers.productId.indexOf(')', startIndex);
    const productId = answers.productId.substring(startIndex, endIndex);
    const quantity = answers.quantity;
    checkout(productId, quantity);
  });
}

const productList = {
  message: "Select product for purchase \n\n (productId) productName ",
  type: "list",
  name: "productId"
}

const quantity = {
  message: "quantity",
  type: "input",
  name: "quantity",
  validate: (input) => {
    if (input > 0) {
      return true;
    } else {
      return "Enter Valid quantity";
    }
  }
}

const checkout = function (productId, quantity) {
  connection.query(`SELECT stock_quantity, price FROM products WHERE item_id = "${productId}"`,
    function (err, res) {

      if (err) throw err;

      if (res[0].stock_quantity >= quantity) {
        updateQuantity(productId, res[0].stock_quantity, quantity, res[0].price);
      } else {
        console.log("Insufficient quantity!");
        endConnection();
      }
    });
}

const updateQuantity = function (productId, stock_quantity, quantity, price) {
  connection.query(`UPDATE products SET stock_quantity = ${stock_quantity} WHERE item_id = "${productId}"`,
    function (err, res) {

      if (err) throw err;

      console.log("Order Placed !!");
      console.log("Total Cost of Purchase " + "$" + quantity * price);
      endConnection();
    });
}

initialize();