export interface RoomReservation {
    check_in: string;
    check_out: string;
    arrival_time: string;
    numberOfGuests: number;
    special_request?: string;
    clientId?: number; // Optional, will be set in the component
    roomId?: number; // Optional, will be set in the component
  }