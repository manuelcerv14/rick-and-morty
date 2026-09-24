<div class="bg-dark min-vh-100">

  <div class="container py-5">

    <!-- ==================== ENCABEZADO ==================== -->

    <header class="text-center text-white mb-5">

      <span class="badge rounded-pill bg-primary px-3 py-2 mb-3">
        CHARACTER DATABASE
      </span>

      <h1 class="display-2 fw-bold mb-3">
        Rick and Morty
      </h1>

      <p class="lead text-secondary mb-4">
        Explora personajes, mundos y dimensiones.
      </p>

      <div
        class="d-inline-flex align-items-center gap-2 bg-secondary bg-opacity-25 border border-secondary rounded-pill px-4 py-2">

        <span class="text-white fw-semibold">
          {{ personajes.length }}
        </span>

        <span class="text-secondary">
          personajes encontrados
        </span>

      </div>

    </header>


    <!-- ==================== CONTROLES ==================== -->

    <section class="card bg-black border border-secondary rounded-4 p-4 mb-5">

      <h2 class="h4 text-white mb-4">
         Buscar personajes
      </h2>


      <!-- BUSCAR POR NOMBRE -->

      <div class="row g-3 mb-4">

        <div class="col-md-8">

          <label class="form-label text-secondary">
            Buscar por nombre
          </label>

          <input
            #nombreInput
            type="text"
            class="form-control bg-dark text-white border-secondary"
            placeholder="Ejemplo: Rick"
          >

        </div>

        <div class="col-md-4 d-flex align-items-end">

          <button
            class="btn btn-primary w-100"
            (click)="buscarPorNombre(nombreInput.value)"
          >
             Buscar nombre
          </button>

        </div>

      </div>


      <!-- BUSCAR POR ID -->

      <div class="row g-3 mb-4">

        <div class="col-md-8">

          <label class="form-label text-secondary">
            Buscar personaje por ID
          </label>

          <input
            #personajeId
            type="number"
            min="1"
            class="form-control bg-dark text-white border-secondary"
            placeholder="Ejemplo: 1"
          >

        </div>

        <div class="col-md-4 d-flex align-items-end">

          <button
            class="btn btn-outline-light w-100"
            (click)="obtenerPersonaje(personajeId.valueAsNumber)"
          >
             Buscar por ID
          </button>

        </div>

      </div>


      <!-- FILTROS -->

      <div class="row g-3">

        <!-- ESTADO -->

        <div class="col-md-4">

          <label class="form-label text-secondary">
            Estado
          </label>

          <select
            #estadoSelect
            class="form-select bg-dark text-white border-secondary"
            (change)="buscarPorEstado(estadoSelect.value)"
          >

            <option value="" disabled selected>
              Selecciona un estado
            </option>

            <option value="alive">
              Vivo
            </option>

            <option value="dead">
              Muerto
            </option>

            <option value="unknown">
              Desconocido
            </option>

          </select>

        </div>


        <!-- ESPECIE -->

        <div class="col-md-4">

          <label class="form-label text-secondary">
            Especie
          </label>

          <select
            #especieSelect
            class="form-select bg-dark text-white border-secondary"
            (change)="buscarPorEspecie(especieSelect.value)"
          >

            <option value="" disabled selected>
              Selecciona una especie
            </option>

            <option value="Human">
              Humano
            </option>

            <option value="Alien">
              Alien
            </option>

          </select>

        </div>


        <!-- GÉNERO -->

        <div class="col-md-4">

          <label class="form-label text-secondary">
            Género
          </label>

          <select
            #generoSelect
            class="form-select bg-dark text-white border-secondary"
            (change)="buscarPorGenero(generoSelect.value)"
          >

            <option value="" disabled selected>
              Selecciona un género
            </option>

            <option value="Male">
              Masculino
            </option>

            <option value="Female">
              Femenino
            </option>

            <option value="Genderless">
              Sin género
            </option>

            <option value="unknown">
              Desconocido
            </option>

          </select>

        </div>

      </div>


      <!-- BOTÓN TODOS -->

      <div class="mt-4">

        <button
          class="btn btn-success w-100"
          (click)="obtenerPersonajes()"
        >
           Mostrar todos los personajes
        </button>

      </div>

    </section>


    <!-- ==================== EPISODIOS ==================== -->

    <section class="card bg-black border border-secondary rounded-4 p-4 mb-5">

      <h2 class="h4 text-white mb-4">
         Episodios
      </h2>

      <div class="row g-3 mb-4">

        <div class="col-md-6">

          <button
            class="btn btn-primary w-100"
            (click)="obtenerEpisodios()"
          >
             Obtener todos los episodios
          </button>

        </div>

        <div class="col-md-6">

          <div class="input-group">

            <input
              #episodioId
              type="number"
              min="1"
              class="form-control bg-dark text-white border-secondary"
              placeholder="ID del episodio"
            >

            <button
              class="btn btn-outline-light"
              (click)="obtenerEpisodio(episodioId.valueAsNumber)"
            >
              Buscar episodio
            </button>

          </div>

        </div>

      </div>


      @if (episodios.length > 0) {

        <div class="row g-3">

          @for (episodio of episodios; track episodio.id) {

            <div class="col-12 col-md-6 col-lg-4">

              <div class="border border-secondary rounded-3 p-3 h-100">

                <h3 class="h6 text-white">
                  {{ episodio.name }}
                </h3>

                <p class="text-secondary mb-1">
                  {{ episodio.episode }}
                </p>

                <small class="text-secondary">
                  {{ episodio.air_date }}
                </small>

              </div>

            </div>

          }

        </div>

      }

    </section>


    <!-- ==================== UBICACIONES ==================== -->

    <section class="card bg-black border border-secondary rounded-4 p-4 mb-5">

      <h2 class="h4 text-white mb-4">
         Ubicaciones
      </h2>

      <div class="row g-3 mb-4">

        <div class="col-md-6">

          <button
            class="btn btn-primary w-100"
            (click)="obtenerUbicaciones()"
          >
             Obtener todas las ubicaciones
          </button>

        </div>

        <div class="col-md-6">

          <div class="input-group">

            <input
              #ubicacionId
              type="number"
              min="1"
              class="form-control bg-dark text-white border-secondary"
              placeholder="ID de ubicación"
            >

            <button
              class="btn btn-outline-light"
              (click)="obtenerUbicacion(ubicacionId.valueAsNumber)"
            >
              Buscar ubicación
            </button>

          </div>

        </div>

      </div>


      @if (ubicaciones.length > 0) {

        <div class="row g-3">

          @for (ubicacion of ubicaciones; track ubicacion.id) {

            <div class="col-12 col-md-6 col-lg-4">

              <div class="border border-secondary rounded-3 p-3 h-100">

                <h3 class="h6 text-white">
                  {{ ubicacion.name }}
                </h3>

                <p class="text-secondary mb-1">
                  {{ ubicacion.type }}
                </p>

                <small class="text-secondary">
                  {{ ubicacion.dimension }}
                </small>

              </div>

            </div>

          }

        </div>

      }

    </section>


    <!-- ==================== MENSAJE ==================== -->

    @if (cargando) {

      <div class="text-center text-white py-4">

        <div
          class="spinner-border text-primary mb-3"
          role="status">
        </div>

        <p>
          Cargando información...
        </p>

      </div>

    }


    @if (mensaje) {

      <div class="alert alert-warning text-center mb-4">
        {{ mensaje }}
      </div>

    }


    <!-- ==================== PERSONAJES ==================== -->

    <div class="row g-4">

      @for (personaje of personajes; track personaje.id) {

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

          <article
            class="card h-100 bg-dark border border-secondary rounded-4 overflow-hidden shadow-lg">

            <!-- IMAGEN -->

            <div class="position-relative">

              <img
                [src]="personaje.image"
                [alt]="personaje.name"
                class="card-img-top"
              >

              <div class="position-absolute top-0 start-0 p-3">

                @if (personaje.status === 'Alive') {

                  <span class="badge bg-success rounded-pill px-3 py-2">
                    Vivo
                  </span>

                } @else if (personaje.status === 'Dead') {

                  <span class="badge bg-danger rounded-pill px-3 py-2">
                    Muerto
                  </span>

                } @else {

                  <span class="badge bg-secondary rounded-pill px-3 py-2">
                    Desconocido
                  </span>

                }

              </div>

            </div>


            <!-- INFORMACIÓN -->

            <div class="card-body p-4">

              <h2 class="h5 text-white fw-bold mb-4">
                {{ personaje.name }}
              </h2>


              <div class="d-flex justify-content-between align-items-center mb-3">

                <span class="text-secondary">
                  Especie
                </span>

                <span
                  class="badge bg-primary bg-opacity-25 text-primary border border-primary">

                  {{ personaje.species }}

                </span>

              </div>


              <div class="d-flex justify-content-between align-items-center mb-3">

                <span class="text-secondary">
                  Género
                </span>

                <span class="text-white">
                  {{ personaje.gender }}
                </span>

              </div>


              <div class="border-top border-secondary pt-3">

                <small class="text-secondary d-block mb-1">
                  ORIGEN
                </small>

                <span class="text-white small">
                  {{ personaje.origin.name }}
                </span>

              </div>

            </div>


            <!-- INFORMACIÓN EXTRA -->

            <div class="card-footer bg-transparent border-top border-secondary p-3">

              <details>

                <summary class="btn btn-outline-light w-100 rounded-3">
                  Ver información
                </summary>

                <div class="mt-3">

                  <div class="bg-black bg-opacity-25 rounded-3 p-3 mb-2">

                    <small class="text-secondary d-block mb-1">
                      UBICACIÓN
                    </small>

                    <span class="text-white small">
                      {{ personaje.location.name }}
                    </span>

                  </div>


                  <div class="bg-black bg-opacity-25 rounded-3 p-3 mb-3">

                    <small class="text-secondary d-block mb-1">
                      EPISODIOS
                    </small>

                    <span class="text-white">
                      {{ personaje.episode.length }}
                    </span>

                  </div>


                  <a
                    [href]="personaje.url"
                    target="_blank"
                    class="btn btn-primary w-100 rounded-3">

                    Ver personaje

                  </a>

                </div>

              </details>

            </div>

          </article>

        </div>

      }

    </div>


    <!-- ==================== FOOTER ==================== -->

    <footer class="text-center border-top border-secondary mt-5 pt-4">

      <p class="text-secondary mb-0">
        Rick and Morty API
      </p>

      <small class="text-secondary">
        Proyecto Angular - 10 métodos de API
      </small>

    </footer>

  </div>

</div> 
