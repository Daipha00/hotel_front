// room.model.ts
export interface Room {
    id: number;
    roomType: string;
    pax: number;
    price: number;
    availabilityStatus: string;
    description: string;
    image: Uint8Array;
  }
  