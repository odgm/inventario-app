import { Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  imports: [CommonModule],
  templateUrl: './producto-lista.html'
})
export class ProductoLista {
  productos: Producto[] = [];

  private productoServicio = inject(ProductoService);

  ngOnInit(){
    // Cargar los productos
    this.obtenerProductos();
  }

  private obtenerProductos(): void{
    this.productoServicio.obtenerProductosLista().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.productos = datos;
        },
        error: (error) => {
          console.error("Error al obtener los productos", error);
        }
      }
    );
  }
}
