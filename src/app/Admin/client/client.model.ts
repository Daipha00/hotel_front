export class Client {
    id: number;                   // Using 'number' for Long
    userFirstName: string;
    userLastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    zipcode: number;              // Using 'number' for int

    constructor(
        id: number,
        userFirstName: string,
        userLastName: string,
        address: string,
        email: string,
        phoneNumber: string,
        country: string,
        city: string,
        zipcode: number
    ) {
        this.id = id;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.city = city;
        this.zipcode = zipcode;
    }
}
