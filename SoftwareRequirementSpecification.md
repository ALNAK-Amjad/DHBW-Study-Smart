# DHBW Study Smart Webapp
## Softwareanforderungen

### 1. Einleitung

#### 1.1 Übersicht
Study Smart ist eine Webanwendung, die entwickelt wurde, um Studierende und Lernende aller Stufen dabei zu unterstützen, ihre studienbezogenen Aufgaben, Lernressourcen und Zeit effizient zu verwalten. Die Webanwendung ist darauf ausgerichtet, den Nutzern zu helfen, das Beste aus ihren Lernsitzungen zu machen, organisiert zu bleiben und akademischen Erfolg zu erzielen.

#### 1.2 Geltungsbereich
Der Geltungsbereich dieser Software-Anforderungsspezifikation umfasst die Definition der Anforderungen für die DHBW Study Smart Webanwendung. Die festgelegten Anforderungen gelten für die gesamte Lebensdauer des Projekts, von der Entwicklung bis zur Bereitstellung und Wartung der Anwendung. Diese Anforderungen dienen als Grundlage für die Gestaltung und Implementierung der Webanwendung und legen die Funktionen und Qualitätsmerkmale fest, die die Anwendung erfüllen muss.

#### 1.3 Definitionen, Akronyme und Abkürzungen
| Abkürzung | Erklärung                            |
| --------- | ------------------------------------ |
| DHBW      | Duale Hochschule Baden-Württemberg   |

#### 1.4 Referenzen
- [Jira Epic Hauptfeatures](https://hoshizawa-yuriko.atlassian.net/browse/SSW-31) (nur sichtbar für Projektmitglieder)
- [GitHub Repo](https://github.com/HoshizawaYuriko/dhbw-study-smart) (nur sichtbar für Projektmitglieder)
- [UI-Mockup Figma](https://www.figma.com/file/ePWy89JDHyOeOx02FN3OTo/Studi-Verwaltung-Webapp?type=design&node-id=0-1&mode=design) (öffentlich)
- [UML-Anwendungsfalldiagramm](https://hoshizawa-yuriko.atlassian.net/wiki/spaces/PD/pages/2031617/UML-Anwendungsfalldiagramm) (nur sichtbar für Projektmitglieder)
- [UML-Aktivitäts-/Sequenzdiagramme](https://hoshizawa-yuriko.atlassian.net/wiki/spaces/PD/pages/2490369/UML-Aktivit+tsdiagramme+und+UML-Sequenzdiagramme) (nur sichtbar für Projektmitglieder)

### 2. Funktionale Anforderungen

#### 2.1 Übersicht
Bei der Anwendung handelt es sich um eine Webapplikation, welche grundsätzlich nur für Desktop-Geräte entwickelt wird.
Über die Homepage soll man sich als registrierter User anmelden, wodurch man dann vollen Zugriff auf alle Funktionallitäten der Webapp hat. Über eine Navigationsleiste kann man so auf verschiedene Funktionen bzw. Features der Webapp zugreifen, welche in den nachfolgenden Punkten beschrieben werden.
Das UI-Mockup für alle Features wird mithilfe von Figma erstellt und wird [hier](https://www.figma.com/file/ePWy89JDHyOeOx02FN3OTo/Studi-Verwaltung-Webapp) bearbeitet. Die UML-Anwendungsfall-, Aktivitäts- und Sequenzdiagramme aller Features sind unter den Links in [1.4 Referenzen](#14-referenzen) einsehbar.

#### 2.2 Notenplaner / Notenübersicht
Der Notenplaner soll eine Übersicht für alle erzielten Noten für einzelne Fächer/Vorlesungen darstellen und den Notendurchschnitt pro Semester sowie den Notendurchschnitt insgesamt berechnen. Zudem soll man seine eigene Zielnote sowie der tatsächlich erreichte Note eintragen können. Dies bietet dann eine direkte Möglichkeit den eigenen Lernfortschritt zu prüfen, da man einen direkten Vergleich von Wunschnote zur tatsächlich erreichten Note hat.

- **Voraussetzungen:** Keine
- **Nachbedingungen:** Keine
- **Geschätzter Aufwand:** Niedrig
- **User-Story:** [Jira SSW-17](https://hoshizawa-yuriko.atlassian.net/browse/SSW-17)

#### 2.3 Stundenplan
Der Stundenplan ist in der Regel nach Wochentagen und Uhrzeiten strukturiert. Dadurch können Studierende leicht erkennen, welche Veranstaltungen an welchen Tagen und zu welchen Zeiten stattfinden. Dies ermöglicht es, den Tag effizient zu planen und sicherzustellen, dass keine Überschneidungen zwischen den verschiedenen Vorlesungen auftreten. Zusätzlich werden auf dem Stundenplan in der Regel die jeweiligen Räume und  Hörsäle angegeben, in denen die Veranstaltungen stattfinden.

- **Voraussetzungen:** API Zugang zu Rapla
- **Nachbedingungen:** Keine
- **Geschätzter Aufwand:** Hoch
- **User-Story:** [Jira SSW-20](https://hoshizawa-yuriko.atlassian.net/browse/SSW-20)

#### 2.4 Dokumentenübersicht
Dieser Bereich dient dazu, alle relevanten Dokumente für das Studium übersichtlich an einem Ort zu finden. So hat der Benutzer jederzeit bequemen Zugriff auf alle Unterlagen, die der Benutzer im Laufe des Studiums benötigt.

- **Voraussetzungen:** Keine
- **Nachbedingungen:** Keine
- **Geschätzter Aufwand:** Mittel
- **User-Story:** [Jira SSW-18](https://hoshizawa-yuriko.atlassian.net/browse/SSW-18)

#### 2.5 Vorlesungsübersicht
In der Vorlesungsübersicht soll es möglich sein je nach Bedarf neue Vorlesungen hinzuzufügen. Dazu soll man einstellen können wie viele ETCS-Punkte diese geben soll und wie sie bewertet wird. Zusätzlich soll dies den zugehörigen Semestern zugewiesen werden.

- **Voraussetzungen:** Keine
- **Nachbedingungen:** Keine
- **Geschätzter Aufwand:** mittel
- **User-Story:** [Jira SSW-19](https://hoshizawa-yuriko.atlassian.net/browse/SSW-19)

#### 2.6 Karteikarten-Manager
Der Karteikarten-Manager soll eine Möglichkeit bieten, einfache Lernkarteikarten zu erstellen, bearbeiten und einzusehen. Diese sollen dabei helfen kleine Inhalte regelmäßig wiederholen zu können.

- **Voraussetzungen:** Keine
- **Nachbedingungen:** Keine
- **Geschätzter Aufwand:** Mittel
- **User-Story:** [Jira SSW-21](https://hoshizawa-yuriko.atlassian.net/browse/SSW-21)

### 3. Nichtfunktionale Anforderungen
Die nichtfunktionalen Anforderungen an die Webanwendung sind wie folgt:

- Benutzerfreundlichkeit: Die Benutzeroberfläche der Anwendung muss benutzerfreundlich und intuitiv sein, um eine einfache Navigation und Interaktion für die Nutzer zu ermöglichen.
- Sicherheit: Die Anwendung muss angemessene Sicherheitsmaßnahmen implementieren, um die Vertraulichkeit und Integrität der Benutzerdaten zu gewährleisten.
- Leistung: Die Anwendung muss eine akzeptable Leistung bieten, insbesondere in Bezug auf Ladezeiten und Reaktionsgeschwindigkeit.
- Skalierbarkeit: Die Anwendung sollte so gestaltet sein, dass sie bei Bedarf erweiterbar ist, um ein wachsendes Nutzeraufkommen zu unterstützen.
- Datenschutz: Die Anwendung muss Datenschutzbestimmungen und Datenschutzrichtlinien einhalten und sicherstellen, dass Benutzerdaten ordnungsgemäß geschützt und behandelt werden.
- Kompatibilität: Die Anwendung sollte auf verschiedenen gängigen Desktop-Browsern (z. B. Chrome, Firefox, Microsoft Edge) einwandfrei funktionieren.

### 4. Technische Einschränkungen
Die technischen Einschränkungen für die Webanwendung sind wie folgt:

- Desktop-Geräte: Die Anwendung ist speziell für Desktop-Geräte ausgelegt und wird **nicht** für mobile Geräte entwickelt.
- API Zugang: Der Stundenplan-Bereich erfordert den Zugang zur Rapla API, um die Stundenplandaten abzurufen, was zusätzlichen Entwicklungsaufwand bedeutet.
