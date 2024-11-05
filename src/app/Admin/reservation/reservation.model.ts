// src/app/models/reservation.model.ts

export class Client {
    id?: number;
    userFirstName: string;
    userLastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    zipcode: number;

    constructor(
        userFirstName: string,
        userLastName: string,
        address: string,
        email: string,
        phoneNumber: string,
        country: string,
        city: string,
        zipcode: number,
        id?: number
    ) {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.city = city;
        this.zipcode = zipcode;
        this.id = id;
    }
}

export class Room {
    id?: number;
    roomType: string;
    pax: number;
    price: number;
    description: string;
    image: string;

    constructor(
        roomType: string,
        pax: number,
        price: number,
        description: string,
        image: string,
        id?: number
    ) {
        this.roomType = roomType;
        this.pax = pax;
        this.price = price;
        this.description = description;
        this.image = image;
        this.id = id;
    }
}

export class Reservation {
    id?: number; // Use optional chaining as id might not be defined until created
    checkIn: Date; // Use Date type for LocalDate
    checkOut: Date; // Use Date type for LocalDate
    arrivalTime: string; // LocalTime can be represented as a string (HH:mm)
    numberOfGuests: number;
    specialRequest?: string; // Optional property

    client?: Client; // Include Client object
    room?: Room; // Include Room object

    constructor(
        checkIn: Date,
        checkOut: Date,
        arrivalTime: string,
        numberOfGuests: number,
        specialRequest?: string,
        client?: Client,
        room?: Room,
        id?: number
    ) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.arrivalTime = arrivalTime;
        this.numberOfGuests = numberOfGuests;
        this.specialRequest = specialRequest;
        this.client = client;
        this.room = room;
        this.id = id;
    }
}
