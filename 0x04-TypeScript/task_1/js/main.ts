interface Teacer {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}