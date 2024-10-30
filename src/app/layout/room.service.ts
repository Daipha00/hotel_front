import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:9090/room'; // Adjust the base URL if needed

  constructor(private http: HttpClient) {}

  // Create a new Room
  createRoom(roomData: {
    roomType: string;
    pax: number;
    price: number;
    availabilityStatus: string;
    description: string;
    image: File;
  }): Observable<Room> {
    const formData = new FormData();
    formData.append('roomType', roomData.roomType);
    formData.append('pax', roomData.pax.toString());
    formData.append('price', roomData.price.toString());
    formData.append('availabilityStatus', roomData.availabilityStatus);
    formData.append('description', roomData.description);
    formData.append('image', roomData.image);

    return this.http.post<Room>(this.apiUrl, formData);
  }

  // Retrieve all Rooms
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  // Retrieve a Room by ID
  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  // Update a Room
  updateRoom(id: number, roomData: {
    roomType: string;
    pax: number;
    price: number;
    availabilityStatus: string;
    description: string;
    image?: File;
  }): Observable<Room> {
    const formData = new FormData();
    formData.append('roomType', roomData.roomType);
    formData.append('pax', roomData.pax.toString());
    formData.append('price', roomData.price.toString());
    formData.append('availabilityStatus', roomData.availabilityStatus);
    formData.append('description', roomData.description);

    if (roomData.image) {
      formData.append('image', roomData.image);
    }

    return this.http.put<Room>(`${this.apiUrl}/${id}`, formData);
  }

  // Delete a Room by ID
  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
