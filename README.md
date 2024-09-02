1. # Documentación de la API

  ## API de Películas 

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

## API de Boletos

### Endpoints

#### Comprar Boleto

- **Endpoint**: `/comprarBoleto`
- **Método**: `POST`

##### Descripción

Este endpoint permite comprar un boleto para una película en una fecha y hora específicas. Inserta un nuevo documento en la colección de boletos en la base de datos.

##### Parámetros de Solicitud

- **`peliculaId`** (string, requerido): El ID de la película para la cual se está comprando el boleto.
- **`fecha`** (string, requerido): La fecha para la cual se desea comprar el boleto, en formato `YYYY-MM-DD`.
- **`hora`** (string, requerido): La hora para la cual se desea comprar el boleto, en formato `HH:MM`.
- **`cantidad`** (número, requerido): La cantidad de boletos que se desea comprar.

##### Ejemplo de Solicitud

```
const comprarBoleto = async (peliculaId, fecha, hora, cantidad) => {
    try {
        const resultado = await boletos.comprarBoleto(peliculaId, fecha, hora, cantidad);
        if (resultado.disponible) {
            console.log("Boleto comprado con ID:", resultado.boletoId);
        } else {
            console.log("No se pudo comprar el boleto:", resultado.message);
        }
    } catch (error) {
        console.error("Error al comprar el boleto:", error);
    }
};

const peliculaId = "66d0dc76eec85678b0fb0d6c"; 
const fecha = "2024-09-10";
const hora = "18:00";
const cantidad = 2;

comprarBoleto(peliculaId, fecha, hora, cantidad);
```

##### Respuestas Esperadas

- **Éxito**:

  - Código de estado: `200 OK`

  - Cuerpo de la respuesta:

    ```
    {
      "disponible": true,
      "boletoId": "<ID del boleto>"
    }
    ```

- **Error**:

  - Código de estado: `500 Internal Server Error`

  - Cuerpo de la respuesta:

    ```
    {
      "disponible": false,
      "message": "No se pudo comprar el boleto: [Mensaje de error]"
    }
    ```

### 