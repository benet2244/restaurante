import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/Login']);
  }

  verMesas() {
    // Lógica para ver mesas disponibles
    console.log('Ver mesas disponibles');
  }

  modificarReserva() {
    // Lógica para modificar la reserva
    console.log('Modificar reserva');
  }

  cancelarReserva() {
    // Lógica para cancelar la reserva
    console.log('Cancelar reserva');
  }
}
