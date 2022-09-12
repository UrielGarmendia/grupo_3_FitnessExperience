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
  `price` int NOT NULL,
  `description` VARCHAR(1500) NOT NULL,
  `discount` VARCHAR(4),
  `image` BLOB NOT NULL,
  PRIMARY KEY (`id`),
  foreign key(`id_user`) references users(`id`));
  -- -----------------------------------
  create table `fit_xperience`.`categories` (
  `id` int not null auto_increment,
  `name` varchar(50) not null,
  PRIMARY KEY (`id`)
  );
  -- -----------------------------------------
   create table `fit_xperience`.`products_categories` (
   `id_product` int not null,
   `id_category` int not null,
   foreign key(`id_product`) references products(`id`),
   foreign key(`id_category`) references categories(`id`)
   );
  -- ---------------------------------------------
  -- INSERTS
  -- ---------------------------------------------
insert into `fit_xperience`.`users` (id, name, email, password) values (1, 'Kermie', 'kdring0@nih.gov', 'vHnffZDenUWw'),
 (2, 'Imogene', 'iantos1@soup.io', 'DWXLZt'),
 (3, 'Lauritz', 'lalten2@newsvine.com', 'zMVjqiw'),
 (4, 'Maxi', 'mleathers3@ustream.tv', 'OIwdnZUUr'),
 (5, 'Rozina', 'rrumney4@desdev.cn', 'SW3qOvegkuSS'),
 (6, 'Dalenna', 'dpetronis5@barnesandnoble.com', 'uUDmrx'),
 (7, 'Ursa', 'uengland6@amazon.co.jp', 'lGIau0bpu'),
 (8, 'Vidovic', 'vgregoretti7@jimdo.com', 'GNYCmET2W'),
 (9, 'Codi', 'csever8@blog.com', 'SifSgE1oKt'),
(10, 'Fern', 'fcleef9@washington.edu', 'gPS1SvQ60mW');
-- ----------------------------------------------------------------------
insert into products (id, id_user, name, price, description, image) values (1, 4, 'Colchoneta', '12876', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', '/public/images/colchoneta.webp'),
 (2, 3, 'Mancuerna', '79023', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', ''),
 (3, 1, 'Discos', '30024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Elementum.mp3'),
 (4, 8, 'Cuerdas', '44392', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'QuisLibero.tiff'),
 (5, 4, 'Banda elástica', '70838', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'SedVestibulumSit.ppt'),
 (6, 10, 'Multigimnasio', '38146', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Leo.tiff'),
 (7, 5, 'Pelota', '61538', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'AliquamSit.xls'),
 (8, 10, 'Barra', '62517', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'NatoquePenatibus.xls'),
 (9, 2, 'Bicicleta fija', '43329', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'DisParturient.mp3'),
 (10, 7, 'Banco multiposición', '60878', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
', 'Venenatis.ppt');
-- ----------------------------------------------------------------------------
insert into categories (id, name) values (1, 'Musculación'),
 (2, 'Pilates'),
 (3, 'Funcional'),
 (4, 'Calistenia'),
 (5, 'Cardio'),
 (6, 'Ciclismo'),
 (7, 'Accesorios'),
 (8, 'Gym en casa'),
 (9, 'Electrónica'),
 (10, 'Rehabilitación deportiva');
-- -------------------------------------------------------------------------------------------
 insert into products_categories (id_product, id_category) values (7, 5);  
 insert into products_categories(id_product, id_category) values (8, 9);
 insert into products_categories(id_product, id_category) values (2, 3);
 insert into products_categories(id_product, id_category) values (9, 1);
 insert into products_categories(id_product, id_category) values (3, 8);
 insert into products_categories(id_product, id_category) values (8, 9);
 insert into products_categories(id_product, id_category) values (10, 6);
 insert into products_categories(id_product, id_category) values (4, 10);
 insert into products_categories(id_product, id_category) values (6, 1);
 insert into products_categories(id_product, id_category) values (10, 5);