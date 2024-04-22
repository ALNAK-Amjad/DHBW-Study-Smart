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
INSERT INTO LECTURE (lecture_id, name) VALUES (1, 'Theoretische Informatik I');

-- Documents
/*
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (1, 'static/TINF-Praxis-Bestaetigung.docx', 'TINF-Praxis-Bestaetigung.docx', 1, 1);
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (2, 'static/INF_Konzept_digit.pdf', 'INF_Konzept_digit.pdf', 1, 1);
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (3, 'static/TINF-Praxis-Reflexion.docx', 'TINF-Praxis-Reflexion.docx', 1, 1);

 */
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (1, 'static/Themenmitteilung/TINF-Themenmitteilung.docx', 'TINF-Themenmitteilung.docx',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (2, 'static/Themenmitteilung/TINF-Themenmitteilung.odt', 'TINF-Themenmitteilung.odt',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (3, 'static/Themenmitteilung/TINF-Themenmitteilung.pdf', 'TINF-Themenmitteilung.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (4, 'static/Bestätigung der Praxis/TINF-Praxis-Bestaetigung.docx', 'TINF-Praxis-Bestaetigung.docx', 1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (5, 'static/Reflexionsbericht/TINF-Praxis-Reflexion.docx', 'TINF-Praxis-Reflexion.docx',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (6, 'static/Deckblatt/TINF-Deckblatt-Vorlage-Arbeiten.docx', 'TINF-Deckblatt-Vorlage-Arbeiten.docx',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (7, 'static/Deckblatt/latex-vorlage-bericht.pdf', 'latex-vorlage-bericht.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (8, 'static/Deckblatt/latex-vorlage-2024-04-10.tar.gz', 'latex-vorlage-2024-04-10.tar.gz',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (9, 'static/INF_Konzept_digit/INF_Konzept_digit.pdf', 'INF_Konzept_digit.pdf',1,1 );

INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (10, 'static/Bewertung/TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf', 'TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (11, 'static/Bewertung/Themenmitteilung_TINF-Themenmitteilung.docx', 'Themenmitteilung_TINF-Themenmitteilung.docx',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (12, 'static/Bewertung/Bewertung_DH_092019.xlsx', 'Bewertung_DH_092019.xlsx',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (13, 'static/Bewertung/Bewertung-Vorlage-2019-09.ods', 'Bewertung-Vorlage-2019-09.ods',1,1 );

INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (14, 'static/Kranksheit/Antrag-zum-Pruefungsruecktritt.pdf', 'Antrag-zum-Pruefungsruecktritt.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (15, 'static/Kranksheit/Antrag-Bearbeitungszeitverlaengerung.pdf', 'Antrag-Bearbeitungszeitverlaengerung.pdf',1,1 );

INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (16, 'static/kolloqium/Kolloq-Merkblatt-T3_2000.pdf', 'Kolloq-Merkblatt-T3_2000.pdf',1,1 );

INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (17, 'static/Hinweise/Leitlinien-Bearbeitung-Dokumentation.pdf', 'Leitlinien-Bearbeitung-Dokumentation.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (18, 'static/Hinweise/TINF-Merkblatt-Studienarbeiten.pdf', 'TINF-Merkblatt-Studienarbeiten.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (19, 'static/Hinweise/TINF-Merkblatt-Bachelorarbeiten.pdf', 'TINF-Merkblatt-Bachelorarbeiten.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (20, 'static/Hinweise/TINF-Praxisbericht-Merkblatt.pdf', 'TINF-Praxisbericht-Merkblatt.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (21, 'static/Hinweise/Kolloquium-T3_2000-Merkblatt.pdf', 'Kolloquium-T3_2000-Merkblatt.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (22, 'static/Hinweise/Kolloquium-T3_2000-Hinweise-Guter-Vortrag.pdf', 'Kolloquium-T3_2000-Hinweise-Guter-Vortrag.pdf',1,1 );

INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (23, 'static/Hinweise/TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf', 'TINF-Anleitung-zur-Bewertung-von-Projekt-Studien-und-Bachelorarbeiten.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (24, 'static/Hinweise/TINF-Hinweise-zur-Stellung-und-Bewertung-von-Klausuren-Kurzfassung.pdf', 'TINF-Hinweise-zur-Stellung-und-Bewertung-von-Klausuren-Kurzfassung.pdf',1,1 );
INSERT INTO DOCUMENT (document_id, path, filename, lecture_id, semester_id) VALUES (25, 'static/Hinweise/Kolloquium-T3_2000-Bewertung.pdf', 'Kolloquium-T3_2000-Bewertung.pdf',1,1 );




