import { Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto-service';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html',
  styleUrl: './producto-lista.css',
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoService);
}
