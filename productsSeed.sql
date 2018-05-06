DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL UNIQUE,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255),
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity) 
	VALUES (1000, "iphone x", "electronics", 1000, 2000);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity) 
	VALUES (2000, "macbook pro", "electronics", 1500, 500);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity)
	VALUES (3000, "ipad", "electronics", 600, 800);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity)
	VALUES (4000, "headphones", "electronics", 150, 1000);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity) 
	VALUES (5000, "galaxy s9", "electronics", 900, 2000);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity) 
	VALUES (6000, "surface pro", "electronics", 1000, 500);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity) 
	VALUES (7000, "apple watch", "electronics", 400, 3000);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity)
	VALUES (8000, "x box", "electronics", 800, 50);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity)
	VALUES (9000, "jeans", "clothing", 100, 10000);

INSERT INTO PRODUCTS(item_id, product_name, department_name, price, stock_quantity)
	VALUES (10000, "shoes", "clothing", 100, 10000);