CREATE DATABASE supre_prueba;
USE supre_prueba;
CREATE TABLE IF NOT EXISTS clientes(
	id int(11) not null PRIMARY KEY AUTO_INCREMENT,
    name varchar(100),
    Tdoc varchar(5),
    Ndoc  varchar(20),
    email varchar(50),
   	Fnac varchar(15),
    address varchar(100),
    age int
);