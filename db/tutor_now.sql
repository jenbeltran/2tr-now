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
    tutorId INT UNSIGNED,
    dateRequested DATETIME NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0,
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
    requestId INT UNSIGNED NOT NULL,
    review TEXT,
    politeness INT UNSIGNED NOT NULL,
    openness INT UNSIGNED NOT NULL,
    flexibility INT UNSIGNED NOT NULL,
    FOREIGN KEY (requestId) REFERENCES session_request(requestId)
    );
    
CREATE TABLE IF NOT EXISTS tutor_rating (
    tutorRatingId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	requestId INT UNSIGNED NOT NULL,
    review TEXT,
    communication INT UNSIGNED NOT NULL,
    qualityService INT UNSIGNED NOT NULL,
    knowledge INT UNSIGNED NOT NULL,
    FOREIGN KEY (requestId) REFERENCES session_request(requestId)
    );

CREATE TABLE IF NOT EXISTS messages (
    messageId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    requestId INT UNSIGNED NOT NULL,
    message TEXT NOT NULL, 
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (requestId) REFERENCES session_request (requestId)
);

INSERT INTO `students` VALUES 
(1000,'sthompson@gmail.com','Sydney','Thompson','pw1','Canada','2001-01-02','Science',NULL),
(1001,'alexsmith@gmail.com','Alex','Smith','pw2','United States','1972-06-12','Math',NULL),
(1002,'johnjones@outlook.com','John','Jones','pw3','Mexico','1993-05-22','Computer Science',NULL),
(1003,'madelinestone@hotmail.com','Madeline','Stone','pw4','Canada','1993-08-24','English',NULL);

INSERT INTO `session_request` VALUES 
(1,1001,'Math','Calculus','Partial Derivatives','I am struggling to understand the meaning of partial derivative. I would like to get some help by going through examples. ','English',30, 2000, NOW(), 1),
(2,1000,'Science','Biology','Genetics','I have a test tomorrow on Genetics. I would like to get help understanding DNA and genomes. ','English',60, NULL, NOW(), 0),
(3,1002,'Computer Science','JavaScript','For Loops','I am working on creating an app and cannot get the for loop to work. I would like to get help with this concept. ','English',30, NULL, NOW(), 0),
(4,1003,'Language','French','English to French','I am trying to write an essay for my french languages class but struggling with verbs and sentence construction.','French',30, NULL, NOW(), 0),
(6,1000,'Math','Statistics','French Homework','I need help with my french homework about verbs. I do not understand how to complete it. ','English',20, NULL, NOW(), 0);

INSERT INTO `tutors` VALUES 
(2000,'mikejones@gmail.com','Mike','Jones','pw1','United States of America','Math','Calculus',NULL,NULL),
(2001,'lmeghan@outlook.com','Lori','Morgan','pw2','Canada','Science','Biology',NULL,NULL),
(2002,'andewss@gmail.com','Andrew','Synde','pw4','Mexico','Computer Science','JavaScript',NULL,NULL),
(2003,'aadams@gmail.com','Amanda','Adams','pw3','Canada','Science','JavaScript',NULL,NULL),
(2004,'meghan42@gmail.com','Meghan','Brooks','pw5','United States of America','Languages','French',NULL,NULL);

INSERT INTO `tutor_session` VALUES 
(1,2000,1,'2019-06-02 00:30:00','2019-06-02 00:30:00'),
(2,2001,2,'2019-06-02 03:00:00','2019-06-01 04:00:00'),
(3,2002,3,'2019-08-05 17:00:00','2019-08-05 17:30:00'),
(4,2004,4,'2019-08-05 05:30:00','2019-08-05 06:00:00');

INSERT INTO `messages` VALUES
(1, 3, 'I can help with your request. Are you free to meet at 5:30ET? Here is my skype username tutor101', '2019-06-02 00:30:00'),
(2, 1, 'Please add me on Skype for our tutor session to begin. You are free to ask me all your questions at that point. My username is MrTutor44', '2019-06-02 00:30:00'),
(3, 2, 'I can call you on Skype in 10 minute to discuss your question. Please add my username tutorbot', '2019-06-02 00:30:00');
