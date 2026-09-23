// 3. BUSCAR PERSONAJES POR NOMBRE


  buscarPorNombre(nombre: string): void {

    if (!nombre.trim()) {
      this.obtenerPersonajes();
      return;
    }

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonajesPorNombre(nombre)
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (respuesta) => {

          this.personajes = respuesta.results;

          console.log(
            '3. PERSONAJES POR NOMBRE:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje =
            'No se encontraron personajes con ese nombre';

        }

      });
  }


  
  // 4. FILTRAR POR ESTADO
  

  buscarPorEstado(estado: string): void {

    console.log(
      'ESTADO SELECCIONADO:',
      estado
    );

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonajesPorEstado(estado)
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (respuesta) => {

          this.personajes = respuesta.results;

          console.log(
            '4. PERSONAJES POR ESTADO:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje =
            'No se encontraron personajes con ese estado';

        }

      });
  }
