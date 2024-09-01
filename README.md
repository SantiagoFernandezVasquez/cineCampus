1. # Documentación de la API

  ## Introducción

  Esta API permite interactuar con un sistema de gestión de películas y boletos. A continuación, se detallan los endpoints disponibles, los parámetros que aceptan y las respuestas esperadas.

  ## Endpoints

  ### 1. Listar todas las películas

  - **Endpoint**: `/peliculas`
  - **Método**: `GET`
  - **Descripción**: Este endpoint permite obtener una lista de todas las películas disponibles en la cartelera.

  #### Ejemplo de Solicitud

  ```
  GET /peliculas
  ```

  #### Ejemplo de Respuesta Exitosa

  ```
  [
    {
      "_id": "66d0dc76eec85678b0fb0d6c",
      "titulo": "Película Ejemplo 1",
      "genero": "Acción",
      "duracion": "120 min",
      "horarios": ["18:00", "20:00"]
    },
    {
      "_id": "66d0dc76eec85678b0fb0d6d",
      "titulo": "Película Ejemplo 2",
      "genero": "Drama",
      "duracion": "150 min",
      "horarios": ["16:00", "19:00"]
    }
  ]
  ```

  #### Respuestas Posibles

  - **200 OK**: Solicitud exitosa, devuelve una lista de películas.
  - **500 Internal Server Error**: Error del servidor al intentar obtener las películas.

  ### 2. Obtener detalles de una película

  - **Endpoint**: `/peliculas/:id`
  - **Método**: `GET`
  - **Descripción**: Obtiene los detalles de una película específica.

  #### Parámetros

  - `id` (URL): ID de la película que se desea obtener.

  #### Ejemplo de Solicitud

  ```
  GET /peliculas/66d0dc76eec85678b0fb0d6c
  ```

  #### Ejemplo de Respuesta Exitosa

  ```
  {
    "_id": "66d0dc76eec85678b0fb0d6c",
    "titulo": "Película Ejemplo 1",
    "genero": "Acción",
    "duracion": "120 min",
    "sinopsis": "Esta es la sinopsis de la película Ejemplo 1.",
    "director": "Director Ejemplo",
    "actores": ["Actor 1", "Actor 2"],
    "horarios": ["18:00", "20:00"]
  }
  ```

  #### Respuestas Posibles

  - **200 OK**: Solicitud exitosa, devuelve los detalles de la película.
  - **404 Not Found**: Película no encontrada.
  - **500 Internal Server Error**: Error del servidor al intentar obtener los detalles de la película.