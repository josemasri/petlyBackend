-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2020 a las 01:42:41
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petly`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albergues`
--

CREATE TABLE `albergues` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `albergues`
--

INSERT INTO `albergues` (`id`, `nombre`, `direccion`, `telefono`) VALUES
(1, 'Albergue 1', 'Direccion prueba #12342', '5541784632');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `autor`, `fecha`, `contenido`) VALUES
(1, 'Noticia Prueba', 'Jose Masri', '2019-01-16', 'Texto prueba'),
(2, 'Noticia Prueba 2', 'Jose Masri', '2019-01-16', 'Texto prueba'),
(3, 'Noticia Prueba 3', 'Jose Masri', '2019-01-16', 'Texto prueba'),
(4, 'Noticia Prueba 3', 'Jose Masri', '2019-01-16', 'Texto prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidoPaterno` varchar(255) NOT NULL,
  `apellidoMaterno` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `rol` varchar(50) NOT NULL DEFAULT 'USER_ROLE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidoPaterno`, `apellidoMaterno`, `email`, `password`, `rol`) VALUES
(1, 'Jose', 'Masri', 'Salame', 'josemasri222@gmail.com', '$2b$10$gtIr0mUdhcp6Qe5K2apst.41ZzR.sPtiAUj.DltMTxvZAwOnvRy.i', 'USER_ROLE'),
(3, 'Jose', 'Masri', 'Salame', 'josemasri2@gmail.com', '$2b$10$PtUU5UaJLTh.H8uCqs.U5u4gUUyw30UOahvQO5xStsvstmbYfFSF2', 'USER_ROLE'),
(4, 'Jose', 'Masri', 'Salame', 'admin1@test.com', '$2b$10$9SwOytMn/j42Ai.e4ajZw.ugz2b/yCiEnsjAFQUSzBJ0aNbjIxDcy', 'ADMIN_ROLE'),
(5, 'Jose', 'Masri', 'Salame', 'veterinario1@test.com', '$2b$10$pugeL.UOgqRtoo3RwyYSc.8GPsWNMzMy/qYByoytr8Z7W9gRRDpBS', 'VET_ROLE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albergues`
--
ALTER TABLE `albergues`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `emailUnico` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albergues`
--
ALTER TABLE `albergues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
