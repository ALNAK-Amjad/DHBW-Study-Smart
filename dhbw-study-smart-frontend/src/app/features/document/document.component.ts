import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';
import { Document } from 'src/app/shared/entities/document';
import { FileSaverService } from 'ngx-filesaver';
import { panelGroups } from './document-config';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    // List of all document entities from the Database
    documentList: Document[] = [];

    // Panels to be displayed
    panels = panelGroups;

    constructor(
        private documentService: DocumentService,
        private _FileSaverService: FileSaverService,
    ) {}

    ngOnInit(): void {
        this.fetchDocumentEntities();
    }

    // Get all document entities from the database
    private fetchDocumentEntities() {
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

    // Match document entities to panels
    private matchDocumentsToPanels() {
        this.panels.forEach((panel) => {
            panel.documents = this.documentList.filter((doc) => panel.documentIds.includes(doc.documentId));
        });
    }

    // Download Link has been clicked
    public downloadFile(documentEntity: Document, event: Event) {
        // Prevent <a> tag from behaving like a regular Link
        event.preventDefault();

        // Get file from the Backend via get request
        this.documentService.downloadFile(documentEntity.documentId).subscribe({
            next: (data) => {
                // Trigger download in the browser
                this._FileSaverService.save(data, documentEntity.filename);
            },
            error: (err) => {
                console.error('Downloading Document failed with Error:', err);
            }
        });
    }
}
