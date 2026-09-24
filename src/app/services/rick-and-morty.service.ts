import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../modelo/personaje';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  // 1. Obtener todos los personajes
  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character`);
  }

  // 2. Obtener un personaje por ID
  obtenerPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/character/${id}`);
  }

  // 3. Buscar personajes por nombre
  obtenerPersonajesPorNombre(nombre: string): Observable<any> {
    const params = new HttpParams().set('name', nombre);

    return this.http.get<any>(
      `${this.apiUrl}/character`,
      { params }
    );
  }

  // 4. Buscar personajes por estado
  obtenerPersonajesPorEstado(estado: string): Observable<any> {
    const params = new HttpParams().set('status', estado);

    return this.http.get<any>(
      `${this.apiUrl}/character`,
      { params }
    );
  }

  // 5. Buscar personajes por especie
  obtenerPersonajesPorEspecie(especie: string): Observable<any> {
    const params = new HttpParams().set('species', especie);

    return this.http.get<any>(
      `${this.apiUrl}/character`,
      { params }
    );
  }

  // 6. Buscar personajes por género
  obtenerPersonajesPorGenero(genero: string): Observable<any> {
    const params = new HttpParams().set('gender', genero);

    return this.http.get<any>(
      `${this.apiUrl}/character`,
      { params }
    );
  }

  // 7. Obtener todos los episodios
  obtenerEpisodios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/episode`);
  }

  // 8. Obtener un episodio por ID
  obtenerEpisodio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/episode/${id}`);
  }

  // 9. Obtener todas las ubicaciones
  obtenerUbicaciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/location`);
  }

  // 10. Obtener una ubicación por ID
  obtenerUbicacion(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/location/${id}`);
  }
}
 
