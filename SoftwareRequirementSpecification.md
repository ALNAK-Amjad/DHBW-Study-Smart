# DHBW Study Smart Webapp
## Softwareanforderungen

### 1. Einleitung

#### 1.1 Übersicht
> Study Smart ist eine Webanwendung, die entwickelt wurde, um Studierende und Lernende aller Stufen dabei zu unterstützen, ihre studienbezogenen Aufgaben, Lernressourcen und Zeit effizient zu verwalten. Die Webanwendung ist darauf ausgerichtet, den Nutzern zu helfen, das Beste aus ihren Lernsitzungen zu machen, organisiert zu bleiben und akademischen Erfolg zu erzielen.

#### 1.2 Geltungsbereich

#### 1.3 Definitionen, Akronyme und Abkürzungen
| Abkürzung | Erklärung                            |
| --------- | ------------------------------------ |
| DHBW      | Duale Hochschule Baden-Württemberg   |

#### 1.4 Referenzen

### 2. Funktionale Anforderungen

#### 2.1 Übersicht
> Bei der Anwendung handelt es sich um eine Webapplikation, welche grundsätzlich nur für Desktop-Geräte entwickelt wird.
> Über die Homepage soll man sich als registrierter User anmelden, wodurch man dann vollen Zugriff auf alle Funktionallitäten der Webapp hat. Über eine Navigationsleiste kann man so auf verschiedene Funktionen bzw. Features der Webapp zugreifen, welche wie folgt beschrieben werden.

#### 2.2 Notenplaner / Notenübersicht
> Der Notenplaner soll eine Übersicht für alle erzielten Noten für einzelne Fächer/Vorlesungen darstellen und den Notendurchschnitt pro Semester sowie den Notendurchschnitt insgesamt berechnen. Zudem soll man seine eigene Zielnote sowie der tatsächlich erreichte Note eintragen können. Dies bietet dann eine direkte Möglichkeit den eigenen Lernfortschritt zu prüfen, da man einen direkten Vergleich von Wunschnote zur tatsächlich erreichten Note hat.

> - **Voraussetzungen:** Keine
> - **Nachbedingungen:** Keine
> - **Geschätzter Aufwand:** Niedrig
> - **User-Story:** [Jira SSW-17](https://hoshizawa-yuriko.atlassian.net/browse/SSW-17)
> - **UI-Mockup:** TBA
> - **UML-Verhaltensdiagramme:** TBA

#### 2.3 Stundenplan
> Der Stundenplan ist in der Regel nach Wochentagen und Uhrzeiten strukturiert. Dadurch können Studierende leicht erkennen, welche Veranstaltungen an welchen Tagen und zu welchen Zeiten stattfinden. Dies ermöglicht es, den Tag effizient zu planen und sicherzustellen, dass keine Überschneidungen zwischen den verschiedenen Vorlesungen auftreten. Zusätzlich werden auf dem Stundenplan in der Regel die jeweiligen Räume und  Hörsäle angegeben, in denen die Veranstaltungen stattfinden.

> - **Voraussetzungen:** API Zugang zu Rapla
> - **Nachbedingungen:** Keine
> - **Geschätzter Aufwand:** Hoch
> - **User-Story:** [Jira SSW-20](https://hoshizawa-yuriko.atlassian.net/browse/SSW-20)
> - **UI-Mockup:** TBA
> - **UML-Verhaltensdiagramme:** TBA

#### 2.4 Dokumentenübersicht
> Dieser Bereich dient dazu, alle relevanten Dokumente für das Studium übersichtlich an einem Ort zu finden. So hat der Benutzer jederzeit bequemen Zugriff auf alle Unterlagen, die der Benutzer im Laufe des Studiums benötigt.

> - **Voraussetzungen:** Keine
> - **Nachbedingungen:** Keine
> - **Geschätzter Aufwand:** Mittel
> - **User-Story:** [Jira SSW-18](https://hoshizawa-yuriko.atlassian.net/browse/SSW-18)
> - **UI-Mockup:** TBA
> - **UML-Verhaltensdiagramme:** TBA

#### 2.5 Vorlesungsübersicht
> In der Vorlesungsübersicht soll es möglich sein je nach Bedarf neue Vorlesungen hinzuzufügen. Dazu soll man einstellen können wie viele ETCS-Punkte diese geben soll und wie sie bewertet wird. Zusätzlich soll dies den zugehörigen Semestern zugewiesen werden.

> - **Voraussetzungen:** Keine
> - **Nachbedingungen:** Keine
> - **Geschätzter Aufwand:** mittel
> - **User-Story:** [Jira SSW-19](https://hoshizawa-yuriko.atlassian.net/browse/SSW-19)
> - **UI-Mockup:** TBA
> - **UML-Verhaltensdiagramme:** TBA

#### 2.6 Karteikarten-Manager
> Der Karteikarten-Manager soll eine Möglichkeit bieten, einfache Lernkarteikarten zu erstellen, bearbeiten und einzusehen. Diese sollen dabei helfen kleine Inhalte regelmäßig wiederholen zu können.

> - **Voraussetzungen:** Keine
> - **Nachbedingungen:** Keine
> - **Geschätzter Aufwand:** Mittel
> - **User-Story:** [Jira SSW-21](https://hoshizawa-yuriko.atlassian.net/browse/SSW-21)
> - **UI-Mockup:** TBA
> - **UML-Verhaltensdiagramme:** TBA

### 3. Nichtfunktionale Anforderungen

### 4. Technische Einschränkungen
