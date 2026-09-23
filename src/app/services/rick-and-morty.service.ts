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
