import { Component, OnInit } from '@angular/core';
import { ClientUserService } from './client-user.service';
import { ClientUser } from './client-user.model';

@Component({
  selector: 'app-custoer',
  templateUrl: './custoer.component.html',
  styleUrl: './custoer.component.css'
})
export class CustoerComponent implements OnInit{
  clients: ClientUser[] = [];
  currentClient: ClientUser = new ClientUser('', '', '', '', '', '', '', '', '', 0);
  isEditMode = false;

  constructor(private clientUserService: ClientUserService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientUserService.getAllClients().subscribe(
      (data) => this.clients = data,
      (error) => console.error('Error fetching clients:', error)
    );
  }

  saveClient(): void {
    if (this.isEditMode) {
      this.clientUserService.updateClient(this.currentClient.id!, this.currentClient).subscribe(() => {
        this.getAllClients();
        this.resetForm();
      });
    } else {
      this.clientUserService.registerNewClient(this.currentClient).subscribe(() => {
        this.getAllClients();
        this.resetForm();
      });
    }
  }

  editClient(client: ClientUser): void {
    this.currentClient = { ...client };
    this.isEditMode = true;
  }

  deleteClient(id: number): void {
    this.clientUserService.deleteClient(id).subscribe(() => this.getAllClients());
  }

  resetForm(): void {
    this.currentClient = new ClientUser('', '', '', '', '', '', '', '', '', 0);
    this.isEditMode = false;
  }
}


