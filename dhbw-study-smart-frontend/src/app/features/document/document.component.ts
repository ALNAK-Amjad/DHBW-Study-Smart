import {Component, OnInit} from '@angular/core';
import {DocumentService} from './document.service';
import {Document} from 'src/app/shared/entities/document';
import {FileSaverService} from 'ngx-filesaver';

interface Panel {
    title: string;
    documentIds: number[];
    documents?: Document[];  // Optional, um initial null/undefined zu erlauben
}

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    documentList: Document[] = [];
    panels: Panel[] = [
        {title: "... für Themenmitteilungen, Berichte, etc.", documentIds: [1, 2, 3, 3, 4, 5, 6, 7, 8, 9]},
        {
            title: "... für die Bewertung von Praxis- und Projektberichten und Studien- und Bachelorarbeiten",
            documentIds: [10, 11, 12, 13]
        },
        {title: "  ... Krankheit, Anerkennung von Prüfungsleistungen, etc", documentIds: [14, 15]},
        {title: "  ... Kolloquiumsprüfung (T3_2000)", documentIds: [16]},
        {title: "  ... zur Erstellung der Arbeiten", documentIds: [17,18,19,20,21,22]},
        {title: " .... zur Themenstellung und Bewertung der Arbeiten und Prüfungen", documentIds: [23,24,25]},

    ];

    constructor(
        private documentService: DocumentService,
        private _FileSaverService: FileSaverService,
    ) {
    }

    ngOnInit(): void {
        this.fetchDocuments();
    }

    private fetchDocuments() {
        this.documentService.getAllDocumentEntities().subscribe({
            next: (data) => {
                this.documentList = data;
                this.matchDocumentsToPanels();
            },
            error: (err) => {
                console.error('Fetching Document Entities failed with Error:', err);
            }
        });
    }

    private matchDocumentsToPanels() {
        this.panels.forEach(panel => {
            panel.documents = this.documentList.filter(doc => panel.documentIds.includes(doc.documentId));
        });
    }

    public downloadFile(documentEntity: Document, event: Event) {
        event.preventDefault();
        this.documentService.downloadFile(documentEntity.documentId).subscribe({
            next: (data) => {
                this._FileSaverService.save(data, documentEntity.filename);
            },
            error: (err) => {
                console.error('Downloading Document failed with Error:', err);
            }
        });
    }
}
