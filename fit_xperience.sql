-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: fit_xperience
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Musculación'),(2,'Pilates'),(3,'Funcional'),(4,'Calistenia'),(5,'Cardio'),(6,'Ciclismo'),(7,'Accesorios'),(8,'Gym en casa'),(9,'Electrónica'),(10,'Rehabilitación deportiva');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `image` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (22,1,'Multigimnasio',78300,'Multigimnasio 50KG',_binary 'img-1665705296792-descarga.jfif'),(26,1,'Barra Body Funcional Hueca C/ Tope 30mm 1,40m Fitnesas Gym',5179,'BARRA BODY PUMP 30mm x 1,40mts. - Hueca con extremos cromados - Agarre recubierto en NBR - Largo 140cm - Diámetro ø30mm - Parte negra: 90cm - Parte plateada: 25cm por lado - Peso aprox. 2 kg - Producto importado de excelente calidad y terminación - Incluye los 2 topes tipo “mariposa”',_binary 'img-1666042218443-D_NQ_NP_788611-MLA44927267977_022021-O.webp'),(27,1,'Disco Con Agarre Importado 5 Kg Caucho Engomado Funcional',5213,'INCLUYE: 1 DISCO 5 KG ENGOMADO CON AGARRE IMPORTADO   DESCRIPCIÓN DEL PRODUCTO:  *DISCO 5 KG ENGOMADO CON AGARRE IMPORTADO*  • Peso: 5 kg. • Diámetro Interno: 30 mm. • Diámetro Externo: 250 mm. • Grosor: 30 mm • Color: Según elección. • Material: Caucho importado • Diseño: Exclusivo diseño anti rodamiento • Superficie: Apto para todo tipo de superficies • Agarre ergonómico • Ideal para entrenar en interiores o al aire libre • Pensado para fortalecer brazos, espalda, hombros, piernas, glúteos y abdominales. • Sirven tanto para barras de Body Pump como para barras de 30 mm. • Complemento ideal para entrenamiento de Crossfit o Funcional.     *El precio publicado es por una unidad.',_binary 'img-1666042298891-D_NQ_NP_669383-MLA44881114456_022021-O.webp'),(28,1,'Mancuerna Hexagonal Engomada 8 Kg Goma Pesa Maciza Gym',9203,'Mancuerna Hexagonal - IMPORTADA FITNESAS Material: Goma de alta densidad Color: Negro Peso: 8 kg Precio por unidad Forma de la mancuerna Hexagonal Mancuerna Hexagonal con punta de goma Cromadas Engomadas Agarre antideslizante',_binary 'img-1666042375701-D_NQ_NP_859967-MLA42432520499_072020-O.webp'),(29,1,'Tobilleras Con Peso Pesas Regulables 3 Kg Precio X Par',2530,'PAR DE TOBILLERAS DE 3 KG SUPER REFORZADAS  Con ajuste regulable  Doble costuras  CON CIERRE  Hilo de nylon  PRECIO POR PAR',_binary 'img-1666042428176-D_NQ_NP_718250-MLA44050687382_112020-O.webp'),(30,1,'Banda Con Manijas Importada Latex Fitnesas Tension Fuerte',665,'Bandas Bandas de Resistencia Bandas Elásticas Con Manijas Tensión Reforzada Gym Kit Ejercicio En Casa Fitness Entrenamiento Gimnasia Musculación BANDA ELASTICA CON MANIJAS IMPORTADA - FITNESAS',_binary 'img-1666042486739-D_NQ_NP_835655-MLA42472080666_072020-O.webp'),(31,1,'Colchoneta Gimnasia Con Cierre Entrenamiento Fitness Gym',1825,'Colchoneta 1 x 42 x 3 cm  • Dimensiones: 100 x 42 x 3 cm. • Densidad : 90kg/m3 (se recomienda su uso hasta un peso de 80/85kg). • Relleno: Goma espuma, densidad media. • Funda: Reforzada, fácil de lavar, con cierre. • Colores: Aleatorio - Sujeto a disponibilidad. • Liviana y transportable.',_binary 'img-1666042531550-D_NQ_NP_680331-MLA41098851736_032020-O.webp'),(32,1,'Speed Rope Soga Saltar Pvc Premium Para Entrenamiento Negro',555,'SOGA DE SALTO SPEED ROPE PVC PREMIUM - FITNESAS  DESCRIPCIÓN:   -*SOGA DE SALTO SPEED ROPE PVC PREMIUM – FITNESAS*  • Material PVC premium • Largo: 2.70 mt • Largo mango: 12 cm • Especial para entrenamiento y doble saltos. • Agarre liviano y firme. • Largo regulable • Mangos plásticos • ideal para entrenamiento en casa • Producto Importado',_binary 'img-1666042649399-D_NQ_NP_968402-MLA42472283907_072020-O.webp'),(33,1,'Rueda Doble Para Abdominales Ab Wheel Somos Fabricantes',2418,'RUEDA PARA ABDOMINALES - SOMOS FABRICANTES -  Rueda Abdominal Doble Ruedita Abdominal Ejercitador Abdominal  *RUEDA DOBLE PARA ABDOMINALES*  • Dimensiones: 30 cm largo X 19 cm alto. • Mango de 11,5 cm. • Ancho de cada rueda: 4 cm • Color: Según disponibilidad de Stock • Cubierta: Banda plástica antideslizante. • Material: Plástico de calidad y eje de hierro macizo. • Ultra – Resistente. • Soporta hasta 150kg • Estable, diseño de dos ruedas. • No ralla el piso • Agarre de Goma ergonómico. • Fortalece abdominales, hombros, brazos, muslos y zona lumbar. • Elemento fundamental para un entrenamiento funcional.',_binary 'img-1666042759395-D_NQ_NP_761632-MLA41799160150_052020-O.webp'),(34,1,'Banco Sentadillas Sissy Gym Entrenamiento Piernas Fitnesas',32552,'Banco Sissy para sentadillas con rodillos regulables en diferentes alturas. Su estructura reforzada garantiza la máxima estabilidad y seguridad. Construcción con caño de 50x50x1,2mm reforzado y un tamaño compacto, le permitirá ejercitar en casa. Rodillos de Foam importados y 5 regulaciones de altura. Pintura horneada de alta resistencia al uso. Soldadura con máquinas automáticas para su mayor solidez.  Especificaciones Largo: 100cm Ancho: 50cm Alto: 50cm  Origen: ARGENTINA',_binary 'img-1666042808698-D_NQ_NP_784565-MLA48536602420_122021-O.webp'),(35,1,'Kit Set Barra Con Topes 10 Kg En Discos Con Manija Fitnesas',6618,'KIT DE DISCOS CON MANIJAS 10 KG  ¿QUE CONTIENE EL KIT? - 1 barra con topes - 2 discos de 5 kg  CARACTERÍSTICAS  - Peso: 10 kg ( Dos discos de 5 kg ) - Color Discos: Negro - Barra cilíndrica de caño hueco. - Medidas: 1,25 metros de largo x 25 mm de diámetro. -Discos de cemento compactado recubiertos en pvc -Base de los discos: Plana para evitar el desplazamiento del disco al apoyar la barra -Diametro interno de los discos: 30 mm -Tipo de disco: PVC con manijas -Sirven tanto para barras de 28mm como para barras de 30 mm.  Peso preciso, sólidos y compactos. Herméticamente sellados, no hacen ruido, no pierden contenido ni peso con el tiempo.',_binary 'img-1666042872417-D_NQ_NP_940253-MLA44559113806_012021-O.webp'),(36,1,'Set 5 Bandas Importadas Accesorios Latex + Bolso Fitnesas',4650,'SET DE 5 BANDAS FITNESAS + ACCESORIOS (IMPORTADO)  Incluye:  5 bandas con mosquetones en sus puntas. 2 manijas 2 tobilleras 1 anclaje para puerta 1 bolso para traslado Kit super completo. Todas las bandas son de diferentes intensidad. Pueden combinarse para aumentar la tensión.  COLORES DE LAS BANDAS VARIAN SUJETOS A DISPOSICION SEGUN STOCK.',_binary 'img-1666042927284-D_NQ_NP_759793-MLA51043676044_082022-O.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_categories` (
  `id_product` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  KEY `id_product` (`id_product`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `products_categories_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `products_categories_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kermie','kdring0@nih.gov','vHnffZDenUWw'),(2,'Imogene','iantos1@soup.io','DWXLZt'),(3,'Lauritz','lalten2@newsvine.com','zMVjqiw'),(4,'Maxi','mleathers3@ustream.tv','OIwdnZUUr'),(5,'Rozina','rrumney4@desdev.cn','SW3qOvegkuSS'),(6,'Dalenna','dpetronis5@barnesandnoble.com','uUDmrx'),(7,'Ursa','uengland6@amazon.co.jp','lGIau0bpu'),(8,'Vidovic','vgregoretti7@jimdo.com','GNYCmET2W'),(9,'Codi','csever8@blog.com','SifSgE1oKt'),(10,'Fern','fcleef9@washington.edu','gPS1SvQ60mW'),(11,'Agustin','prueba@gmail.com','$2a$10$HHzH1sQ2LwJ2c'),(12,'Agustin','prueba@gmail.com','$2a$10$eG3L.wVY/bVKw'),(13,'Agustin','prueba@gmail.com','$2a$10$Evr.pxjQ8dAzr'),(14,'Agustin','prueba@gmail.com','$2a$10$5BgHSNWDb2JOD'),(16,'','alsina.agustin@gmail.com','$2a$10$RdZW2mhfLjTap'),(17,'fabian','fabianaboy1@gmail.com','$2a$10$5o7uLt.M65c8U'),(18,'asd','asd@asd.com','$2a$10$ZQc2PYTgDptYn'),(19,'alexis','zxc@zxc.com','$2a$10$BEDQqp7cr/Cb0'),(20,'pepe','asdasd@asd.com','$2a$10$QzpnqR9f71yby'),(21,'asd','asd1@gmail.com','$2a$10$shSM3Gu7SQM/y'),(22,'toto','zxc@zxc.com.ar','$2a$10$RxN6RAMvlBPOv'),(23,'Fiorella','fiorellaaboy@gmail.com','$2a$10$rlPtlB/slmirM');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fit_xperience'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-17 21:39:10
