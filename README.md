# Documentación de la API

## API de Películas

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

### 3. Comprar Boleto

\~~~~

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

    

  ### 4. Verificar la Disponibilidad de Asientos

  

- **Endpoint**: `/verificarDisponibilidad`

- **Método**: `POST`

Verificar Disponibilidad de Asientos

- **Endpoint**: `/verificarDisponibilidad`
- **Método**: `POST`

##### Descripción

Este endpoint permite consultar la disponibilidad de asientos en una sala para una proyección específica.

##### Parámetros de Solicitud

- **`peliculaId`** (string, requerido): El ID de la película para la cual se desea verificar la disponibilidad de asientos.
- **`fecha`** (string, requerido): La fecha para la cual se desea verificar la disponibilidad, en formato `YYYY-MM-DD`.
- **`hora`** (string, requerido): La hora para la cual se desea verificar la disponibilidad, en formato `HH:MM`.

##### Ejemplo de Solicitud

```
const verificarDisponibilidad = async (peliculaId, fecha, hora) => {
    try {
        const resultado = await boletos.verificarDisponibilidad(peliculaId, fecha, hora);
        if (resultado.disponible) {
            console.log(`Asientos disponibles: ${resultado.asientosDisponibles}`);
        } else {
            console.log("No hay asientos disponibles.");
        }
    } catch (error) {
        console.error("Error al verificar la disponibilidad de asientos:", error);
    }
};
```

##### Respuestas Esperadas

- **Éxito**:

  - Código de estado: `200 OK`

  - Cuerpo de la respuesta:

    ```
    {
      "disponible": true,
      "asientosDisponibles": <Número de asientos disponibles>
    }
    ```

    

- **Error**:

  - Código de estado: `500 Internal Server Error`

  - Cuerpo de la respuesta:

    ```
    {
      "disponible": false,
      "message": "Error al verificar la disponibilidad: [Mensaje de error]"
    }
    ```

    

## API de Tarjetas

### Endpoints

### 5. Aplicar Descuentos

- **Endpoint**: `/aplicarDescuento`
- **Método**: `POST`

##### Descripción

Este endpoint permite aplicar un descuento en la compra de boletos para usuarios que tienen una tarjeta VIP.

##### Parámetros de Solicitud

- **usuarioId** (Obligatorio, `ObjectId`): El ID del usuario que desea aplicar el descuento.
- **montoOriginal** (Obligatorio, `Number`): El monto original del boleto antes de aplicar el descuento.

##### Ejemplo de Solicitud

```
POST /aplicar-descuento
Content-Type: application/json

{
  "usuarioId": "ObjectId del cliente",
  "montoOriginal": 100
}
```

**Ejemplo de respuesta:**

- **Usuario VIP:**

  ```
  {
    "montoConDescuento": 90
  }
  ```

- **Usuario no encontrado:**

  ```
  {
    "error": "Usuario no encontrado."
  }
  ```

  

## API de Clientes

### 6. Agregar Usuarios

### Endpoints

- ##### **Endpoint**: `/crearUsuario`

- **Método**: `POST`

##### Descripción

Permite la creación de un nuevo usuario en el sistema, asignando un rol específico (Usuario Regular, Premium, VIP, o Administrador).

##### Parámetros de Solicitud

- ```
  id_tipo_de_categoria
  ```

   

  (Número entero, requerido): Tipo de categoría del usuario. Valores posibles:

  - `1` = Usuario Estándar
  - `2` = Usuario VIP
  - `3` = Administrador

- `nombre` (Cadena, requerido): Nombre del usuario.

- `apellido` (Cadena, requerido): Apellido del usuario.

- `nick` (Cadena, requerido): Nickname por el cual se distingue al usuario.

- `email` (Cadena, requerido): Correo electrónico del usuario.

- ```
  telefono
  ```

   

  (Objeto, requerido): Números de teléfono del usuario.

  - `casa` (Cadena, opcional): Teléfono de casa.
  - `movil` (Cadena, opcional): Teléfono móvil.

### Ejemplo de Uso

#### **Solicitud:**

```
const id_tipo_de_categoria = 2; // Usuario VIP
const nombre = "Juan";
const apellido = "Pérez";
const nick = "juan_p";
const email = "juan.perez@example.com";
const telefono = {
    casa: "555-1234",
    movil: "555-5678"
};

crearUsuario(id_tipo_de_categoria, nombre, apellido, nick, email, telefono);
```

#### **Respuesta Exitosa:**

- **Código:** `200 OK`
- **Cuerpo:**

```
{
  "success": true,
  "usuarioId": "60a77ae17c48d876d7f6e000",
  "message": "Usuario creado exitosamente."
}
```

### 7. Detalles de Usuario

### **Endpoints**

- **Nombre de la función:** `obtenerDetallesUsuario`
- **Endpoint:** `/api/clientes/{id}`
- **Método:** `GET`

### **Descripción**

Permite la consulta de información detallada sobre un usuario, incluyendo su rol y estado de tarjeta VIP. Este endpoint proporciona datos completos sobre un usuario específico a partir de su identificador único.

### **Parámetros de solicitud**

- URL Parameters:
  - `id` (string): El identificador único del usuario (ObjectId) en la base de datos.

### **Ejemplo de uso y respuesta esperada**

#### **Solicitud**

```
GET /api/clientes/64f8d4e7c2a5b7aefa0e9b4d
```

#### **Respuesta esperada**

**Código de estado:** 200 OK

**Cuerpo de la respuesta:**

```
{
  "_id": "64f8d4e7c2a5b7aefa0e9b4d",
  "codigo": "12345",
  "id_tipo_de_categoria": 3,
  "nombre": "Juan",
  "apellido": "Pérez",
  "nick": "juanp",
  "email": "juan.perez@example.com",
  "telefono": {
    "casa": "+123456789",
    "movil": "+987654321"
  },
  "rol": "Usuario Estandar",
  "esVIP": "True"
}
```

### 7. Actualizar el rol de un Usuario

### **Endpoints**

- **Nombre de la función:** `actualizarRolUsuario`
- **Endpoint:** `/actualizar-rol-usuario`
- **Método:** `PUT`

**Descripción**



Esta API permite actualizar el rol de un usuario en el sistema. Puedes cambiar el rol de un usuario, por ejemplo, de usuario estándar a VIP, o viceversa. El rol del usuario se actualiza en función del valor del nuevo rol proporcionado.

**Parámetros de Solicitud**



- **usuarioId** (string, requerido): ID del usuario cuya categoría se desea actualizar. Debe ser un `ObjectId` de MongoDB.

- nuevoRol

  (integer, requerido): Nuevo rol del usuario. Los valores válidos son:

  - `1` para Regular
  - `2` para Usuario Premium
  - `3` para Usuario VIP
  - `4` para Administrador

**Ejemplo de Uso**



**Solicitud:**

```
PUT /actualizar-rol-usuario Content-Type: application/json {    "usuarioId": "64f8d4e7c2a5b7aefa0e9b4d",    "nuevoRol": 3 } 
```

**Respuesta Esperada:**

- **Código de Estado:** `200 OK`
- **Cuerpo de Respuesta:**

```
{    "mensaje": "Rol actualizado correctamente." } 
```

**Ejemplo de Respuesta de Error**



Si el usuario no es encontrado, la respuesta será:

- **Código de Estado:** `404 Not Found`
- **Cuerpo de Respuesta:**

```
{    "error": "Usuario no encontrado." }
```
