// interface EventType {
//     attendance: boolean;
//     guestsCount: string;
// }

// export interface FormValues {
//     name: string;
//     phoneNumber: string;
//     matrimony: EventType;
//     reception: EventType;
// };

export interface FormValues {
    name: string;
    phone_number: string;
    holy_matrimony_attendance: string;
    holy_matrimony_guests_count: string;
    reception_attendance: string;
    reception_guests_count: string;
}