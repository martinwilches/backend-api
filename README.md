# Backend

## Fundamentos del backend

El backend se encarga de:

- Procesar lógica de negocio
- Manejar datos
- Validar reglas
- Comunicarse con la base de datos
- Responder a las solicitudes de los clientes

Ejemplo básico de Backend (WhatsApp):

- Recibir el mensaje
- Verificar que el usuario este autenticado
- Guardar el mensaje en base datos
- Decidir a quien enviarlo
- Notificar al receptor

### Arquitectura cliente-servidor

Flujo básico:

1. El cliente hace una solicitud
2. El servidor la recibe
3. El backend la procesa
4. El servidor responde

### Request/Response

#### Request

Incluye:

- Método (GET, POST, PUT, DELETE)
- Datos (JSON, formulario)
- Headers (autenticación, tipo de contenido)

#### Response

Incluye:

- Código de estado (200, 404, 500)
- Datos
- Mensaje

## HTTP

Idioma que hablan el frontend (cliente) y el backend (servidor).

### Método HTTP

Métodos principales

| Método | Ejemplo |
| -------- | --------- |
| GET | Obtener usuarios |
| POST | Crear usuario |
| PUT | Actualizar perfil |
| PATCH | Actualizar email |
| DELETE | Eliminar usuario |

Códigos de estado

- 2xx - OK
- 4xx - Client Error
- 5xx - Server Error

Códigos de estado claves

- 200 OK
- 201 CREATED
- 400 BAD REQUEST
- 401 UNAUTHENTICATED
- 403 UNAUTHORIZED
- 404 NOT FOUND
- 500 SERVER ERROR

### Headers y Cookies

#### Headers

Los headers son información extra que se incluye en cada petición (No son los datos principales).

Ejemplos:

- Tipo de contenido
- Token de autenticación
- Idioma
- Navegador

### Cookies (estado entre requests)

HTTP es stateless -> no recuerda nada entre requests.

Las cookies sirven para:

- Mantener login
- Recordar usuario
- Guardar preferencias

## REST

REST es un conjunto de principios para diseñar APIs

Una API REST

- Usa recursos, no acciones
- Usa métodos HTTP correctamente
- Devuelve códigos de estado correctos
- Es stateless
- Tiene URLs claros y predecibles

```http
GET     /users
POST    /users
GET     /users/1
PATCH   /users/1
DELETE  /users/1
```

> El verbo va en el método no en la URL

### Recursos y endpoints

Un recurso es un sustantivo:

- users
- products

> Siempre en plural sin verbos

Sub-recursos

```http
GET /users/1/orders
```

> Obtener las ordenes del usuario 1

### Versionado de API

Evita romper clientes cuando cambia la API

```http
/api/v1/users
/api/v2/users
```

> Se crea /v2 se mantiene /v1 cuando algo falla

### Errores coherentes

Error REST correcto

```js
res.status({
    error: {
        message: 'Usuario no encontrado',
        code: 'USER_NOT_FOUND'
    }
})
```

## Arquitectura del proyecto

Cada parte del código debe tener una sola responsabilidad

### Capas de una API Backend

| Capa | Responsabilidad |
| ---- | --------------- |
| Controller | HTTP (req, res) |
| Service | Lógica de negocio | 
| Repository | Acceso a datos | 