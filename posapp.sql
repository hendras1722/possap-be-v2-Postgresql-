-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2021 at 07:23 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `posapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name_category` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name_category`, `created_at`, `updated_at`) VALUES
(1, 'Minuman', '2020-02-18 10:46:40', '2020-02-18 10:46:40'),
(2, 'Makanan', '2020-02-17 14:03:09', '2020-02-17 14:03:09'),
(3, 'catu daya', '2020-02-19 23:48:51', '2020-02-19 23:48:51'),
(18, 'Battery', '2020-03-09 03:40:26', '2020-03-09 03:40:26'),
(31, 'woi', '2020-04-01 10:02:38', '2020-04-01 10:02:38');

-- --------------------------------------------------------

--
-- Table structure for table `multer`
--

CREATE TABLE `multer` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `multer`
--

INSERT INTO `multer` (`id`, `url`) VALUES
('', 'http://localhost:3000/uploads/sample.png'),
('b0cba9c8-b642-4dd4-945a-e1613c0d78fb', 'http://localhost:3000/uploads/sample.png'),
('ac7a3b3a-ae61-4aa4-a0ab-ba3112755c76', 'http://localhost:3000/uploads/sample.png'),
('ade8c2f8-09f6-4ea2-8a2a-0b0aca49a17f', 'http://localhost:3000/uploads/sample.png'),
('11693ba7-dfcb-4c3b-812c-979812e3a536', 'http://localhost:3000/uploads/sample.png'),
('1d4f5e76-9b2b-41d0-aaf3-89119d42b43c', 'http://localhost:3000/uploads/sample.png'),
('a7cf6a4c-6fdf-4c83-bb89-86b6d05b5fea', 'http://localhost:3000/uploads/sample.png'),
('e70caabe-099c-4a3d-9e42-d60997cbb8a6', 'http://localhost:3000/uploads/sample.png'),
('fa274661-4458-48e1-b4ab-77082436c248', 'http://localhost:3000/uploads/sample.png'),
('e5cbd046-5b01-4f51-8354-3297f0c70f6a', 'http://localhost:3000/uploads/sample.png'),
('37a49cd8-f504-4dc3-8bb8-6d4db880b912', 'http://localhost:3000/uploads/sample.png'),
('c350bc5b-f1c3-4156-9816-95143943be4d', 'http://localhost:3000/uploads/sample.png'),
('73f28bfa-ac74-4102-9482-16c8a187d200', 'http://localhost:3000/uploads/sample.png'),
('12458324-1fe0-4430-8395-386fca5e51a8', 'http://localhost:3000/uploads/sample.png'),
('3394f8e0-13b7-4518-b727-dd97e25aef1f', 'http://localhost:3000/uploads/sample.png'),
('14d143f5-1f32-4e13-93fa-650e6ac0bdc7', 'http://localhost:3000/uploads/sample.png'),
('df38662d-f42a-424e-9201-b1d2c6041126', 'http://localhost:3000/uploads/sample.png'),
('16f1dc5d-a13f-4172-aad2-fff54b415e66', 'http://localhost:3000/uploads/sample.png5890ff9d-7'),
('fa35a4a4-1917-4998-9e43-4639a685e462', 'http://localhost:3000/uploads/586a01ea-3a12-4395-8'),
('619656db-b1c8-49f4-8cb7-e579c558d9ba', 'http://localhost:3000/uploads/sample.png'),
('f3c4e59c-21ae-47e1-9417-4c7b854e189a', 'http://localhost:3000/uploads/8a671b33-36bf-4c83-8'),
('1b8559fb-396a-4b9a-a655-a521619661d0', 'http://localhost:3000/uploads/955a458fsample.png'),
('fafa562c-be26-4c4c-97b3-69a6f7bec58c', 'http://localhost:3000/uploads/cdb81fa9-sample.png'),
('32c72ab5-41b2-49d6-b3d7-d11392741fa4', 'http://localhost:3000/uploads/2729e898-flip-receip'),
('a85bcbdc-2d17-4da7-b473-d085210bd8f1', 'http://localhost:3000/uploads/8da94336-flip-receipt-.jpg'),
('8cd8294d-4cef-4a26-a554-6080443e6a17', 'http://localhost:3000/uploads/217de673-flip-receipt-.jpg'),
('6b4cc588-d001-417f-8712-9407b50b6d8f', 'http://localhost:3000/uploads/8a5a363d-Screenshot (1).png'),
('086fbb88-804d-4c93-81ad-4e3158fa6583', 'http://localhost:3000/uploads/ca121721-Screenshot (3).png'),
('ead50dc0-4ca6-43ef-8f51-6df68dee9103', 'http://localhost:3000/uploads/edad080d-Screenshot (3).png'),
('00cf7c24-3f98-4f5b-8e81-59376e9edb42', 'http://localhost:3000/uploads/a52f0d3b-Screenshot (3).png'),
('fd1fe492-236a-4ada-834b-399f414e2ddf', 'http://localhost:3000/uploads/f523494f-Screenshot (3).png'),
('ac7a973f-f1dc-451a-be94-ca72307a3232', 'http://localhost:3000/uploads/10bf0887-Screenshot (3).png'),
('ce1c9b41-29cc-4528-a5da-18f226572b24', 'http://localhost:3000/uploads/8820b622-Screenshot (3).png'),
('e450d0f8-6217-4f0f-b490-4d482f9b77c8', 'http://localhost:3000/uploads/7ee46a4f-Screenshot (3).png'),
('cbe54a0f-8bad-460e-8755-30837a7f02f0', 'http://localhost:3000/uploads/801241bc-Screenshot(3).png'),
('451886ca-d349-4845-9387-995597afe111', 'http://localhost:3000/uploads/63b1bfe9-wKwmds.jpg'),
('ab84e2d4-4f94-4a80-8c77-322d7bda315b', 'http://localhost:4000/uploads/e01661b7-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_'),
('365b2940-06f8-4703-9e42-caf9c89044f9', 'http://localhost:4000/uploads/db57e906-6386513_c3e764a3-175a-48b9-b13'),
('d301548f-7b37-401f-b505-5f8a8f9c60b2', 'http://localhost:4000/uploads/f62ae8e5-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('cf6c0d59-721d-4490-be59-96e8951888a6', 'http://localhost:4000/uploads/4ca26c62-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('88b08c14-56bb-4a93-853c-323b470d1ed0', 'http://localhost:4000/uploads/7f0f6209-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('65fc60d3-b9ba-4b98-a547-2c7f63cd014b', 'http://localhost:4000/uploads/9435098d-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('79371864-1c9f-483d-9687-98158c04d89e', 'http://localhost:4000/uploads/531dc168-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('9ef1d4d0-0498-4e92-9738-0ae1d5a6a6eb', 'http://localhost:4000/uploads/3d141bc8-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('d8e33cdf-b217-424e-8ac2-81359ad7671f', 'http://localhost:4000/uploads/c77ef2e6-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('488e2f5f-97f7-4aa7-8460-6787fc7daa9b', 'http://localhost:4000/uploads/572beb85-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('cc3ccab9-14af-409a-815b-564e49b544b6', 'http://localhost:4000/uploads/813e790c-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('b56a14df-6ef7-4d2b-b64f-451f0519b7e1', 'http://localhost:4000/uploads/2cc997ec-6386513_c3e764a3-175a-48b9-b132-083026f3e8cf_1080_1080.jpg'),
('1dd665ed-6660-490d-a495-75f9c423c09c', 'http://localhost:4000/uploads/26639c4e-icetea.jpg'),
('c0258d63-884d-485a-96a1-91ddc9de9048', 'http://localhost:4000/uploads/96c1632f-susu.jpg'),
('6b2f5dc7-3cf5-43dd-a33d-20cff5a76bbf', 'http://localhost:4000/uploads/d65f83c0-sirup.jpg'),
('65ac5807-6bb2-4ef0-9ddb-57927feb4943', 'http://localhost:4000/uploads/e19be968-spagh.jpg'),
('56c48cc5-4ba6-47af-b8df-40e97ae2eed7', 'http://localhost:4000/uploads/9ffaff59-Resep.jpg'),
('ac026bbd-6420-44a6-8c0f-e7e328fc5c98', 'http://localhost:4000/uploads/90423ba6-pecel.png'),
('bd2d6cc3-9177-43b2-8033-d537807159e7', 'http://localhost:4000/uploads/d064f2d5-tahukupat.JPG'),
('55cece32-ddbb-4bd3-91e3-b9873fa25e3c', 'http://localhost:4000/uploads/3fc3964d-ayamBkaar.jpg'),
('d49f3bcd-45dd-49b2-a866-421193b3758e', 'http://localhost:4000/uploads/aed7c10b-sate-kakul.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `idBuyer` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `stock` int(80) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_product`
--

INSERT INTO `order_product` (`id`, `idBuyer`, `id_product`, `id_category`, `stock`, `price`, `total`, `created_at`, `updated_at`) VALUES
(4, 0, 1, 2, 2, 15000, 30000, '2020-02-22 07:13:10', '2020-02-22 07:13:10'),
(6, 0, 48, 1, 10, 899, 8990, '2020-02-22 07:19:34', '2020-02-22 07:19:34'),
(7, 0, 48, 1, 2, 25000, 50000, '2020-02-22 07:24:07', '2020-02-22 07:24:07');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `name` varchar(225) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `image` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `price` int(80) NOT NULL,
  `stock` int(30) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `stock`, `id_category`, `created_at`, `updated_at`) VALUES
('1', 'Kopi Italiano', 'Dengan kopi yang hangat, serta tidak akan mudah untuk dilupakan seperti dia.// maka dari itu kita tidak akan melupakan kenikmatannya seperti dia.// Kopi panas tidak manis tapi pahit. ', 'http://localhost:4000/uploads/63b1bfe9-wKwmds.jpg', 50000, 999953, 1, '2021-01-15 02:47:11', '2021-01-15 02:47:11'),
('2', 'Ice Tea', 'Dengan Tea yang sangat menyegarkan memberikan sensai menyegarkan disaat panas melanda.// Duduk ngobrol bersama orang tercinta menikmati alunan suara seseorang.', 'http://localhost:4000/uploads/26639c4e-icetea.jpg', 12000, 29, 1, '2021-01-15 03:25:03', '2021-01-15 03:25:03'),
('3', 'Milk me', '85% orang menyukai susu dan hampir 100% diantaranya. dengan kenikmatan yang membuat orang jatuh cinta. terdapat coklat dan stroberry', 'http://localhost:4000/uploads/96c1632f-susu.jpg', 12000, 31, 1, '2021-01-15 04:08:03', '2021-01-15 04:08:03'),
('4', 'Sirup Warna Warni', 'Sirup warna warni memberikan warna dihidupmu dengan 1x minum kehidupanmu akan semakin berwarna. // Hanya minuman ini yang paling murah untuk semua kalangan untuk nongkrong', 'http://localhost:4000/uploads/d65f83c0-sirup.jpg', 5000, 29, 1, '2021-01-15 04:29:56', '2021-01-15 04:29:56'),
('5', 'Spagheti Seperti mie', 'Spagheti makanan yang disukai untuk kalangan nongkrong asyik untuk dimakan sambil bermain hp, ngorbol dan lain lain.// Dengan topping sosis dan sause yang membuat kelezattan spaghet semakin menggoda', 'http://localhost:4000/uploads/e19be968-spagh.jpg', 15000, 34, 2, '2021-01-15 04:36:33', '2021-01-15 04:36:33'),
('6', 'Bakso', 'Bakso bulat seperti bola pimpong dengan panas kuah nya dan kaldu bakso yang tidak kalah nikmat. // bakso ditambah dengan sambal yang nikmat.', 'http://localhost:4000/uploads/9ffaff59-Resep.jpg', 80000, 31, 2, '2021-01-15 07:25:49', '2021-01-15 07:25:49'),
('7', 'Pecel Lele', 'Pecel lele dengan sambal yang pedas seperti omongan tetangga dengan menikmati pedasnya sambalnya.', 'http://localhost:4000/uploads/90423ba6-pecel.png', 15000, 34, 2, '2021-01-15 07:30:02', '2021-01-15 07:30:02'),
('8', 'Tahuk Kupat', 'Tahu Kupat dengan paduan serba serbi dipiring membuat mulut banyak rasa yang tersimpan.', 'http://localhost:4000/uploads/d064f2d5-tahukupat.JPG', 10000, 35, 2, '2021-01-15 07:33:38', '2021-01-15 07:33:38'),
('9', 'Ayam diBakar', 'Ayam dibakar dengan warna hitam seperti malika dengan penuh kenikmatan membuat semuanya terasa menjadi berbeda. // hanya dengan makan ayam ini dapat merasa kenyang dan ingin membeli lagi.', 'http://localhost:4000/uploads/3fc3964d-ayamBkaar.jpg', 12000, 35, 2, '2021-01-15 10:12:09', '2021-01-15 10:12:09'),
('739b9fcd-3980-4c08-b9ba-362f48f23bf7', 'Sate Tusuk', 'Sate dengan daging ayam akan membuat citra rasa kurang maka ditambahkan sambal kacang agar citra rasa sate ini menambah kuat.', 'http://localhost:4000/uploads/aed7c10b-sate-kakul.jpg', 10000, 35, 2, '2021-01-15 13:27:45', '2021-01-15 13:27:45');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `idBuyer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`idBuyer`, `totalPayment`, `date_added`) VALUES
('ed3de344-f7c1-4464-8752-db0185db0092', 85000, '2021-01-19 12:19:30'),
('55ba5852-8eea-46b1-8715-8a202fbcf502', 92000, '2021-01-19 12:15:39'),
('5feaa520-9a09-44b1-8e3a-5b33b9417f45', 65000, '2021-01-19 12:14:39'),
('8fd6f83d-95f8-47a2-9b08-8b1f8e446ae8', 15000, '2021-01-19 11:58:05'),
('ca8889f4-2765-4039-846e-619d24b17152', 160000, '2021-01-19 11:57:21'),
('f521473e-b2bb-44bd-85f7-49b110619765', 24000, '2021-01-18 15:26:31'),
('1aa94615-3a9e-4260-9d65-8684ecae4d34', 49000, '2021-01-18 15:23:25');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_detail`
--

CREATE TABLE `purchase_detail` (
  `id` int(11) NOT NULL,
  `idBuyer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `idUser` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `idProduct` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `catatan` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `purchase_detail`
--

INSERT INTO `purchase_detail` (`id`, `idBuyer`, `idUser`, `idProduct`, `stock`, `price`, `catatan`, `date_added`) VALUES
(238, 'ed3de344-f7c1-4464-8752-db0185db0092', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 4, 1, 5000, 'esnya dikit', '2021-01-19 12:19:31'),
(237, 'ed3de344-f7c1-4464-8752-db0185db0092', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 6, 1, 80000, 'yg banyak pak', '2021-01-19 12:19:31'),
(236, '55ba5852-8eea-46b1-8715-8a202fbcf502', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 6, 1, 80000, 'yang mantap', '2021-01-19 12:15:40'),
(235, '55ba5852-8eea-46b1-8715-8a202fbcf502', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 2, 1, 12000, 'esnya dikit', '2021-01-19 12:15:40'),
(234, '5feaa520-9a09-44b1-8e3a-5b33b9417f45', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 5, 1, 15000, 'Sausenya yang banyak', '2021-01-19 12:14:39'),
(233, '5feaa520-9a09-44b1-8e3a-5b33b9417f45', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 1, 1, 50000, 'jangan terlalu manis', '2021-01-19 12:14:39'),
(232, '8fd6f83d-95f8-47a2-9b08-8b1f8e446ae8', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 7, 1, 15000, 'lelenya digoreng', '2021-01-19 11:58:05'),
(231, 'ca8889f4-2765-4039-846e-619d24b17152', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 6, 2, 160000, ' Pedass', '2021-01-19 11:57:21'),
(230, 'f521473e-b2bb-44bd-85f7-49b110619765', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 3, 2, 24000, '', '2021-01-18 15:26:31'),
(229, '1aa94615-3a9e-4260-9d65-8684ecae4d34', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 3, 2, 24000, 'ok', '2021-01-18 15:23:25'),
(228, '1aa94615-3a9e-4260-9d65-8684ecae4d34', '67b52be3-f6a1-4adc-8786-fe4dfc0da679', 4, 5, 25000, 'ok', '2021-01-18 15:23:25');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(11) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `Status`, `salt`, `password`, `created_at`, `updated_at`) VALUES
('', 'admin 1', 'admin@msa.com', 1, '33cb517acc85d437bd', '11167fc3c23d543735ec18e59f2c4f433d1c782d9c3673b50b', '2020-03-05 01:55:13', '2020-03-05 01:55:13'),
('', 'Alan', 'alan@msa.com', 2, 'b37900a77951d2ecf9', '4cea47a5d989375d9969051563ccaf1665f2bbecdc60559b3a', '2020-03-05 06:54:53', '2020-03-05 06:54:53'),
('', 'Hendra21', 'hendra1@gmail.com', 1, 'b7fa127c6a2f688950', '4c7efd6126811675dd3ec170e53d2f4757c947975f9178c798', '2020-03-07 16:55:04', '2020-03-07 16:55:04'),
('', 'Hendra213', 'hendra2@gmail.com', 2, '2f29eec5a64eaa9781', '63a4640c5d9bb96c9eb9f7ffb42ba66b65ed6e75217fcd9243', '2020-03-07 17:09:16', '2020-03-07 17:09:16'),
('', 'Hendra', 'alan@gmail.com', 1, '8fca3e9f09ef6725cf', 'ece314ccd9a22896d885f34c107f8ae99afce23c7bd214d329', '2020-03-27 12:58:17', '2020-03-27 12:58:17'),
('', 'sad', 'sad@gmail.com', 2, '1ed3d4201d03767760', '07fa7c60c7789b29199f0691beb5c6426881aa0c2be3c779d3', '2020-03-30 00:43:49', '2020-03-30 00:43:49'),
('', 'pevita pearce', 'pev@gmail.com', 2, 'e08e818f787720c3d1', '46cd88ababd47111ddf8c499fa3e13b81e1774fbb4b013df8b', '2020-03-30 11:30:01', '2020-03-30 11:30:01'),
('673c1188-7eee-4e23-8a37-7ecc8ec46918', 'nisa', 'nisa23@gmail.com', 1, '7315d0992c2ebf1d', '7960dc9efc9d58d65b28c553a5bb0cbdad32afaadcd9810bb2', '2021-01-14 02:46:53', '2021-01-14 02:46:53'),
('67b52be3-f6a1-4adc-8786-fe4dfc0da679', 'uut', 'uut23@gmail.com', 2, '3a705f3507caa0aa', '82182d9e6c7096680f84aa5f2f249c0b2a5f2ab45561dd695f34c27a99ff8b17faa98bf79287338287ef48b90c8ff5d1fd2ead95abf491bd6bf52ee9bd66b3dc', '2021-01-14 04:27:37', '2021-01-14 04:27:37'),
('0fe258cb-1f12-489b-ab9a-96df32b437a1', 'hendra', 'hendra23@gmail.com', 1, '2583c9ab00e7cb72', '4ce5fcc3d5de0a275f38eabdb640d9d183a0b5a843b22f268fb53f9773664ab07b16bf5d2defcfaa2422ea43aae56a71908f98e212c58c7ad1d3ec753b6f7408', '2021-01-18 13:01:51', '2021-01-18 13:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `user_level`
--

CREATE TABLE `user_level` (
  `id` int(11) NOT NULL,
  `name_level` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_level`
--

INSERT INTO `user_level` (`id`, `name_level`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2020-03-28 14:13:28', '2020-03-28 14:13:28'),
(2, 'Cashier', '2020-03-28 14:13:38', '2020-03-28 14:13:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `stock` (`stock`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`idBuyer`);

--
-- Indexes for table `purchase_detail`
--
ALTER TABLE `purchase_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_level`
--
ALTER TABLE `user_level`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `purchase_detail`
--
ALTER TABLE `purchase_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=239;

--
-- AUTO_INCREMENT for table `user_level`
--
ALTER TABLE `user_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
