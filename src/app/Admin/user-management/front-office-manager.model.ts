import { User } from './user.model';  // Import User model

export interface FrontOfficeManager extends User {
  hotelManagerId: number;    // Represents the many-to-one relationship with HotelManager (just an ID here)
  reservations: number[];    // List of reservation IDs associated with this FrontOfficeManager
}
