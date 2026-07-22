import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ProductoService {

    private urlBase = "http://localhost:8080/inventario-app/productos";
    private clienteHttp = inject(HttpClient);

    obtenerProductosLista(): Observable<ProductoService[]>{
        return this.clienteHttp.get<ProductoService[]>(this.urlBase);
    }

}
