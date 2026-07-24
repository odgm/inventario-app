import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  imports: [],
  templateUrl: './editar-producto.html'
})
export class EditarProducto {
  producto: Producto = new Producto();
  id!: number;

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => {
        this.producto = datos
        this.cd.detectChanges();
      },
      error: (errores: any) => console.log(errores)
    })
  }
}
