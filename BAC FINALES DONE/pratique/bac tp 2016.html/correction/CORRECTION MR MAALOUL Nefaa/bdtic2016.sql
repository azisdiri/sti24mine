-- phpMyAdmin SQL Dump
-- version 2.6.1
-- http://www.phpmyadmin.net
-- 
-- Serveur: localhost
-- Généré le : Mardi 17 Mai 2016 à 10:53
-- Version du serveur: 4.1.9
-- Version de PHP: 4.3.10
-- 
-- Base de données: `bdtic2016`
-- 

-- --------------------------------------------------------

-- 
-- Structure de la table `piece`
-- 

CREATE TABLE `piece` (
  `IdPiece` int(11) NOT NULL auto_increment,
  `Titre` varchar(30) NOT NULL default '',
  PRIMARY KEY  (`IdPiece`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- 
-- Contenu de la table `piece`
-- 

INSERT INTO `piece` VALUES (1, 'Le trésor');
INSERT INTO `piece` VALUES (2, 'Le péché du succès');
INSERT INTO `piece` VALUES (3, 'Le gradien');
INSERT INTO `piece` VALUES (4, 'Les soldats de la lune');
INSERT INTO `piece` VALUES (5, 'L''éternel retour');

-- --------------------------------------------------------

-- 
-- Structure de la table `salle`
-- 

CREATE TABLE `salle` (
  `IdSalle` char(2) NOT NULL default '',
  `Libelle` varchar(30) NOT NULL default '',
  `Adresse` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`IdSalle`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `salle`
-- 

INSERT INTO `salle` VALUES ('TM', 'Théâtre Municipal', '2, Rue de Grèce - Tunis');
INSERT INTO `salle` VALUES ('QA', 'Quatrième Art', '7, Avenue de Paris - Tunis');
INSERT INTO `salle` VALUES ('EN', 'L''Etoile du Nord', '41, Avenue Farhat Hached - Tunis');
INSERT INTO `salle` VALUES ('EA', 'Espace Artisto', '3, Rue de Damas le Belvédère - Tunis');

-- --------------------------------------------------------

-- 
-- Structure de la table `spectacle`
-- 

CREATE TABLE `spectacle` (
  `IdPiece` int(11) NOT NULL default '0',
  `DateSpectacle` date NOT NULL default '0000-00-00',
  `IdSalle` char(2) NOT NULL default '',
  PRIMARY KEY  (`IdPiece`,`DateSpectacle`),
  KEY `FkSalle` (`IdSalle`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `spectacle`
-- 

INSERT INTO `spectacle` VALUES (1, '2016-05-15', 'TM');
INSERT INTO `spectacle` VALUES (2, '2016-05-15', 'QA');
INSERT INTO `spectacle` VALUES (3, '2016-05-23', 'QA');
INSERT INTO `spectacle` VALUES (5, '2016-05-24', 'TM');
