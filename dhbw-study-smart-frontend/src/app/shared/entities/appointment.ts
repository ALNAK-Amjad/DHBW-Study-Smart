import { User } from "./user";

export interface Appointment {
    appointmentId: number;
    title: string;
    startDate: string;
    endDate: string;
    repetitive: boolean;
    user: User;
}
