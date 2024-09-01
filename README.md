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
      "id": 1,
      "titulo": "Avengers: Endgame",
      "genero": "Acción",
      "duracion": "181",
      "sinopsis": "Los Vengadores se enfrentan a Thanos."
    },
    {
      "_id": "66d0dc76eec85678b0fb0d6d",
      "id": 2,
      "titulo": "The Dark Knight",
      "genero": "Acción",
      "duracion": "152",
      "sinopsis": "Batman enfrenta al Joker."
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
  GET /peliculas/66d0dc76eec85678b0fb0d6e
  ```

  #### Ejemplo de Respuesta Exitosa

  ```
  {
    "_id": "66d0dc76eec85678b0fb0d6e",
    "id": 3,
    "titulo": "Interstellar",
    "genero": "Ciencia Ficción",
    "duracion": "169",
    "sinopsis": "Exploración del espacio para salvar la humanidad."
  }
  ```

  #### Respuestas Posibles

  - **200 OK**: Solicitud exitosa, devuelve los detalles de la película.
  - **404 Not Found**: Película no encontrada.
  - **500 Internal Server Error**: Error del servidor al intentar obtener los detalles de la película.