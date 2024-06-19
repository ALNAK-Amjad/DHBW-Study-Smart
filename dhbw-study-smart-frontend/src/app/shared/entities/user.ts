import {Course} from './course';
import {Semester} from './semester';
import {StudyProgram} from './study-program';

export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    password?: string;
    studentNumber: number;
    course?: Course;
    semester?: Semester;
    studyProgram?: StudyProgram;
}
