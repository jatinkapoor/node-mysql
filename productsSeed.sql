DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("iphone x", "electronics", 1000, 2000);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("macbook pro", "electronics", 1500, 500);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("ipad", "electronics", 600, 800);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("headphones", "electronics", 150, 1000);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("galaxy s9", "electronics", 900, 2000);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("surface pro", "electronics", 1000, 500);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("apple watch", "electronics", 400, 3000);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("x box", "electronics", 800, 50);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("jeans", "clothing", 100, 10000);
	INSERT INTO PRODUCTS
		(product_name, department_name, price, stock_quantity)
	VALUES
		("shoes", "clothing", 100, 10000);
	INSERT INTO PRODUCTS
	(product_name, department_name, price, stock_quantity)
	VALUES
	("drones", "electronics", 800, 4);
