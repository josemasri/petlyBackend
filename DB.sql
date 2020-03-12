-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2020 a las 00:45:24
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
CREATE DATABASE IF NOT EXISTS petly;

USE petly;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albergues`
--

CREATE TABLE `albergues` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `albergues`
--

INSERT INTO `albergues` (`id`, `nombre`, `direccion`, `telefono`, `img`) VALUES
(1, 'Albergue 1', 'Direccion prueba #12342', '5541784632', NULL),
(2, 'Albergue 1', 'Direccion prueba #12342', '5541784632', NULL),
(3, 'Albergue 2', 'Direccion prueba #12342', '5541784632', NULL),
(4, 'Albergue 2', 'Direccion prueba #12342', '5541784632', '4.png'),
(5, 'Albergue 5', 'Direccion prueba #12342', '5541784632', '5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animales`
--

CREATE TABLE `animales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estructuraVertebral` varchar(50) NOT NULL,
  `tipoReproduccion` varchar(50) NOT NULL,
  `medioDeVida` varchar(50) NOT NULL,
  `habitosNaturales` varchar(50) NOT NULL,
  `excresion` varchar(50) NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `dieta` varchar(50) NOT NULL,
  `edad` float NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animales`
--

INSERT INTO `animales` (`id`, `nombre`, `estructuraVertebral`, `tipoReproduccion`, `medioDeVida`, `habitosNaturales`, `excresion`, `sexo`, `dieta`, `edad`, `img`) VALUES
(1, 'Spooky', '6 huesos', 'Normal', 'Test', 'Test', 'Test', 'Macho', 'Vegetariana', 3, '1.jpg'),
(2, 'Pucky', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 5, '2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE `donaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `cantidad` float NOT NULL,
  `email` varchar(255) NOT NULL,
  `periodo` varchar(50) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id`, `nombre`, `apellido`, `cantidad`, `email`, `periodo`, `direccion`, `fecha`) VALUES
(1, 'John', 'Doe', 200, 'sb-rmvxm60991@personal.example.com', 'unica', 'Calle Juarez 1 Col. Cuauhtemoc 11580', '2020-03-12 02:29:34'),
(2, 'John', 'Doe', 200, 'sb-rmvxm60991@personal.example.com', 'unica', 'Calle Juarez 1 Col. Cuauhtemoc 11580', '2020-03-12 03:11:18'),
(3, 'Jose', 'Masri', 200, 'sb-rmvxm60991@personal.example.com', 'unica', 'Calle Juarez 1 Col. Cuauhtemoc 11580', '2020-03-12 14:34:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeriaimagenes`
--

CREATE TABLE `galeriaimagenes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `img` varchar(50) NOT NULL,
  `autor` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `galeriaimagenes`
--

INSERT INTO `galeriaimagenes` (`id`, `titulo`, `img`, `autor`, `fecha`) VALUES
(3, 'Imagen 1', '3.jpg', 4, '2020-03-05 03:57:11'),
(4, 'Imagen 2', '4.jpg', 4, '2020-03-05 03:57:21'),
(5, 'Imagen 3', '5.jpg', 4, '2020-03-05 03:57:28'),
(6, 'Imagen 4', '6.jpg', 4, '2020-03-05 03:57:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` int(11) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `contenido` text NOT NULL,
  `img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `autor`, `fecha`, `contenido`, `img`) VALUES
(10, 'Nueva sucursal', 4, '2020-03-05 03:04:30', 'Petly, albergues de animales, abrió las puertas de una nueva sucursal, para darle un mejor servicio a los habitantes de la zona de Pomoca, donde los precios y las ofertas estarán a la altura de las necesidades de los ciudadanos.\n\nEsta nueva sucursal, esta ubicada en el kilómetro 03+ 200 de la carretera que va de esta ciudad capital hacia el municipio de Nacajuca, por lo que FYMSA Pomoca es una de las mejores opciones para que los constructores puedan localizar todo lo necesario para llevar a cabo la remodelación de una casa habitación u oficina.\n\nMorbi viverra felis tortor, ut consequat erat cursus ac. Nunc congue mauris odio. Vestibulum eget fermentum nunc, aliquam imperdiet tellus. Vestibulum ultrices convallis mauris eleifend gravida. Vivamus eu dapibus leo. Cras nec orci nec magna malesuada tempus et id augue. Nullam scelerisque nibh fermentum sapien imperdiet condimentum. Sed enim turpis, vestibulum a faucibus efficitur, pulvinar sit amet ex. Vestibulum euismod sem quis magna rhoncus sollicitudin. Fusce nunc nulla, tincidunt non aliquet et, feugiat vel libero. Etiam sem risus, tincidunt in pulvinar et, ultricies eu dui. Etiam facilisis porta arcu, eget imperdiet urna. Nunc est orci, malesuada ut pellentesque in, facilisis eget mauris. Donec aliquam feugiat tortor id commodo. Aliquam quis ante pharetra, gravida nulla ac, consequat magna.\n\nNullam vel eleifend eros. Nulla volutpat mattis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus scelerisque, magna vitae fringilla convallis, metus nunc sagittis ex, sed pellentesque magna enim sit amet erat. Aenean porttitor tortor sit amet tortor laoreet gravida. Integer scelerisque cursus diam, a gravida arcu posuere id. Nam pharetra ante vel nisi luctus ultrices. Nulla facilisi. Ut rutrum a mi ultricies consectetur.\n\nInteger lacinia interdum eros. Curabitur ut elit dui. Donec turpis massa, malesuada non justo sit amet, porttitor maximus magna. Fusce vel tortor vitae libero dictum porttitor. Nunc non blandit urna, ut interdum mauris. Nullam et congue elit. Donec finibus tempor felis at consequat. Vivamus facilisis dui sed diam dapibus, sit amet elementum risus imperdiet. Morbi sit amet vehicula enim. Mauris sodales enim non ipsum consectetur, eu efficitur neque maximus. Nullam eleifend et enim nec vestibulum. Nullam faucibus sapien ut sollicitudin tempus. Morbi sodales, diam eget blandit ornare, enim nibh porta ligula, vel fringilla ex urna rhoncus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis erat eros, bibendum at dolor quis, commodo ultrices odio. Vestibulum magna nisi, tristique vitae tempus non, dignissim a magna.\n\nPellentesque nec sodales orci. Nunc sit amet nisi accumsan, sollicitudin arcu eget, mattis dui. Etiam scelerisque metus eu fringilla pulvinar. Aliquam tellus sem, efficitur hendrerit nisi eu, ornare pretium dolor. Nam vulputate lorem et nibh fringilla, id convallis neque gravida. Donec vitae vestibulum tellus. Sed accumsan, metus in volutpat molestie, dolor tortor finibus ante, eu molestie urna sapien eu elit. Praesent ut ullamcorper augue, quis malesuada ligula. Suspendisse commodo diam nisi, sit amet ultricies felis vehicula egestas. Vivamus id neque tortor. Sed lacinia nisl non posuere interdum.', '10.jpg'),
(11, 'Al rescate de animales salvajes', 4, '2020-03-05 03:08:05', 'Pachuca, Hidalgo.- Hace más de ocho años, el maltrato de un hombre casi le arrebata la vida a &nbsp;Invictus, un oso negro americano de gran proporción, al que su presunto cuidador en un circo le arrancó tres cuartas partes de la mandíbula. Tras su caso, varias personas se unieron para rescatarlo y rehabilitarlo.\r\n\r\nNo fue fácil, el daño físico y sicológico que sufrió fue tan grande que se pensó que no sobreviviría. Se le tuvo que mandar hacer una prótesis que sólo podían fabricarle en Suiza. Luego de varias cirugías, sus salvadores rompieron en llanto al ver que después de mucho tiempo y esfuerzo, ese gran omnívoro logró volver a masticar e ingerir sus alimentos por sí mismo.\r\n\r\nEl arduo trabajo de varios meses inspiró a Erika Ortigoza a juntar los esfuerzos de un equipo de biólogos y veterinarios, cuyo fin es trabajar para regresarles una vida digna —lo más parecida posible a su entorno natural— a los animales salvajes que han sido víctimas de maltrato. Así nació la Fundación Invictus hace ocho años.\r\n\r\nOrtigoza es la directora de la asociación y también ha sido exdiputada local y federal, así como exfuncionaria del municipio de Pachuca, pero su vida la ha dedicado a la preservación de la biodiversidad y medio ambiente.\r\n\r\nAsegura que su principal objetivo es ser una opción de dignidad para la fauna víctima de la incidencia humana.\r\n\r\n“Es un compromiso resarcir un poco el daño y el desequilibrio que como seres humanos nos empeñamos en hacer”, indica.\r\n\r\nCon el paso de los años, el trabajo de la fundación ha ido en aumento y, con el apoyo de donaciones, hace año y medio se inauguró en Pachuca el primer hospital de animales salvajes, el cual es único en su tipo en América Latina.\r\n\r\nActualmente, en el centro de salud se encuentran 26 animales que son atendidos de forma médica, alimentaria y sicológica. Los padecimientos más comunes, según refiere Ortigoza, son desnutrición, lesiones, fracturas, mutilaciones y daños sicoconductuales.\r\n\r\nMediante el programa Cambia su Mundo se hace la gestión para el rescate de los animales salvajes en situación de maltrato, abandono o decomiso, labor que se realiza de la mano de la Secretaría de Medio Ambiente y Recursos Naturales (Semarnat).\r\n\r\nUna vez en resguardo, explica Ortigoza, el siguiente paso es ganarse la confianza de los animales para alimentarlos y brindarles medicamento, puesto que en ocasiones requieren de cirugías de emergencia.\r\n\r\nPosteriormente, tras un periodo de restablecimiento, se realiza una valoración de readaptación para ver si es posible reintegrarlos a su hábitat natural o, en su defecto, llevarlos al santuario de animales silvestres más grande del mundo en Denver, Colorado, en Estados Unidos, del cual Ortigoza es representante legal en México.\r\n\r\nA lo largo de los ocho años de trabajo de la fundación, se ha rescatado a al menos 137 animales salvajes; 70 han sido grandes felinos.\r\n\r\n“Hay veces que quisiéramos que nada de esto les hubiera pasado. Les agradecemos que nos permitan trabajar con ellos, aunque sabemos que nunca vamos a reparar el daño que como humanos les hacemos tanto a ellos como a sus hábitats”, lamenta.</p>\r\n<h2>\r\nVida digna</h2>\r\n<p>\r\nEn un recorrido realizado por EL UNIVERSAL, se conoció a una de las pacientes llamada&nbsp; Sharkan, una tigresa de un año y medio.</p>\r\n<p>\r\nSu caso tiene conmovido al personal de veterinarios, biólogos y practicantes que labora en el hospital.</p>\r\n<p>\r\nLa felina fue llevada a Pachuca en muy malas condiciones desde un zoológico en Tijuana. Era usada para que los turistas se tomaran fotos. Sus supuestos cuidadores dijeron desconocer si sufrió una caída o un golpe fuerte.</p>\r\n<p>\r\n“Identificamos en ella un problema de hiperparatiroidismo secundario por mala nutrición, tenía una deformación en la cadera derivada de un golpe, por lo que la nueva posición de sus huesos le obstruye un órgano del aparato digestivo”, explica María de la Luz de la Llave, médico veterinario, quien está a cargo del área clínica.</p>\r\n<p>\r\nLa especialista detalla que la cachorra dejó de comer y el más mínimo movimiento le causaba mucho dolor, lo que la tenía inmóvil y deprimida.</p>\r\n<p>\r\n“Se había pensado en la eutanasia, pero se le dio la oportunidad de venir; ahora está luchando por su vida y ha tenido una mejoría de casi 90% en tres meses”, afirma.</p>\r\n<p> <img alt=\"fundacion_invictus_eluniversal__0.jpg\" src=\"/sites/default/files/u39647/fundacion_invictus_eluniversal__0.jpg\" style=\"width:567px;height:349px;\"><br><em>Mediante el programa Cambia su Mundo y de la mano de la Semarnat, la fundación gestiona el rescate de los animales salvajes.</em><br>\r\n&nbsp;</p>\r\n<p>\r\nPor casos como el de &nbsp;Sharkan, Ortigoza es firme en rechazar la iniciativa que impulsa la diputada morenista María Eugenia Hernández, en la que pretende derogar el párrafo tercero del artículo 78 de la Ley General de Vida Silvestre —en el que se estipula que queda prohibido el uso de ejemplares de vida silvestre en circos— para permitirlo otra vez.</p>\r\n<p>\r\n“Hay historias y expedientes con los que podemos demostrar que los animales decomisados a los circos vivían en condiciones deplorables y tampoco demostraron su legal procedencia; fueron parte del tráfico ilegal”, señala la directora de la fundación.</p>\r\n<h2>\r\nEcosistemas en riesgo</h2>\r\n<p>\r\nSandra Petrone, bióloga y oficial de conservación del Fondo Mundial para la Naturaleza (WWF, por sus siglas en inglés), advierte que hay una crisis de pérdida de biodiversidad no sólo en México, sino en todo el mundo, ya que los ecosistemas están siendo impactados por las actividades humanas.</p>\r\n<p>\r\nLas cifras le dan la razón.</p>\r\n<p>\r\nDe acuerdo con WWF, México alberga 13% de los mamíferos del planeta y en los últimos 30 años, la mano del hombre incidió en la pérdida de 60% de los animales salvajes de todo el mundo.</p>\r\n<p>\r\nEn el más reciente informe de la organización, titulado &nbsp;Planeta Vivo, muestra que América Latina &nbsp;ha sufrido la disminución más dramática de vertebrados en el mundo, al registrar &nbsp;89% de pérdida.</p>\r\n<p>\r\nDetalla que las principales amenazas están directamente relacionadas con las actividades humanas, incluida la pérdida y degradación del hábitat y la sobreexplotación de la vida silvestre.</p>\r\n<p>\r\nAnte este panorama, Petrone resalta la importancia de que la sociedad entienda el valor que tiene para nuestro bienestar la conservación de la naturaleza, “que no lo veamos como algo aislado, aunque vivamos en la ciudad. Tenemos que transmitir el mensaje de los servicios que la naturaleza nos brinda”, indica.</p>\r\n<p>\r\nPor ello, agrega, estamos en un momento crítico en el que tenemos que intensificar los esfuerzos, no sólo por parte del gobierno, sino de la sociedad civil, empresas e instituciones.</p>\r\n<p> <img alt=\"fundacion_invictus_eluniversal__1.jpg\" src=\"/sites/default/files/u39647/fundacion_invictus_eluniversal__1.jpg\" style=\"width:567px;height:349px;\"><br><em>Un equipo de biólogos y veterinarios trabajan para regresarles una vida digna —lo más parecida posible a su entorno natural— a los animales salvajes que han sido víctimas de maltrato.\r\nLa bióloga se manifiesta en contra de los retrocesos en la legislación que permitan abrir la puerta para que los animales vuelvan a ser sustraídos de sus hábitats y plantea que, por el contrario, se debe dar prioridad a la lucha por la conservación de la fauna y resaltar el valor de las comunidades indígenas, que son las principales protectoras de los ecosistemas.\r\nPetrone considera que mantener una legislación firme a favor de la conservación permitirá que menos animales sean sustraídos de manera ilegal de sus hábitats, pues esto altera el equilibrio de los ecosistemas y se les arrebata el derecho de vivir al ser despojados de sus instintos naturales.\r\nEso ocurrió en el caso del oso negro americano &nbsp;Invictus, que a pesar de los esfuerzos de los doctores no vivió por mucho tiempo. Su cuerpo fue donado a la UNAM con fines de investigación y como ejemplo del daño que ocasiona la impertinencia humana.\r\n', '11.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `idAnimal` int(11) NOT NULL,
  `raza` varchar(50) NOT NULL,
  `tamano` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perros`
--

INSERT INTO `perros` (`id`, `idAnimal`, `raza`, `tamano`) VALUES
(1, 1, 'Husky Siberiano', 'Grande'),
(2, 2, 'Bulldog', 'Mediano');

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
(5, 'Jose', 'Masri', 'Salame', 'veterinario1@test.com', '$2b$10$pugeL.UOgqRtoo3RwyYSc.8GPsWNMzMy/qYByoytr8Z7W9gRRDpBS', 'VET_ROLE'),
(7, 'Milton', 'Ponce', 'Rodriguez', 'milton@test.com', '$2b$10$kpSS3nzhsYWbnKF3tsyRYuwS8ro8flQPC92.nMMY0FnvCVOqURaO6', 'VET_ROLE'),
(8, 'Jose', 'Masri', 'Salame', 'josemasri@test.com', '$2b$10$HZYuN8ZUdWTp0nhpqIu28.a8N.3hcNIvuxnctnf0y3QiMELFv26e.', 'USER_ROLE'),
(9, 'Jose', 'Masri', 'Salame', 'test@testuser.com', '$2b$10$MbhWaZ33QUBDYgPR1K7GNu2LafNZFoKcQfxRvFKPOKZBAxR7VMWW.', 'USER_ROLE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albergues`
--
ALTER TABLE `albergues`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `animales`
--
ALTER TABLE `animales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `galeriaimagenes`
--
ALTER TABLE `galeriaimagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autor` (`autor`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autor` (`autor`);

--
-- Indices de la tabla `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAnimal` (`idAnimal`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `animales`
--
ALTER TABLE `animales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `galeriaimagenes`
--
ALTER TABLE `galeriaimagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `galeriaimagenes`
--
ALTER TABLE `galeriaimagenes`
  ADD CONSTRAINT `galeriaimagenes_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `perros`
--
ALTER TABLE `perros`
  ADD CONSTRAINT `perros_ibfk_1` FOREIGN KEY (`idAnimal`) REFERENCES `animales` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
