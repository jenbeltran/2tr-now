CREATE DATABASE 2TRNOW;

USE 2TRNOW;

CREATE TABLE IF NOT EXISTS students (
    studentId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    studentEmail VARCHAR(100) NOT NULL DEFAULT '',
    firstName VARCHAR(100) NOT NULL DEFAULT '',
    lastName VARCHAR(100) NOT NULL DEFAULT '',
    password TEXT NOT NULL,
    location VARCHAR(100) NOT NULL DEFAULT '',
    dob DATE NOT NULL,
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

CREATE TABLE IF NOT EXISTS sessionRequest (
    requestId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    studentId INT UNSIGNED NOT NULL,
    subject VARCHAR(100) NOT NULL DEFAULT '',
    topic VARCHAR(100) NOT NULL DEFAULT '',
    description TEXT NOT NULL,
    language VARCHAR(100) NOT NULL DEFAULT '',
    sessionLength INT UNSIGNED NOT NULL,
    FOREIGN KEY (studentId) REFERENCES students(studentId)
    );
    
    CREATE TABLE IF NOT EXISTS tutorSession (
    sessionId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tutorId INT UNSIGNED NOT NULL,
    requestId INT UNSIGNED NOT NULL,
    timeStampStart timestamp NOT NULL,
    timeStampEnd timestamp NOT NULL,
    FOREIGN KEY (tutorId) REFERENCES tutors(tutorId),
    FOREIGN KEY (requestId) REFERENCES sessionRequest(requestId)
    );
    
    CREATE TABLE IF NOT EXISTS studentRating (
    studentRatingId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sessionId INT UNSIGNED NOT NULL,
    review TEXT,
    politeness INT UNSIGNED NOT NULL,
    openness INT UNSIGNED NOT NULL,
    flexibility INT UNSIGNED NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES tutorSession(sessionId)
    );
    
	CREATE TABLE IF NOT EXISTS tutorRating (
    tutorRatingId INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
	sessionId INT UNSIGNED NOT NULL,
    review TEXT,
    communication INT UNSIGNED NOT NULL,
    qualityService INT UNSIGNED NOT NULL,
    knowledge INT UNSIGNED NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES tutorSession(sessionId)
    );