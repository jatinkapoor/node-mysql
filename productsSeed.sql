DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
	item_id INT NOT NULL UNIQUE,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255),
	price INT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(101, "iphone x", "electronics", 1000, 2000);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(102, "macbook pro", "electronics", 1500, 500);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(103, "ipad", "electronics", 600, 800);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(104, "headphones", "electronics", 150, 1000);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(105, "galaxy s9", "electronics", 900, 2000);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(106, "surface pro", "electronics", 1000, 500);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(107, "apple watch", "electronics", 400, 3000);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(108, "x box", "electronics", 800, 50);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(109, "jeans", "clothing", 100, 10000);
INSERT INTO PRODUCTS
	(item_id, product_name, department_name, price, stock_quantity)
VALUES
	(110, "shoes", "clothing", 100, 10000);