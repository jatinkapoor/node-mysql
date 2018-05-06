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
    question();
  });
}

const endConnection = function () {
  connection.end();
}

const question = function () {

  inquirer.prompt([

    menuList

  ]).then(answers => {

    console.log(answers);

    routeTasks(answers.option);
  });
}

const menuList = {
  message: "Select an Option",
  type: "list",
  name: "option",
  choices: [
    "View Products for Sale",
    "View Low Inventory",
    "Add To Inventory",
    "Add New Product"
  ]
}


const addProduct = [
  {
    message: "item_id",
    type: "input",
    name: "item_id",
    validate: input => {
      return /^[0-9]*$/.test(input.trim());
    }
  },
  {
    message: "product_name",
    type: "input",
    name: "product_name"
  },
  {
    message: "department_name",
    type: "input",
    name: "department_name"
  },
  {
    message: "price",
    type: "input",
    name: "price",
    validate: input => {
      return /^[0-9]*$/.test(input.trim());
    }
  },
  {
    message: "stock_quantity",
    type: "input",
    name: "stock_quantity",
    validate: input => {
      return /^[0-9]*$/.test(input.trim());
    }
  }
]
  


const routeTasks = function (option) {

  switch (option) {

    case "View Products for Sale":
      return viewProductsForSale();

    case "View Low Inventory":
      return viewLowInventory();

    case "Add To Inventory":
      return addToInventory();

    case "Add New Product":
      return addNewProductPrompt();

    default:
      break;
  }

}

const viewProductsForSale = function () {
  console.log("In viewProductsForSale");
  const query = connection.query(`SELECT * FROM products`,
    function (err, res) {

      if (err) throw err;

      console.log(`Products For Sale...`);
      console.table(res);

      endConnection();
    });

}

const viewLowInventory = function () {
  console.log("In viewLowInventory");
  const query = connection.query(`SELECT * FROM products WHERE stock_quantity < 5`,
    function (err, res) {

      if (err) throw err;

      if (res.length > 0) {
        console.log(`Low Inventory Items...`);
        console.table(res);
      } else {
        console.log("All Items are surplus");
      }

      endConnection();
    });
}

const addToInventory = function () {

}

const addNewProduct = function(answers) {
  connection.query(`INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ?`)
}

const addNewProductPrompt = function () {
  console.log("In Add New Product");
  inquirer.prompt(
    addProduct
  ).then(answers => {
    console.log(answers);
    addNewProduct(answers);
  });
}


initialize();