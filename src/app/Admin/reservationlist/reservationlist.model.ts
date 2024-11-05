export interface Reservation {
    id?: number;
    check_in: string;
    check_out: string;
    arrival_time: string;
    numberOfGuests: number;
    special_request?: string;
    clientId?: number;
  }
  