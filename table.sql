CREATE TABLE customers(
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    contact varchar(100) NOT NULL,
    registered datetime NOT NULL,
    status tinyint(4) NOT NULL,
    PRIMARY KEY(id)
);