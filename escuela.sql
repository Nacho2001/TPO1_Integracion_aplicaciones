-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2023 at 02:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `escuela`
--

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE `cursos` (
  `id` int(4) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `descripcion`) VALUES
(1, 'programacion', 'parendizaje de javascipt'),
(2, 'diseño', 'diseño de pagina web'),
(3, 'backend', 'construccion de backend y correccion de errores');

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `edad` int(100) NOT NULL,
  `grado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `nombre`, `edad`, `grado`) VALUES
(1, 'goh', 20, '2do'),
(2, 'chloe', 21, '3ero'),
(3, 'bart', 20, '1ero'),
(4, 'lisa', 19, '1ero');

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes_cursos`
--

CREATE TABLE `estudiantes_cursos` (
  `estudiante_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `estudiantes_cursos`
--

INSERT INTO `estudiantes_cursos` (`estudiante_id`, `curso_id`) VALUES
(2, 1),
(2, 2),
(2, 3),
(1, 1),
(1, 3),
(3, 2),
(4, 2),
(4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `profesores`
--

CREATE TABLE `profesores` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `especialidad` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `especialidad`, `email`) VALUES
(1, 'alejandro', 'programación_backend', 'aleee@gmail.com'),
(3, 'delfor', 'javascript', 'dvillegas@gmail.com'),
(4, 'cecilia', 'Inglés y diseño de páginas', 'c_camarero@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contraseña` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contraseña`) VALUES
(4, 'admin4', 'admin4'),
(5, 'admin6', 'admin5'),
(9, 'user51', 'NadieLaLee1'),
(12, 'user52', '$2a$06$diR5JcbYM5sM0gTgRz6hs./52YpKN/C5Bd4/9ns6gWMOFO5WUCHYu'),
(13, 'user53', '$2a$06$Ia6sixnGM41bHCNpRIr6iOpDRqvtM22XEGHNw8qbbiA.6wcJkDVaq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
