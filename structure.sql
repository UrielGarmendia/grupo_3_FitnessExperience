create database fit_xperience;
show databases;
use fit_xperience;
-- ------------------------------------------------
-- CREATE TABLES
-- ------------------------------------------------
create table `fit_xperience`.`users`(
`id` int not null auto_increment,
`name` varchar(150) not null,
`email` VARCHAR(150) NOT NULL,
`password` varchar (20) not null,
primary key (`id`)
);
-- -------------------------------
CREATE TABLE `fit_xperience`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(1500) NOT NULL,
  `image` BLOB NOT NULL,
  PRIMARY KEY (`id`),
  foreign key(`id_user`) references user(`id`));
  -- -----------------------------------
  create table `fit_xperience`.`categories` (
  `id` int not null auto_increment,
  `name` varchar(50) not null,
  PRIMARY KEY (`id`)
  );
  -- -----------------------------------------
  create table `fit_xperience`.`products_categories` (
  `id_product` int not null,
  `id_categorie` int not null,
  foreign key(`id_product`) references products(`id`),
  foreign key(`id_categorie`) references categories(`id`)
  );
  -- ---------------------------------------------
  -- INSERTS
  -- ---------------------------------------------
insert into `fit_xperience`.`users` (id, name, email, password) values (1, 'Kermie', 'kdring0@nih.gov', 'vHnffZDenUWw');
insert into `fit_xperience`.`users` (id, name, email, password) values (2, 'Imogene', 'iantos1@soup.io', 'DWXLZt');
insert into `fit_xperience`.`users` (id, name, email, password) values (3, 'Lauritz', 'lalten2@newsvine.com', 'zMVjqiw');
insert into `fit_xperience`.`users`(id, name, email, password) values (4, 'Maxi', 'mleathers3@ustream.tv', 'OIwdnZUUr');
insert into `fit_xperience`.`usersusersusers` (id, name, email, password) values (5, 'Rozina', 'rrumney4@desdev.cn', 'SW3qOvegkuSS');
insert into `fit_xperience`.`users` (id, name, email, password) values (6, 'Dalenna', 'dpetronis5@barnesandnoble.com', 'uUDmrx');
insert into `fit_xperience`.`users`(id, name, email, password) values (7, 'Ursa', 'uengland6@amazon.co.jp', 'lGIau0bpu');
insert into `fit_xperience`.`users` (id, name, email, password) values (8, 'Vidovic', 'vgregoretti7@jimdo.com', 'GNYCmET2W');
insert into `fit_xperience`.`users` (id, name, email, password) values (9, 'Codi', 'csever8@blog.com', 'SifSgE1oKt');
insert into `fit_xperience`.`users`(id, name, email, password) values (10, 'Fern', 'fcleef9@washington.edu', 'gPS1SvQ60mW');
-- ----------------------------------------------------------------------
insert into product (id, id_user, name, price, description, image) values (1, 4, 'Colchoneta', '$12876.41', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'NonSodales.xls');
insert into product (id, id_user, name, price, description, image) values (2, 3, 'Mancuerna', '$79023.71', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'SociisNatoquePenatibus.mov');
insert into product (id, id_user, name, price, description, image) values (3, 1, 'Discos', '$30024.33', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Elementum.mp3');
insert into product (id, id_user, name, price, description, image) values (4, 8, 'Cuerdas', '$44392.09', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'QuisLibero.tiff');
insert into product (id, id_user, name, price, description, image) values (5, 4, 'Banda elástica', '$70838.34', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'SedVestibulumSit.ppt');
insert into product (id, id_user, name, price, description, image) values (6, 10, 'Multigimnasio', '$38146.54', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Leo.tiff');
insert into product (id, id_user, name, price, description, image) values (7, 5, 'Pelota', '$61538.22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'AliquamSit.xls');
insert into product (id, id_user, name, price, description, image) values (8, 10, 'Barra', '$62517.17', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'NatoquePenatibus.xls');
insert into product (id, id_user, name, price, description, image) values (9, 2, 'Bicicleta fija', '$43329.92', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'DisParturient.mp3');
insert into product (id, id_user, name, price, description, image) values (10, 7, 'Banco multiposición', '$60878.57', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Venenatis.ppt');
-- ----------------------------------------------------------------------------
insert into categories (id, name) values (1, 'Musculación');
insert into categories (id, name) values (2, 'Pilates');
insert into categories (id, name) values (3, 'Funcional');
insert into categories (id, name) values (4, 'Calistenia');
insert into categories (id, name) values (5, 'Cardio');
insert into categories (id, name) values (6, 'Ciclismo');
insert into categories (id, name) values (7, 'Accesorios');
insert into categories (id, name) values (8, 'Gym en casa');
insert into categories (id, name) values (9, 'Electrónica');
insert into categories (id, name) values (10, 'Rehabilitación deportiva');
-- -------------------------------------------------------------------------------------------
insert into products_categories (id_product, id_categories) values (7, 5);
insert into products_categories (id_product, id_categories) values (10, 5);
insert into products_categories (id_product, id_categories) values (8, 9);
insert into products_categories (id_product, id_categories) values (2, 3);
insert into products_categories (id_product, id_categories) values (9, 1);
insert into products_categories (id_product, id_categories) values (3, 8);
insert into products_categories (id_product, id_categories) values (8, 9);
insert into products_categories (id_product, id_categories) values (10, 6);
insert into products_categories (id_product, id_categories) values (4, 10);
insert into products_categories (id_product, id_categories) values (6, 1);