-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: 2TRNOW
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sessionRequest`
--

DROP TABLE IF EXISTS `sessionRequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sessionRequest` (
  `requestId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `studentId` int(10) unsigned NOT NULL,
  `program` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `subject` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `topic` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `language` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `sessionLength` int(10) unsigned NOT NULL,
  PRIMARY KEY (`requestId`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `sessionrequest_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `students` (`studentId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessionRequest`
--

LOCK TABLES `sessionRequest` WRITE;
/*!40000 ALTER TABLE `sessionRequest` DISABLE KEYS */;
INSERT INTO `sessionRequest` VALUES (1,1001,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30),(2,1000,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60),(3,1002,'Computer Science','JavaScript','For Loops','I\'m working on creating an app and can\'t get the for loop to work. I would like to get help with this concept. ','English',30),(4,1003,'Language','French','English to French','I\'m trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30);
/*!40000 ALTER TABLE `sessionRequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentRating`
--

DROP TABLE IF EXISTS `studentRating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `studentRating` (
  `studentRatingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sessionId` int(10) unsigned NOT NULL,
  `review` text COLLATE utf8mb4_general_ci,
  `politeness` int(10) unsigned NOT NULL,
  `openness` int(10) unsigned NOT NULL,
  `flexibility` int(10) unsigned NOT NULL,
  PRIMARY KEY (`studentRatingId`),
  KEY `sessionId` (`sessionId`),
  CONSTRAINT `studentrating_ibfk_1` FOREIGN KEY (`sessionId`) REFERENCES `tutorsession` (`sessionId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentRating`
--

LOCK TABLES `studentRating` WRITE;
/*!40000 ALTER TABLE `studentRating` DISABLE KEYS */;
INSERT INTO `studentRating` VALUES (1,1,'Great session, Alex was very involved and looking to learn. ',5,4,5),(2,2,'Well done! Good work. In the future please give more then 10 minutes notice if youre going to be late to a session.',5,4,3),(3,3,'Great session, John wanted to learn and was open to new concepts and ways of thinking. ',5,5,5),(4,4,'Madeline took a little while to understand verbs and the proper use but once it clicked she did great. Asked a lot of great questions and a pleasure to work with. ',5,4,4);
/*!40000 ALTER TABLE `studentRating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `students` (
  `studentId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `studentEmail` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `firstName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `lastName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `password` text COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `dob` date NOT NULL,
  `program` varchar(200) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `photo` blob,
  PRIMARY KEY (`studentId`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1000,'sthompson@gmail.com','Sydney','Thompson','pw1','Canada','2001-01-02','Science',NULL),(1001,'alexsmith@gmail.com','Alex','Smith','pw2','United States','1972-06-12','Math',NULL),(1002,'johnjones@outlook.com','John','Jones','pw3','Mexico','1993-05-22','Computer Science',NULL),(1003,'madelinestone@hotmail.com','Madeline','Stone','pw4','Canada','1993-08-24','English',NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutorRating`
--

DROP TABLE IF EXISTS `tutorRating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tutorRating` (
  `tutorRatingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sessionId` int(10) unsigned NOT NULL,
  `review` text COLLATE utf8mb4_general_ci,
  `communication` int(10) unsigned NOT NULL,
  `qualityService` int(10) unsigned NOT NULL,
  `knowledge` int(10) unsigned NOT NULL,
  PRIMARY KEY (`tutorRatingId`),
  KEY `sessionId` (`sessionId`),
  CONSTRAINT `tutorrating_ibfk_1` FOREIGN KEY (`sessionId`) REFERENCES `tutorsession` (`sessionId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutorRating`
--

LOCK TABLES `tutorRating` WRITE;
/*!40000 ALTER TABLE `tutorRating` DISABLE KEYS */;
INSERT INTO `tutorRating` VALUES (1,1,'Mike was very helpful. I wasnt understanding Derivatives and he had to explain in a few different ways until it finally clicked! Thanks for the help!',5,5,5),(2,2,'Lori was very friendly. I learned a lot from her!',3,5,5),(3,3,'I finally understand for loops! Andrew was great! So thankful for the last minute help. Much needed.',4,4,5),(4,4,'Meghan was a great french tutor. She helped me understand concepts I\'ve struggled with for years. And I finally finished my paper!',5,5,5);
/*!40000 ALTER TABLE `tutorRating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutors`
--

DROP TABLE IF EXISTS `tutors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tutors` (
  `tutorId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tutorEmail` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `firstName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `lastName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `password` text COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `program` varchar(200) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `specialty` varchar(200) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `photo` blob,
  `criminalRecord` blob,
  PRIMARY KEY (`tutorId`)
) ENGINE=InnoDB AUTO_INCREMENT=2005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutors`
--

LOCK TABLES `tutors` WRITE;
/*!40000 ALTER TABLE `tutors` DISABLE KEYS */;
INSERT INTO `tutors` VALUES (2000,'mikejones@gmail.com','Mike','Jones','pw1','United States of America','Math','Calculus',NULL,NULL),(2001,'lmeghan@outlook.com','Lori','Morgan','pw2','Canada','Science','Biology',NULL,NULL),(2002,'andewss@gmail.com','Andrew','Synde','pw4','Mexico','Computer Science','JavaScript',NULL,NULL),(2003,'aadams@gmail.com','Amanda','Adams','pw3','Canada','Science','JavaScript',NULL,NULL),(2004,'meghan42@gmail.com','Meghan','Brooks','pw5','United States of America','Languages','French',NULL,NULL);
/*!40000 ALTER TABLE `tutors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutorSession`
--

DROP TABLE IF EXISTS `tutorSession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tutorSession` (
  `sessionId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tutorId` int(10) unsigned NOT NULL,
  `requestId` int(10) unsigned NOT NULL,
  `timeStampStart` timestamp NOT NULL,
  `timeStampEnd` timestamp NOT NULL,
  PRIMARY KEY (`sessionId`),
  KEY `tutorId` (`tutorId`),
  KEY `requestId` (`requestId`),
  CONSTRAINT `tutorsession_ibfk_1` FOREIGN KEY (`tutorId`) REFERENCES `tutors` (`tutorId`),
  CONSTRAINT `tutorsession_ibfk_2` FOREIGN KEY (`requestId`) REFERENCES `sessionrequest` (`requestId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutorSession`
--

LOCK TABLES `tutorSession` WRITE;
/*!40000 ALTER TABLE `tutorSession` DISABLE KEYS */;
INSERT INTO `tutorSession` VALUES (1,2000,1,'2019-06-02 00:30:00','2019-06-02 00:30:00'),(2,2001,2,'2019-06-02 03:00:00','2019-06-01 04:00:00'),(3,2002,3,'2019-08-05 17:00:00','2019-08-05 17:30:00'),(4,2004,4,'2019-08-05 05:30:00','2019-08-05 06:00:00');
/*!40000 ALTER TABLE `tutorSession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database '2TRNOW'
--

--
-- Dumping routines for database '2TRNOW'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-02 22:11:48
