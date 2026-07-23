import { ChangeDetectorRef, Component, inject } from '@angular/core';
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

  ngOnInit() {
    // Cargar los productos
    this.obtenerProductos();
  }

  private cd = inject(ChangeDetectorRef);

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
        this.cd.detectChanges();
      },
      error: (error) => console.error(error)
    });
  }
}
