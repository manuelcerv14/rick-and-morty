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
