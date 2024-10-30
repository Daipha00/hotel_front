// client-user.model.ts

export class ClientUser {
    // User properties
    id?: number;
    userName: string;
    userPassword: string;
    userFirstName: string;
    userLastName: string;
    address: string;
    email: string;
    phoneNumber: string;
  
    // Client-specific properties
    country: string;
    city: string;
    zipcode: number;
  
    constructor(
      userName: string,
      userPassword: string,
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
      // Initialize User properties
      this.id = id;
      this.userName = userName;
      this.userPassword = userPassword;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.address = address;
      this.email = email;
      this.phoneNumber = phoneNumber;
  
      // Initialize Client-specific properties
      this.country = country;
      this.city = city;
      this.zipcode = zipcode;
    }
  }
  