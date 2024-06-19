import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-new-appointment-popup',
    templateUrl: './new-appointment-popup.component.html',
    styleUrls: ['./new-appointment-popup.component.scss'],
})
export class NewAppointmentPopupComponent {
    // Termin-Daten
    appointmentForm: FormGroup = new FormGroup({
        title: new FormControl(null, Validators.required),
        startDate: new FormControl(null, Validators.required),
        endDate: new FormControl(null, Validators.required),
    });

    constructor(
        public dialogRef: MatDialogRef<NewAppointmentPopupComponent>,
    ) {}

    // Submit-Button has been clicked
    public submit() {
        this.dialogRef.close(this.appointmentForm.value);
    }

    // Cancel-Button has been clicked
    public cancel() {
        this.dialogRef.close(null);
    }

    // Get current time
    public getToday() {
        return new Date();
    }

    // Get the start date to prevent end date to be before the start date in the datepicker
    public getStartDate() {
        return this.appointmentForm.value.startDate;
    }
}
