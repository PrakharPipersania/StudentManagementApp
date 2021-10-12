export interface Student {
    id:number,
    studentName: string,
    studentEmail: string,
    phoneNumber: string,
    class: string
}

export interface Attendance {
    id: number,
    attendanceDate: Date,
    studentId: number,
    isPresent: boolean
}