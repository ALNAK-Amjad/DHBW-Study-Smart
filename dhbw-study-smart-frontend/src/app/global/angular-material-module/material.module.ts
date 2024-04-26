
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';

/**
 * Hierüber können alle verwendeten Material-Komponenten-Module an zentraler Stelle einmalig eingebunden werden
 */
const material = [
    MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule,
    MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule,
    MatExpansionModule, MatCardModule, MatTabsModule, MatStepperModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatAutocompleteModule, MatCheckboxModule, MatRadioModule,
    MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatSlideToggleModule,
    DragDropModule,
];

/**
 * Material-Module exportiert alle Material-Komponenten, die im Array aufgelistet sind
 */
@NgModule({
    declarations: [],
    imports: [material],
    exports: [material],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}, // Locale z.B. für Datumsdarstellungen der Materialkomponenten
    ],
})
export class MaterialModule {
}
