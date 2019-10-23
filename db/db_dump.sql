-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: tutor_now
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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `messages` (
  `messageId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `requestId` int(10) unsigned NOT NULL,
  `message` text COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`messageId`),
  KEY `requestId` (`requestId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`requestId`) REFERENCES `session_request` (`requestId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,3,'I can help with your request. Are you free to meet at 5:30ET? Here is my skype username tutor101','2019-06-02 00:30:00'),(2,1,'Please add me on Skype for our tutor session to begin. You are free to ask me all the questions you\'d like at that point. My username is MrTutor44','2019-06-02 00:30:00'),(3,2,'I can call you on Skype in 10 minute to discuss your question. Please add my username tutorbot','2019-06-02 00:30:00'),(4,3,'I can help with your request. Are you free to meet at 5:30ET? Here is my skype username tutor101','2019-06-02 00:30:00'),(5,1,'Please add me on Skype for our tutor session to begin. You are free to ask me all your questions at that point. My username is MrTutor44','2019-06-02 00:30:00'),(6,2,'I can call you on Skype in 10 minute to discuss your question. Please add my username tutorbot','2019-06-02 00:30:00');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_request`
--

DROP TABLE IF EXISTS `session_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `session_request` (
  `requestId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `studentId` int(10) unsigned NOT NULL,
  `program` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `subject` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `topic` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `language` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `sessionLength` int(10) unsigned NOT NULL,
  `tutorId` int(10) unsigned DEFAULT NULL,
  `dateRequested` datetime NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`requestId`),
  KEY `studentId` (`studentId`),
  CONSTRAINT `session_request_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `students` (`studentId`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_request`
--

LOCK TABLES `session_request` WRITE;
/*!40000 ALTER TABLE `session_request` DISABLE KEYS */;
INSERT INTO `session_request` VALUES (1,1001,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,2000,'2019-10-14 21:36:12',1),(2,1000,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60,2000,'2019-10-13 21:36:12',1),(3,1002,'Computer Science','JavaScript','For Loops','I am working on creating an app and cannot get the for loop to work. I would like to get help with this concept. ','English',30,2000,'2019-09-15 21:36:12',1),(4,1003,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30,2000,'2019-09-16 16:36:12',1),(6,1000,'Math','Statistics','French Homework','I need help with my french homework about verbs. I do not understand how to complete it. ','English',20,NULL,'2019-09-16 15:36:12',0),(7,1000,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,NULL,'2019-10-17 10:16:54',0),(8,1001,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60,NULL,'2019-08-16 16:36:12',0),(9,1003,'Computer Science','JavaScript','For Loops','I am working on creating an app and cannot get the for loop to work. I would like to get help with this concept. ','English',30,NULL,'2019-10-27 22:16:54',0),(10,1002,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30,2000,'2018-10-17 22:16:54',1),(11,1004,'Math','Statistics','French Homework','I need help with my french homework about verbs. I do not understand how to complete it. ','English',20,NULL,'2019-10-14 22:16:54',0),(12,1005,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,NULL,'2019-10-04 22:16:54',0),(13,1000,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60,NULL,'2019-09-16 00:36:12',0),(14,1005,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,NULL,'2019-10-17 01:17:47',0),(15,1005,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60,NULL,'2019-10-15 17:17:47',0),(16,1003,'Computer Science','JavaScript','For Loops','I am working on creating an app and cannot get the for loop to work. I would like to get help with this concept. ','English',30,NULL,'2019-06-17 22:17:47',0),(17,1003,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30,2000,'2019-10-17 12:17:47',1),(18,1002,'Math','Statistics','French Homework','I need help with my french homework about verbs. I do not understand how to complete it. ','English',20,NULL,'2019-10-17 23:17:47',0),(19,1002,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,NULL,'2019-10-17 22:45:47',2),(20,1001,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60,NULL,'2019-10-10 22:17:47',2),(21,1004,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30,NULL,'2019-10-04 22:18:27',2),(22,1004,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30,NULL,'2019-10-05 22:18:27',2);
/*!40000 ALTER TABLE `session_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_rating`
--

DROP TABLE IF EXISTS `student_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_rating` (
  `studentRatingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `requestId` int(10) unsigned NOT NULL,
  `review` text COLLATE utf8mb4_general_ci,
  `politeness` int(10) unsigned NOT NULL,
  `openness` int(10) unsigned NOT NULL,
  `flexibility` int(10) unsigned NOT NULL,
  PRIMARY KEY (`studentRatingId`),
  KEY `requestId` (`requestId`),
  CONSTRAINT `student_rating_ibfk_1` FOREIGN KEY (`requestId`) REFERENCES `session_request` (`requestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_rating`
--

LOCK TABLES `student_rating` WRITE;
/*!40000 ALTER TABLE `student_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_rating` ENABLE KEYS */;
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
  `dob` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `program` varchar(200) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `photo` blob,
  PRIMARY KEY (`studentId`)
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1000,'sthompson@gmail.com','Sydney','Thompson','pw1','Canada','2001-01-02','Science',NULL),(1001,'alexsmith@gmail.com','Alex','Smith','pw2','United States','1972-06-12','Math',NULL),(1002,'johnjones@outlook.com','John','Jones','pw3','Mexico','1993-05-22','Computer Science',NULL),(1003,'madelinestone@hotmail.com','Madeline','Stone','pw4','Canada','1993-08-24','English',NULL),(1004,'smgagnon@hotmail.com','Stephanie','Gagnon','$2b$10$dJr854UyHGnwZAoBv/MuMOr04a7JEBUatWf9wTfpIiobWq5HTgFXW','Canada','6/29/1993','Business',NULL),(1005,'nicollegagnon@hotmail.com','Nicolle','Gagnon','$2b$10$ZZJp4MwEJug0Zbz0PDJKUegs6HAL/F5V/69AfFPpZtU8w1w40LH02','Canada','4/4/1991','Science',NULL),(1006,'test@gmail.com','test','test','$2b$10$ZAA.OvzdYhRdAqqTE8haJ.PBI/HZOeZfuRkQ2ui8wtu../hSo/4Ou','Canada','8/4/1993','Science',NULL),(1007,'test@gmail.com','test','test','$2b$10$UYySY3hiVCoGnMUb4G9fwup0FhhuLwCiRSYoXZdtzfVwpO81Cbmeq','Canada','3/5/1993','ForeignLanguage',NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutor_rating`
--

DROP TABLE IF EXISTS `tutor_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tutor_rating` (
  `tutorRatingId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `requestId` int(10) unsigned NOT NULL,
  `review` text COLLATE utf8mb4_general_ci,
  `communication` int(10) unsigned NOT NULL,
  `qualityService` int(10) unsigned NOT NULL,
  `knowledge` int(10) unsigned NOT NULL,
  PRIMARY KEY (`tutorRatingId`),
  KEY `requestId` (`requestId`),
  CONSTRAINT `tutor_rating_ibfk_1` FOREIGN KEY (`requestId`) REFERENCES `session_request` (`requestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor_rating`
--

LOCK TABLES `tutor_rating` WRITE;
/*!40000 ALTER TABLE `tutor_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `tutor_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutor_session`
--

DROP TABLE IF EXISTS `tutor_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tutor_session` (
  `sessionId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tutorId` int(10) unsigned NOT NULL,
  `requestId` int(10) unsigned NOT NULL,
  `timeStampStart` timestamp NOT NULL,
  `timeStampEnd` timestamp NOT NULL,
  PRIMARY KEY (`sessionId`),
  KEY `tutorId` (`tutorId`),
  KEY `requestId` (`requestId`),
  CONSTRAINT `tutor_session_ibfk_1` FOREIGN KEY (`tutorId`) REFERENCES `tutors` (`tutorId`),
  CONSTRAINT `tutor_session_ibfk_2` FOREIGN KEY (`requestId`) REFERENCES `session_request` (`requestId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor_session`
--

LOCK TABLES `tutor_session` WRITE;
/*!40000 ALTER TABLE `tutor_session` DISABLE KEYS */;
INSERT INTO `tutor_session` VALUES (1,2000,1,'2019-06-02 04:30:00','2019-06-02 04:30:00'),(2,2001,2,'2019-06-02 07:00:00','2019-06-01 08:00:00'),(3,2002,3,'2019-08-05 21:00:00','2019-08-05 21:30:00'),(4,2004,4,'2019-08-05 09:30:00','2019-08-05 10:00:00');
/*!40000 ALTER TABLE `tutor_session` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2008 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutors`
--

LOCK TABLES `tutors` WRITE;
/*!40000 ALTER TABLE `tutors` DISABLE KEYS */;
INSERT INTO `tutors` VALUES (2000,'mikejones@gmail.com','Mike','Jones','pw1','United Kingdom','Math','Calculus',NULL,NULL),(2001,'lmeghan@outlook.com','Lori','Morgan','pw2','Canada','Science','Biology',NULL,NULL),(2002,'andewss@gmail.com','Andrew','Synde','pw4','Mexico','Computer Science','JavaScript',NULL,NULL),(2003,'aadams@gmail.com','Amanda','Adams','pw3','Canada','Science','JavaScript',NULL,NULL),(2004,'meghan42@gmail.com','Meghan','Brooks','pw5','United States of America','Languages','French',NULL,NULL),(2005,'atopp@gmail.com','Adam','Topp','testing','Andorra','Math','Calculus',NULL,NULL),(2006,'devine22@gmail.com','Will','Devine','$2b$10$HQ5Oc0uHElHNE/7XVYUIBO0EoIlvyGMrkJ8S.mxltRb2IBFGYv0b2','United Kingdom','Business','Marketing',NULL,NULL),(2007,'smgagnon@hotmail.com','Stephanie','Gagnon','$2b$10$DTB6qI/z.5ga3nFlmXELIerzowDB2vVeDjPu3TKV0281LSDq0NH6.','Canada','Business','HumanResources',NULL,NULL);
/*!40000 ALTER TABLE `tutors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tutor_now'
--

--
-- Dumping routines for database 'tutor_now'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-21 19:07:11
