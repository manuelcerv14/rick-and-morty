 // 5. FILTRAR POR ESPECIE


  buscarPorEspecie(especie: string): void {

    console.log(
      'ESPECIE SELECCIONADA:',
      especie
    );

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonajesPorEspecie(especie)
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
            '5. PERSONAJES POR ESPECIE:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje =
            'No se encontraron personajes con esa especie';

        }

      });
  }


  
  // 6. FILTRAR POR GÉNERO
  

  buscarPorGenero(genero: string): void {

    console.log(
      'GÉNERO SELECCIONADO:',
      genero
    );

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonajesPorGenero(genero)
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
            '6. PERSONAJES POR GÉNERO:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje =
            'No se encontraron personajes con ese género';

        }

      });
  }
