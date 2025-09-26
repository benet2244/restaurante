import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/Login']);
  }

  editarReserva() {
    // Lógica para editar una reserva
    console.log('Editar reserva');
  }

  cancelarReserva() {
    // Lógica para cancelar una reserva
    console.log('Cancelar reserva');
  }

  nuevaReserva() {
    // Lógica para crear una nueva reserva
    console.log('Nueva reserva');
  }

  gestionarMesas() {
    // Lógica para gestionar mesas
    console.log('Gestionar mesas');
  }

  configurarHorarios() {
    // Lógica para configurar horarios
    console.log('Configurar horarios');
  }

  verClientes() {
    // Lógica para ver clientes
    console.log('Ver clientes');
  }

  verReportes() {
    // Lógica para ver reportes
    console.log('Ver reportes');
  }
}
