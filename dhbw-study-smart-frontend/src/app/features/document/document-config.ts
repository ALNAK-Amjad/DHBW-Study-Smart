import {Document} from 'src/app/shared/entities/document';

export interface Panel {
    title: string;
    documentIds: number[];
    documents?: Document[];
}

// Groups documents within the given <mat-expansion-panel> in the document component
export const panelGroups: Panel[] = [
    {
        title: '...für Themenmitteilungen, Berichte, etc.',
        documentIds: [1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
    },
    {
        title: '...für die Bewertung von Praxis- und Projektberichten und Studien- und Bachelorarbeiten',
        documentIds: [10, 11, 12, 13],
    },
    {
        title: '...Krankheit, Anerkennung von Prüfungsleistungen, etc',
        documentIds: [14, 15],
    },
    {
        title: '...Kolloquiumsprüfung (T3_2000)',
        documentIds: [16],
    },
    {
        title: '...zur Erstellung der Arbeiten',
        documentIds: [17, 18, 19, 20, 21, 22],
    },
    {
        title: '...zur Themenstellung und Bewertung der Arbeiten und Prüfungen',
        documentIds: [23, 24, 25],
    },
];
