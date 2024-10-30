import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
//   styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  newRoom: Partial<Room> = {};
  selectedFile: File | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addRoom(): void {
    if (this.newRoom && this.selectedFile) {
      const roomData = {
        roomType: this.newRoom.roomType!,
        pax: this.newRoom.pax!,
        price: this.newRoom.price!,
        availabilityStatus: this.newRoom.availabilityStatus!,
        description: this.newRoom.description!,
        image: this.selectedFile
      };
      this.roomService.createRoom(roomData).subscribe(() => {
        this.fetchRooms();
        this.newRoom = {};
        this.selectedFile = null;
      });
    }
  }
}
