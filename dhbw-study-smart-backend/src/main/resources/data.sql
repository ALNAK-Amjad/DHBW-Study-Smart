INSERT INTO STUDY_PROGRAM (study_program_id, name, etcs, semester_count) VALUES (1, 'Informatik', 210, 6);
INSERT INTO STUDY_PROGRAM (study_program_id, name, etcs, semester_count) VALUES (2, 'Wirtschaftsinformatik', 210, 6);
INSERT INTO SEMESTER (semester_id) VALUES (1);
INSERT INTO SEMESTER (semester_id) VALUES (2);
INSERT INTO SEMESTER (semester_id) VALUES (3);
INSERT INTO SEMESTER (semester_id) VALUES (4);
INSERT INTO SEMESTER (semester_id) VALUES (5);
INSERT INTO SEMESTER (semester_id) VALUES (6);
INSERT INTO COURSE (course_id, name) VALUES (1,'TINF22B4');
INSERT INTO COURSE (course_id, name) VALUES (2,'TINF22B6');
INSERT INTO USERS (user_id, first_name, last_name, password, email ,student_number, course_id, semester_id, study_program_id)
    VALUES (1, 'Max', 'Mustermann', '123','a@gmail.com', 1000, 1, 1, 1);
INSERT INTO USERS (user_id, first_name, last_name, password, email ,student_number, course_id, semester_id, study_program_id)
    VALUES (2, 'Markus', 'Steppenberger', '1','test@gmail.com', 938550, 2, 1, 2);