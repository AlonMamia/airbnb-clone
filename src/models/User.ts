export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date,
    gender: 'male' | 'female' | 'other';
    address: string;
    city: string;
    country: string;
    postalCode: string;
}
