CREATE DATABASE `movies`;
USE `movies`;

DROP TABLE IF EXISTS `marvel`;

CREATE TABLE `marvel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `marvel` (`id`, `name`) VALUES
(1,	'Ironman'),
(2,	'The Avengers'),
(3,	'Guardians of the Galaxy'),
(4,	'Captain America: Civil War'),
(5,	'Thor: Ragnarok'),
(6,	'Black Panther'),
(7,	'Avengers: Infinity War'),
(8,	'Avengers: Endgame');
