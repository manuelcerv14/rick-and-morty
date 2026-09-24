import {
  ChangeDetectorRef,
  Component,
  OnInit,
  signal
} from '@angular/core';

import { finalize } from 'rxjs';

import { RickAndMortyService } from './services/rick-and-morty.service';
import { Personaje } from './modelo/personaje';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {

  protected readonly title = signal('rick-and-morty');

  personajes: Personaje[] = [];
  episodios: any[] = [];
  ubicaciones: any[] = [];

  cargando = false;
  mensaje = '';

  constructor(
    private servicio: RickAndMortyService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.obtenerPersonajes();
  }


 
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


  
  // 7. OBTENER TODOS LOS EPISODIOS
  

  obtenerEpisodios(): void {

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerEpisodios()
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (respuesta) => {

          this.episodios = respuesta.results;

          console.log(
            '7. TODOS LOS EPISODIOS:',
            respuesta
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.episodios = [];
          this.mensaje =
            'Error al obtener los episodios';

        }

      });
  }


  
  // 8. OBTENER EPISODIO POR ID
 

  obtenerEpisodio(id: number): void {

    if (!id || id < 1) {
      this.mensaje = 'Introduce un ID de episodio válido';
      return;
    }

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerEpisodio(id)
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (episodio) => {

          this.episodios = [episodio];

          console.log(
            '8. EPISODIO POR ID:',
            episodio
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.episodios = [];
          this.mensaje =
            'No se encontró el episodio';

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


  
  // 10. OBTENER UBICACIÓN POR ID
 

  obtenerUbicacion(id: number): void {

    if (!id || id < 1) {
      this.mensaje = 'Introduce un ID de ubicación válido';
      return;
    }

    this.cargando = true;
    this.mensaje = '';

    this.servicio.obtenerUbicacion(id)
      .pipe(
        finalize(() => {
          this.cargando = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({

        next: (ubicacion) => {

          this.ubicaciones = [ubicacion];

          console.log(
            '10. UBICACIÓN POR ID:',
            ubicacion
          );

        },

        error: (error) => {

          console.error('ERROR:', error);

          this.ubicaciones = [];
          this.mensaje =
            'No se encontró la ubicación';

        }

      });
  }

}
