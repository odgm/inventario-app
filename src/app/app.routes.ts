import { Routes } from '@angular/router';
import { ProductoLista } from './producto-lista/producto-lista';
import { AgregarProducto } from './agregar-producto/agregar-producto';

// la app responde a la url http://localhost:4200/productos
export const routes: Routes = [
    { path: 'productos', component: ProductoLista },
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: 'agregar-producto', component: AgregarProducto }
];
