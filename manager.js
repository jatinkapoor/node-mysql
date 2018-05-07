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
      return viewItemsForInventory();

    case "Add New Product":
      return addNewProductPrompt();

    default:
      break;
  }

}

const viewProductsForSale = function () {

  const query = connection.query(`SELECT * FROM products`,
    function (err, res) {

      if (err) throw err;

      console.log(`Products For Sale...`);
      console.table(res);

      endConnection();
    });

}

const viewLowInventory = function () {
  
  const query = connection.query(`SELECT * FROM products WHERE stock_quantity < 5`,
    function (err, res) {

      if (err) throw err;

      if (res.length > 0) {
        console.log(`Low Inventory Items...`);
        console.table(res);
      } else {
        console.log("All Items are Surplus");
      }

      endConnection();
    });
}

const viewItemsForInventory = function () {

  const query = connection.query(`SELECT item_id, product_name FROM products`,
    function (err, res) {

      if (err) throw err;

      console.table(res);

      const products = res.map(element => {
        return `(${element.item_id})      ${element.product_name}`;
      });

      productList.choices = products;
      inventoryQuestion();

    });
}

const productList = {
  message: `Select product for which you want to update inventory \n \n 
  (productId) productName`,
  name: "productId",
  type: "list"
}

const quantityQuestion = {
  message: "Quantity",
  type: "input",
  name: "quantity",
  validate: (input) => {
    return /^[0-9]*$/.test(input.trim());
  }
}

const inventoryQuestion = function () {
  inquirer.prompt([
    productList,
    quantityQuestion
  ]).then(answers => {
    const startIndex = answers.productId.indexOf('(') + 1;
    const endIndex = answers.productId.indexOf(')', startIndex);
    const productId = answers.productId.substring(startIndex, endIndex);
    const quantity = answers.quantity;
    updateInventory(productId, quantity);
  });
}


const updateInventory = function (productId, quantity) {

  const prodId = parseInt(productId);
  const qtity = parseInt(quantity);
  connection.query(`SELECT stock_quantity FROM products WHERE item_id = ${prodId}`,
    function (err, res) {

      if (err) throw err;

      const availableQuantity = parseInt(res[0].stock_quantity);

      const newQuantity = qtity + availableQuantity;

      connection.query(`UPDATE products SET stock_quantity = ${newQuantity} WHERE item_id = ${prodId}`,
        function (err, res) {

          if (err) throw err;

          console.log("Quantity Updated For Product " + productId);
          console.log("Inventory Stands at " + newQuantity);
          endConnection();
        });
    });
}

const addNewProductPrompt = function () {

  inquirer.prompt(
    addProduct
  ).then(answers => {
    addNewProduct(answers);
  });
}

const addNewProduct = function (answers) {
  connection.query(`INSERT INTO products SET ?`, {
    item_id: parseInt(answers.item_id),
    product_name: answers.product_name,
    department_name: answers.department_name,
    price: parseInt(answers.price),
    stock_quantity: parseInt(answers.stock_quantity)
  }, function (err) {
    if (err) throw err;
    console.log("New Product Added");
    endConnection();
  });
}


initialize();