// 1. Obtener todos los personajes
  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character`);
  }

  // 2. Obtener un personaje por ID
  obtenerPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/character/${id}`);
  }
  // 9. Obtener todas las ubicaciones
  obtenerUbicaciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/location`);
  }

 
 
