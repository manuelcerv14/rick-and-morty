// 1. OBTENER TODOS LOS PERSONAJES
 

  obtenerPersonajes(): void {

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonajes()
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
            '1. TODOS LOS PERSONAJES:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje = 'Error al obtener los personajes';

        }

      });
  }



  // 2. OBTENER PERSONAJE POR ID
 

  obtenerPersonaje(id: number): void {

    if (!id || id < 1) {
      this.mensaje = 'Introduce un ID válido';
      return;
    }

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerPersonaje(id)
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (personaje) => {

          this.personajes = [personaje];

          console.log(
            '2. PERSONAJE POR ID:',
            personaje
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.personajes = [];
          this.mensaje = 'No se encontró el personaje';

        }

      });
  }

  
  // 9. OBTENER TODAS LAS UBICACIONES
  

  obtenerUbicaciones(): void {

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerUbicaciones()
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (respuesta) => {

          this.ubicaciones = respuesta.results;

          console.log(
            '9. TODAS LAS UBICACIONES:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.ubicaciones = [];
          this.mensaje =
            'Error al obtener las ubicaciones';

        }

      });
  }
