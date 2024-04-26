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
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (1, 'Theoretische Informatik 1', 1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (2, 'Praxisprojekt 1',1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (3, 'Mathematik 1.1' ,1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (4, 'Technische Informatik 1',1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (5, 'Web Engineering',1);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (6, 'Anwendungsprojekt Informatik',1);

INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (7, 'Mathematik 1.2',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (8, 'Theoretische Informatik 2',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (9, 'Programmieren',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (10, 'Intercultural Communication 1',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (11, 'BWL',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (12, 'Intercultural Communication 2',2);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (13, 'Marketing ',2);

INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (14, 'Mathematik 2.1',3);
INSERT INTO LECTURE (lecture_id, name, semester_id) VALUES (15, 'Theoretische Informatik 3',3);


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
