import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';
import { Document } from 'src/app/shared/entities/document';
import { FileSaverService } from 'ngx-filesaver';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    // List of all available documents for download
    documentList: Document[] = [];

    constructor(
        private documentService: DocumentService,
        private _FileSaverService: FileSaverService,
    ) {}

    ngOnInit(): void {
        this.getAllDocumentEntities();
    }

    // Get all document entities from the database
    private getAllDocumentEntities() {
        this.documentService.getAllDocumentEntities().subscribe({
            next: (data) => {
                this.documentList = data;
            },
            error: (err) => {
                console.error('Fetching Document Entities failed with Error:', err);
            }
        });
    }

    // Download Link has been clicked
    public downloadFile(documentEntity: Document, event: Event) {
        // Prevent <a> tag from behaving like a regular Link
        event.preventDefault();

        // Trigger Download
        this.documentService.downloadFile(documentEntity.documentId).subscribe({
            next: (data) => {
                // Save file via browser download
                this._FileSaverService.save(data, documentEntity.filename);
            },
            error: (err) => {
                console.error('Downloading Document failed with Error:', err);
            }
        });
    }
}
