import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-room-venue-configuration',
  templateUrl: './admin-room-venue-configuration.component.html',
  styleUrl: './admin-room-venue-configuration.component.css'
})
export class AdminRoomVenueConfigurationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 // Room properties
  roomType: string = '';
  roomPax: number = 0;
  roomPrice: number = 0;
  roomAvailabilityStatus: string = '';
  roomDescription: string = '';
  roomImage: File | null = null;
  roomData: any[] = [];
  displayedColumns: string[] = ['roomType', 'pax', 'price', 'availabilityStatus', 'description','roomImage', 'actions'];

  // Venue properties
  venueType: string = '';
  venueCapacity: number = 0;
  venuePrice: number = 0;
  venueLocation: string = '';
  venueAvailabilityStatus: string = '';
  venueDescription: string = '';
  venueImage: File | null = null;
  venuePackage: string = '';
  venueData: any[] = [];
  venueColumns: string[] = ['venueType', 'capacity', 'price', 'location', 'availabilityStatus', 'description','venuePackage','venueImage','actions'];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadRooms();
    this.loadVenues();
   
  }

  // API: Fetch Rooms
  loadRooms() {
    this.http.get<any[]>('http://localhost:9090/room').subscribe(data => {
      this.roomData = data;
    }, error => {
      console.error('Error fetching rooms:', error);
    });
  }

  // API: Save Room
  image: File | null = null; // Add this property to hold the image file

  currentRoomId: number | null = null; // Track the current venue ID

  saveRoom() {
    const formData = new FormData();
    
    // Append all venue fields to FormData
    formData.append('roomType', this.roomType);
    formData.append('pax', this.roomPax.toString());
    formData.append('price', this.roomPrice.toString());
    formData.append('availabilityStatus', this.roomAvailabilityStatus);
    formData.append('description', this.roomDescription);
    
    // Append the image if it's selected
    if (this.roomImage) {
      formData.append('image', this.roomImage);  // Ensure it's a File object
    } else {
      console.error('No room image file selected');
    }
  
    // Check if we are updating an existing venue or adding a new one
    if (this.currentRoomId) {
      // Update existing venue
      this.http.put(`http://localhost:9090/room/${this.currentRoomId}`, formData)
        .subscribe(response => {
          console.log('Room updated successfully', response);
          this.loadRooms(); // Refresh venue data after updating
          this.resetForm();
        }, error => {
          console.error('Error updating room:', error);
        });
    } else {
      // Add new venue
      this.http.post('http://localhost:9090/room', formData)
        .subscribe(response => {
          console.log('Room added successfully', response);
          this.loadRooms(); // Refresh venue data after adding
          this.resetForm();
        }, error => {
          console.error('Error adding room:', error);
        });
    }
  }
  
  
  onRoomFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.roomImage = file; // Store the selected file
    }
  }

  editRoom(room: any) {
    this.currentRoomId = room.id; // Set the current venue ID
    this.roomType = room.roomType;
    this.roomPax = room.pax;
    this.roomPrice = room.price;
    this.roomAvailabilityStatus = room.availabilityStatus;
    this.roomDescription = room.description;
   
  
    // Handle the image
    if (room.image) {
      const byteCharacters = atob(room.image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      this.roomImage = new File([byteArray], 'room-image.jpg', { type: 'image/jpeg' });
    } else {
      this.roomImage = null; // No image available
    }
  }

  updateRoom() {
    if (this.currentRoomId === null) {
      console.error('No room ID set for update');
      return; // Exit if no ID is set
    }
  
    const formData = new FormData();
    formData.append('roomType', this.roomType);
    formData.append('pax', this.roomPax.toString());
    formData.append('price', this.roomPrice.toString());
    formData.append('availabilityStatus', this.venueAvailabilityStatus);
    formData.append('description', this.venueDescription);
    
    if (this.roomImage) {
      formData.append('image', this.roomImage);
    }
  
    this.http.put(`http://localhost:9090/room/${this.currentRoomId}`, formData)
      .subscribe(response => {
        console.log('room updated successfully', response);
        this.loadRooms(); // Refresh venue data after updating
        this.resetForm(); // Reset the form after updating
      }, error => {
        console.error('Error updating room', error);
      });
  }

  // API: Delete Room
  deleteRoom(room: any) {
    this.http.delete(`http://localhost:9090/room/${room.id}`).subscribe(() => {
      console.log('Room deleted successfully');
      this.loadRooms(); // Refresh room data after deletion
      this.resetForm();
    }, error => {
      console.error('Error deleting room:', error);
    });
  }












  // API: Fetch Venues
  loadVenues() {
    this.http.get<any[]>('http://localhost:9090/venue').subscribe(data => {
      this.venueData = data;
    }, error => {
      console.error('Error fetching venues:', error);
    });
  }

  saveVenue() {
    const formData = new FormData();
    
    // Append all venue fields to FormData
    formData.append('venueType', this.venueType);
    formData.append('capacity', this.venueCapacity.toString());
    formData.append('price', this.venuePrice.toString());
    formData.append('location', this.venueLocation);
    formData.append('availabilityStatus', this.venueAvailabilityStatus);
    formData.append('venuePackage', this.venuePackage);  // Add this field
    formData.append('description', this.venueDescription);
    
    // Append the image if it's selected
    if (this.venueImage) {
      formData.append('image', this.venueImage);  // Ensure it's a File object
    } else {
      console.error('No venue image file selected');
    }
  
    // Check if we are updating an existing venue or adding a new one
    if (this.currentVenueId) {
      // Update existing venue
      this.http.put(`http://localhost:9090/venue/${this.currentVenueId}`, formData)
        .subscribe(response => {
          console.log('Venue updated successfully', response);
          this.loadVenues(); // Refresh venue data after updating
          this.resetForm();
        }, error => {
          console.error('Error updating venue:', error);
        });
    } else {
      // Add new venue
      this.http.post('http://localhost:9090/venue', formData)
        .subscribe(response => {
          console.log('Venue added successfully', response);
          this.loadVenues(); // Refresh venue data after adding
          this.resetForm();
        }, error => {
          console.error('Error adding venue:', error);
        });
    }
  }
  
  
  onVenueFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.venueImage = file; // Store the selected file
    }
  }
  




  currentVenueId: number | null = null; // Track the current venue ID

  editVenue(venue: any) {
    this.currentVenueId = venue.id; // Set the current venue ID
    this.venueType = venue.venueType;
    this.venueCapacity = venue.capacity;
    this.venuePrice = venue.price;
    this.venueLocation = venue.location;
    this.venueAvailabilityStatus = venue.availabilityStatus;
    this.venuePackage = venue.venuePackage;
    this.venueDescription = venue.description;
  
    // Handle the image
    if (venue.image) {
      const byteCharacters = atob(venue.image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      this.venueImage = new File([byteArray], 'venue-image.jpg', { type: 'image/jpeg' });
    } else {
      this.venueImage = null; // No image available
    }
  }



  updateVenue() {
    if (this.currentVenueId === null) {
      console.error('No venue ID set for update');
      return; // Exit if no ID is set
    }
  
    const formData = new FormData();
    formData.append('venueType', this.venueType);
    formData.append('capacity', this.venueCapacity.toString());
    formData.append('price', this.venuePrice.toString());
    formData.append('location', this.venueLocation);
    formData.append('availabilityStatus', this.venueAvailabilityStatus);
    formData.append('venuePackage', this.venuePackage);
    formData.append('description', this.venueDescription);
    
    if (this.venueImage) {
      formData.append('image', this.venueImage);
    }
  
    this.http.put(`http://localhost:9090/venue/${this.currentVenueId}`, formData)
      .subscribe(response => {
        console.log('Venue updated successfully', response);
        this.loadVenues(); // Refresh venue data after updating
        this.resetForm(); // Reset the form after updating
      }, error => {
        console.error('Error updating venue', error);
      });
  }

  resetForm() {
    this.currentVenueId = null; // Clear the current venue ID
    this.venueType = '';
    this.venueCapacity = 0;
    this.venuePrice = 0;
    this.venueLocation = '';
    this.venueAvailabilityStatus = '';
    this.venuePackage = '';
    this.venueDescription = '';
    this.venueImage = null; // Clear the image
  
    // Reset the file input
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Clear the file input
    }
  
    // If you have an image preview element, clear its source
    const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
    if (imagePreview) {
      imagePreview.src = ''; // Clear the image preview
    }
  }

  // API: Delete Venue
  deleteVenue(venue: any) {
    this.http.delete(`http://localhost:9090/venue/${venue.id}`).subscribe(() => {
      console.log('Venue deleted successfully');
      this.loadVenues(); // Refresh venue data after deletion
    }, error => {
      console.error('Error deleting venue:', error);
    });
  }

 

  openImageDialog(image: string) {
    if (!image) {
      console.error('No image provided to openImageDialog');
      return; // Exit the method if image is undefined
    }
    console.log('Opening image dialog with image:', image);
  
    // Convert base64 string to Blob
    const byteCharacters = atob(image);
    const byteNumbers = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([byteNumbers], { type: 'image/jpeg' }); // Adjust the type as necessary
    const imageUrl = URL.createObjectURL(blob);
  
    this.dialog.open(ImageDialogComponent, {
      data: { image: imageUrl },

    });
  }



}