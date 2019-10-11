CREATE DATABASE tutor_now;

USE tutor_now;

CREATE TABLE IF NOT EXISTS students (
    studentId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    studentEmail VARCHAR(100) NOT NULL DEFAULT '',
    firstName VARCHAR(100) NOT NULL DEFAULT '',
    lastName VARCHAR(100) NOT NULL DEFAULT '',
    password TEXT NOT NULL,
    location VARCHAR(100) NOT NULL DEFAULT '',
    dob VARCHAR(100) NOT NULL,
    program VARCHAR(200) NOT NULL DEFAULT '',
    photo BLOB
);

CREATE TABLE IF NOT EXISTS tutors (
    tutorId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tutorEmail VARCHAR(100) NOT NULL DEFAULT '',
    firstName VARCHAR(100) NOT NULL DEFAULT '',
    lastName VARCHAR(100) NOT NULL DEFAULT '',
    password TEXT NOT NULL,
    location VARCHAR(100) NOT NULL DEFAULT '',
    program VARCHAR(200) NOT NULL DEFAULT '',
	specialty VARCHAR(200) NOT NULL DEFAULT '',
    photo BLOB,
    criminalRecord BLOB
);

CREATE TABLE IF NOT EXISTS session_request (
    requestId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    studentId INT UNSIGNED NOT NULL,
    program VARCHAR(100) NOT NULL DEFAULT '',
    subject VARCHAR(100) NOT NULL DEFAULT '',
    topic VARCHAR(100) NOT NULL DEFAULT '',
    description TEXT NOT NULL,
    language VARCHAR(100) NOT NULL DEFAULT '',
    sessionLength INT UNSIGNED NOT NULL,
    FOREIGN KEY (studentId) REFERENCES students(studentId)
    );
    
CREATE TABLE IF NOT EXISTS tutor_session (
    sessionId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tutorId INT UNSIGNED NOT NULL,
    requestId INT UNSIGNED NOT NULL,
    timeStampStart timestamp NOT NULL,
    timeStampEnd timestamp NOT NULL,
    FOREIGN KEY (tutorId) REFERENCES tutors(tutorId),
    FOREIGN KEY (requestId) REFERENCES session_request(requestId)
    );
    
CREATE TABLE IF NOT EXISTS student_rating (
    studentRatingId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sessionId INT UNSIGNED NOT NULL,
    review TEXT,
    politeness INT UNSIGNED NOT NULL,
    openness INT UNSIGNED NOT NULL,
    flexibility INT UNSIGNED NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES tutor_session(sessionId)
    );
    
CREATE TABLE IF NOT EXISTS tutor_rating (
    tutorRatingId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	sessionId INT UNSIGNED NOT NULL,
    review TEXT,
    communication INT UNSIGNED NOT NULL,
    qualityService INT UNSIGNED NOT NULL,
    knowledge INT UNSIGNED NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES tutor_session(sessionId)
    );

INSERT INTO `students` VALUES 
(1000,'sthompson@gmail.com','Sydney','Thompson','pw1','Canada','2001-01-02','Science',NULL),
(1001,'alexsmith@gmail.com','Alex','Smith','pw2','United States','1972-06-12','Math',NULL),
(1002,'johnjones@outlook.com','John','Jones','pw3','Mexico','1993-05-22','Computer Science',NULL),
(1003,'madelinestone@hotmail.com','Madeline','Stone','pw4','Canada','1993-08-24','English',NULL);

INSERT INTO `session_request` VALUES 
(1,1001,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30),
(2,1000,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60),
(3,1002,'Computer Science','JavaScript','For Loops','I am working on creating an app and cannot get the for loop to work. I would like to get help with this concept. ','English',30),
(4,1003,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30),
(6,1000,'Math','Statistics','French Homework','I need help with my french homework about verbs. I do not understand how to complete it. ','English',20);

