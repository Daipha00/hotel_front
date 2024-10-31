import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client } from './client.model';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  clients: Client[] = []; // You can use any interface or type here

  private apiUrl = 'http://localhost:9090/client'; // Adjust based on your API endpoint

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.http.get<Client[]>(this.apiUrl).subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error: any) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  deleteClient(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        this.clients = this.clients.filter(client => client.id !== id);
      },
      (error: any) => {
        console.error('Error deleting client:', error);
      }
    );
  }

  editClient(id: number): void {
    // Implement the logic to edit the client if necessary
    console.log(`Editing client with ID: ${id}`);
  }


}
