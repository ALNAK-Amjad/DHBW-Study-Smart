-- Study Programs
INSERT INTO STUDY_PROGRAM (study_program_id, name, etcs, semester_count) VALUES (1, 'Informatik', 210, 6);
INSERT INTO STUDY_PROGRAM (study_program_id, name, etcs, semester_count) VALUES (2, 'Wirtschaftsinformatik', 210, 6);

-- Semesters
INSERT INTO SEMESTER (semester_id) VALUES (1);
INSERT INTO SEMESTER (semester_id) VALUES (2);
INSERT INTO SEMESTER (semester_id) VALUES (3);
INSERT INTO SEMESTER (semester_id) VALUES (4);
INSERT INTO SEMESTER (semester_id) VALUES (5);
INSERT INTO SEMESTER (semester_id) VALUES (6);

-- Courses
INSERT INTO COURSE (course_id, name) VALUES (1,'TINF22B4');
INSERT INTO COURSE (course_id, name) VALUES (2,'TINF22B6');

-- Users
INSERT INTO USERS (user_id, first_name, last_name, password, email ,student_number, course_id, semester_id, study_program_id)
    VALUES (1, 'Max', 'Mustermann', '123','a@gmail.com', 1000, 1, 1, 1);
INSERT INTO USERS (user_id, first_name, last_name, password, email ,student_number, course_id, semester_id, study_program_id)
    VALUES (2, 'Markus', 'Steppenberger', '1','test@gmail.com', 938550, 2, 1, 2);

-- Lectures
-- Erste Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (1, 'Theoretische Informatik 1', 1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (2, 'Praxisprojekt 1', 1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (3, 'Lineare Algebra' , 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (4, 'Technische Informatik 1', 1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (5, 'Web Engineering', 1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (6, 'Anwendungsprojekt Informatik', 1);

-- Zweite Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (7, 'Analysis', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (8, 'Theoretische Informatik 2', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (9, 'Programmieren', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (10, 'Intercultural Communication 1', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (11, 'BWL', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (12, 'Intercultural Communication 2', 2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (13, 'Marketing', 2);

-- Dritte Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (14, 'Angewandte Mathematik', 3);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (15, 'Theoretische Informatik 3', 3);


-- Vierte Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (16, 'Statistik', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (17, 'Software Engineering I', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (18, 'Datenbanken', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (19, 'Betriebssysteme', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (20, 'Rechnerarchitekturen 1', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (21, 'Systemnahe Programmierung 1', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (22, 'Kommunikations- und Netztechnik', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (23, 'Compilerbau', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (24, 'Geschäftsprozesse', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (25, 'Web-Engineering 2', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (26, 'Signale und Systeme 1', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (27, 'Anwendungen der Robotik', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (28, 'OO Best Practice', 4);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (29, 'Workflow', 4);


-- Fünfte Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (30, 'Software Engineering II', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (31, 'Datenbanken II', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (32, 'Consulting, technischer Vetrieb und Recht', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (33, 'Funknetze 1', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (34, 'Funknetze 2', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (35, 'Weitverkehrsnetze 1', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (36, 'Weitverkehrsnetze 2', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (37, 'Computergraphik', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (38, 'Digitale Bildverarbeitung', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (39, 'Interaktive Systeme', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (40, 'Grundlagen der künstlichen Intelligenz', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (41, 'Digitale Bildverarbeitung', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (42, 'Grundlagen der künstlichen Intelligenz', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (43, 'Angewandtes Projektmanagement', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (44, 'eBusiness', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (45, 'Robotik 1', 5);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (46, 'Robotik 2', 5);


-- Sechste Semester
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (47, 'IT-Sicherheit', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (48, 'Softwarequalität und Verteilte Systeme', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (49, 'ERP-Systeme', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (50, 'Evolutionäre Algorithmen', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (51, 'Robotik', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (52, 'Web-Services', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (53, 'Gamification', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (54, 'High Performance Computing', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (55, 'Psychologische Grundlagen für Informatiker', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (56, 'Games und Gaming', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (57, 'Kryptographische Verfahren', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (58, 'Ethik für Informatiker', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (59, 'Erklärbare Künstliche Intelligenz', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (60, 'Digitale Audiosignalverarbeitung', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (61, 'Digitale Forensik', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (62, 'Funktionale Sicherheit', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (63, 'Einführung in Rust', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (64, 'Software-Ergonomie und Usability', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (65, 'Machine Learning (supervised)', 6);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (66, 'Machine Learning (unsupervised)', 6);


-- Vorlesung gruppe erstellen
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (1, 'Mathematik 1');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (2, 'Schlüsselqualifikationen 1');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (3, 'Schlüsselqualifikationen 2');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (4, 'Technische Informatik 2');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (5, 'Wahlmodul Informatik Karlsruhe');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (6, 'Kommunikations- und Netztechnik III');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (7, 'Computergraphik und Bildverarbeitung');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (8, 'Künstliche Intelligenz und Interaktive Systeme');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (9, 'Künstliche Intelligenz und Bildverarbeitung');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (10, 'E-Business');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (11, 'Robotik');
INSERT INTO LECTURE_GROUP(lecture_group_id, name) VALUES (12, 'Wahlmodul Informatik 3. SJ KA');


-- Vorlesungen zur der Gruppen zu Ordnen
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (1, 3 , 1);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (2, 7 , 1);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (3, 10 , 2);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (4, 11 , 2);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (5, 12 , 3);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (6, 13 , 3);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (7, 19 , 4);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (8, 20 , 4);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (9, 21 , 4);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (10, 24 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (11, 25 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (12, 26 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (13, 27 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (14, 28 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (15, 29 , 5);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (16, 33, 6);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (17, 34, 6);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (18, 35, 6);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (19, 36, 6);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (20, 37, 7);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (21, 38, 7);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (22, 39, 8);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (23, 40, 8);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (24, 41, 9);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (25, 42, 9);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (26, 43, 10);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (27, 44, 10);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (28, 45, 11);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id ) VALUES (29, 46, 11);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (32, 49, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (33, 50, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (34, 51, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (35, 52, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (36, 53, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (37, 54, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (38, 55, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (39, 56, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (40, 57, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (41, 58, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (42, 59, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (43, 60, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (44, 61, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (45, 62, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (46, 63, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (47, 64, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (48, 65, 12);
INSERT INTO CON_LECTURE_TO_GROUP(con_lecture_to_group_id, lecture_id, lecture_group_id) VALUES (49, 66, 12);


-- Documents
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (1, 'static/Themenmitteilung/TINF-Themenmitteilung.docx', 'TINF-Themenmitteilung.docx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (2, 'static/Themenmitteilung/TINF-Themenmitteilung.odt', 'TINF-Themenmitteilung.odt');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (3, 'static/Themenmitteilung/TINF-Themenmitteilung.pdf', 'TINF-Themenmitteilung.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (4, 'static/Bestätigung der Praxis/TINF-Praxis-Bestaetigung.docx', 'TINF-Praxis-Bestaetigung.docx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (5, 'static/Reflexionsbericht/TINF-Praxis-Reflexion.docx', 'TINF-Praxis-Reflexion.docx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (6, 'static/Deckblatt/TINF-Deckblatt-Vorlage-Arbeiten.docx', 'TINF-Deckblatt-Vorlage-Arbeiten.docx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (7, 'static/Deckblatt/latex-vorlage-bericht.pdf', 'latex-vorlage-bericht.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (8, 'static/Deckblatt/latex-vorlage-2024-04-10.tar.gz', 'latex-vorlage-2024-04-10.tar.gz');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (9, 'static/INF_Konzept_digit/INF_Konzept_digit.pdf', 'INF_Konzept_digit.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (10, 'static/Bewertung/TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf', 'TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (11, 'static/Bewertung/Themenmitteilung_TINF-Themenmitteilung.docx', 'Themenmitteilung_TINF-Themenmitteilung.docx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (12, 'static/Bewertung/Bewertung_DH_092019.xlsx', 'Bewertung_DH_092019.xlsx');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (13, 'static/Bewertung/Bewertung-Vorlage-2019-09.ods', 'Bewertung-Vorlage-2019-09.ods');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (14, 'static/Krankheit/Antrag-zum-Pruefungsruecktritt.pdf', 'Antrag-zum-Pruefungsruecktritt.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (15, 'static/Krankheit/Antrag-Bearbeitungszeitverlaengerung.pdf', 'Antrag-Bearbeitungszeitverlaengerung.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (16, 'static/Kolloqium/Kolloq-Merkblatt-T3_2000.pdf', 'Kolloq-Merkblatt-T3_2000.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (17, 'static/Hinweise/Leitlinien-Bearbeitung-Dokumentation.pdf', 'Leitlinien-Bearbeitung-Dokumentation.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (18, 'static/Hinweise/TINF-Merkblatt-Studienarbeiten.pdf', 'TINF-Merkblatt-Studienarbeiten.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (19, 'static/Hinweise/TINF-Merkblatt-Bachelorarbeiten.pdf', 'TINF-Merkblatt-Bachelorarbeiten.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (20, 'static/Hinweise/TINF-Praxisbericht-Merkblatt.pdf', 'TINF-Praxisbericht-Merkblatt.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (21, 'static/Hinweise/Kolloquium-T3_2000-Merkblatt.pdf', 'Kolloquium-T3_2000-Merkblatt.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (22, 'static/Hinweise/Kolloquium-T3_2000-Hinweise-Guter-Vortrag.pdf', 'Kolloquium-T3_2000-Hinweise-Guter-Vortrag.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (23, 'static/Hinweise/TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf', 'TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (24, 'static/Hinweise/TINF-Hinweise-zur-Stellung-und-Bewertung-von-Klausuren-Kurzfassung.pdf', 'TINF-Hinweise-zur-Stellung-und-Bewertung-von-Klausuren-Kurzfassung.pdf');
INSERT INTO DOCUMENT (document_id, path, filename) VALUES (25, 'static/Hinweise/Kolloquium-T3_2000-Bewertung.pdf', 'Kolloquium-T3_2000-Bewertung.pdf');

