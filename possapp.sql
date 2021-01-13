/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.3.16-MariaDB : Database - posapp
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`posapp` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `posapp`;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_category` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `category` */

insert  into `category`(`id`,`name_category`,`created_at`,`updated_at`) values 
(1,'microcontroller','2020-02-18 17:46:40','2020-02-18 17:46:40'),
(2,'komponen','2020-02-17 21:03:09','2020-02-17 21:03:09'),
(3,'catu daya','2020-02-20 06:48:51','2020-02-20 06:48:51'),
(18,'Battery','2020-03-09 10:40:26','2020-03-09 10:40:26'),
(31,'woi','2020-04-01 17:02:38','2020-04-01 17:02:38');

/*Table structure for table `order_product` */

DROP TABLE IF EXISTS `order_product`;

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBuyer` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `stock` int(80) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  KEY `id_category` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `order_product` */

insert  into `order_product`(`id`,`idBuyer`,`id_product`,`id_category`,`stock`,`price`,`total`,`created_at`,`updated_at`) values 
(4,0,1,2,2,15000,30000,'2020-02-22 14:13:10','2020-02-22 14:13:10'),
(6,0,48,1,10,899,8990,'2020-02-22 14:19:34','2020-02-22 14:19:34'),
(7,0,48,1,2,25000,50000,'2020-02-22 14:24:07','2020-02-22 14:24:07');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(225) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(80) NOT NULL,
  `stock` int(30) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `id_category` (`id_category`),
  KEY `stock` (`stock`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`description`,`image`,`price`,`stock`,`id_category`,`created_at`,`updated_at`) values 
(1,'Arduino Uno','hello','http://localhost:4000/uploads/uno.jpg',100000,270,1,'2020-03-30 06:47:25','2020-03-31 10:17:51'),
(2,'Arduino Mega','Microcontroller','http://localhost:4000/uploads/mega.jpg',150000,200,1,'2020-04-02 19:04:50','2020-04-02 19:04:50'),
(3,'Arduino Nano','Arduino','http://localhost:4000/uploads/httpsstatics3.seeedstudio.comimagesproductarduino20nano.jpg',35000,20,1,'2020-04-02 19:12:24','2020-04-02 19:12:24'),
(4,'ichibot ultimate 3x','Robotic','http://localhost:4000/uploads/ichibotultimate3x.PNG',1000000,200,1,'2020-04-02 19:18:11','2020-04-02 19:18:11'),
(5,'Arduino Uno R3 SMD','Microcontroller','http://localhost:4000/uploads/unor3smd.jpg',55000,100,1,'2020-04-02 19:19:20','2020-04-02 19:19:20'),
(6,'Resistor 330','Resistor','http://localhost:4000/uploads/rg18k.jpg',500,80,2,'2020-04-02 19:20:05','2020-04-02 19:20:05');

/*Table structure for table `purchase` */

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase` (
  `idBuyer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idBuyer`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `purchase` */

insert  into `purchase`(`idBuyer`,`totalPayment`,`date_added`) values 
('a94ba601-ee92-40fc-9b65-91c7fa4f69e4',1150000,'2020-04-01 00:00:00'),
('a4e2b4c5-0bec-4c03-82d8-8ae535934e95',3150000,'2020-04-01 00:00:00'),
('24c212f4-f8d2-4ab2-8913-22f909d99f67',300000,'2020-04-01 00:00:00'),
('159a35d1-9d44-4662-ab49-1f2aacaeb995',1150000,'2020-03-31 00:00:00'),
('5755b826-0cba-45c3-957b-b6b33948c1aa',1000000,'2020-03-31 00:00:00'),
('3972de5c-0e67-4f51-a4af-4438b7998bdc',2000000,'2020-03-31 00:00:00'),
('919d409e-dec8-4d1a-8923-3f2f4dfb1f90',100000,'2020-03-31 00:00:00'),
('736f4b82-856e-4f39-b25b-63c5ef639d7e',501500,'2020-03-31 00:00:00'),
('0c9c4d0d-1036-4e72-ac70-1d59b6be99c3',150000,'2020-04-01 00:00:00'),
('e7746f54-a9c3-4bfe-844b-ccf6eb40b06a',1150000,'2020-04-01 17:59:06'),
('e6c924ee-e611-49fc-9cb9-1431fa2e3825',100000,'2020-04-02 01:47:38'),
('65a81ede-0b29-491d-a879-070dbfe17336',2300000,'2020-04-02 10:31:28'),
('c071c88b-d7a1-4e54-9da3-35e106ea4fe0',2000000,'2020-04-02 10:34:38'),
('d7b96fd8-e70b-426a-ab5f-bde5dfa501e7',100000,'2020-04-02 10:54:49');

/*Table structure for table `purchase_detail` */

DROP TABLE IF EXISTS `purchase_detail`;

CREATE TABLE `purchase_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBuyer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idProduct` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `purchase_detail` */

insert  into `purchase_detail`(`id`,`idBuyer`,`idProduct`,`stock`,`price`,`date_added`) values 
(67,'e7746f54-a9c3-4bfe-844b-ccf6eb40b06a',3,1,1000000,'2020-04-01 18:09:42'),
(66,'e7746f54-a9c3-4bfe-844b-ccf6eb40b06a',2,1,150000,'2020-04-01 18:09:42'),
(65,'a94ba601-ee92-40fc-9b65-91c7fa4f69e4',3,1,1000000,'2020-04-01 18:09:42'),
(64,'a94ba601-ee92-40fc-9b65-91c7fa4f69e4',2,1,150000,'2020-04-01 18:09:42'),
(63,'0c9c4d0d-1036-4e72-ac70-1d59b6be99c3',2,1,150000,'2020-04-01 18:09:42'),
(62,'a4e2b4c5-0bec-4c03-82d8-8ae535934e95',3,3,3000000,'2020-04-01 18:09:42'),
(61,'a4e2b4c5-0bec-4c03-82d8-8ae535934e95',2,1,150000,'2020-04-01 18:09:42'),
(60,'24c212f4-f8d2-4ab2-8913-22f909d99f67',3,2,300000,'2020-04-01 18:09:42'),
(59,'159a35d1-9d44-4662-ab49-1f2aacaeb995',3,1,150000,'2020-04-01 18:09:42'),
(70,'65a81ede-0b29-491d-a879-070dbfe17336',2,2,2000000,'2020-04-02 10:31:28'),
(69,'65a81ede-0b29-491d-a879-070dbfe17336',3,2,300000,'2020-04-02 10:31:28'),
(68,'e6c924ee-e611-49fc-9cb9-1431fa2e3825',1,1,100000,'2020-04-02 01:47:39'),
(55,'919d409e-dec8-4d1a-8923-3f2f4dfb1f90',2,1,100000,'2020-04-01 18:09:42'),
(54,'736f4b82-856e-4f39-b25b-63c5ef639d7e',1,3,1500,'2020-04-01 18:09:42'),
(53,'736f4b82-856e-4f39-b25b-63c5ef639d7e',2,5,500000,'2020-04-01 18:09:42'),
(71,'c071c88b-d7a1-4e54-9da3-35e106ea4fe0',2,2,2000000,'2020-04-02 10:34:38'),
(72,'d7b96fd8-e70b-426a-ab5f-bde5dfa501e7',1,1,100000,'2020-04-02 10:54:49');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(11) NOT NULL,
  `salt` text COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`email`,`Status`,`salt`,`password`,`created_at`,`updated_at`) values 
(16,'admin 1','admin@msa.com',1,'33cb517acc85d437bd','11167fc3c23d543735ec18e59f2c4f433d1c782d9c3673b50bf65b8a33f5afe3c1eed06b9ab0817e92e872d7113d5ca11118ec8c8e557a515fddcb9fcd40f583','2020-03-05 08:55:13','2020-03-05 08:55:13'),
(18,'Alan','alan@msa.com',2,'b37900a77951d2ecf9','4cea47a5d989375d9969051563ccaf1665f2bbecdc60559b3a11c9c8ae711e1c6f09c5b3c5926088886183909c85559f87704f80ad1ceedd68cddd3d7692a58f','2020-03-05 13:54:53','2020-03-05 13:54:53'),
(19,'Hendra21','hendra1@gmail.com',1,'b7fa127c6a2f688950','4c7efd6126811675dd3ec170e53d2f4757c947975f9178c79863c9a76f498b2bf00f755fdd1536d21a341e76953b55acf466db82cecbf68680a141756c4a2754','2020-03-07 23:55:04','2020-03-07 23:55:04'),
(20,'Hendra213','hendra2@gmail.com',2,'2f29eec5a64eaa9781','63a4640c5d9bb96c9eb9f7ffb42ba66b65ed6e75217fcd92434f69b4264aa652a00c3a477802bb3555ef6c9e3e44ac6c53614fbba63b48ce823481350e12694b','2020-03-08 00:09:16','2020-03-08 00:09:16'),
(21,'Hendra','alan@gmail.com',1,'8fca3e9f09ef6725cf','ece314ccd9a22896d885f34c107f8ae99afce23c7bd214d3292376a764326e897ae245a9b5c1a6a5fcd6266f1a7f228658d288d42c7b9d487107d83fdcdb1aaf','2020-03-27 19:58:17','2020-03-27 19:58:17'),
(25,'sad','sad@gmail.com',2,'1ed3d4201d03767760','07fa7c60c7789b29199f0691beb5c6426881aa0c2be3c779d3c83ee33d9773bd10ba021cd6a4bde338d32036d5dbaa8a7d6c56e23ced5c3e641e36c7b7c759e4','2020-03-30 07:43:49','2020-03-30 07:43:49'),
(26,'pevita pearce','pev@gmail.com',2,'e08e818f787720c3d1','46cd88ababd47111ddf8c499fa3e13b81e1774fbb4b013df8b0be3ce9840592f04862dce97abea4718e2063d7ce2d79f0e63336192cc41fe8cc4a9984981c790','2020-03-30 18:30:01','2020-03-30 18:30:01');

/*Table structure for table `user_level` */

DROP TABLE IF EXISTS `user_level`;

CREATE TABLE `user_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_level` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `user_level` */

insert  into `user_level`(`id`,`name_level`,`created_at`,`updated_at`) values 
(1,'admin','2020-03-28 21:13:28','2020-03-28 21:13:28'),
(2,'Cashier','2020-03-28 21:13:38','2020-03-28 21:13:38');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
