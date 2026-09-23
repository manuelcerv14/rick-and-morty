
  // 7. Obtener todos los episodios
  obtenerEpisodios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/episode`);
  }

  // 8. Obtener un episodio por ID
  obtenerEpisodio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/episode/${id}`);
  }
