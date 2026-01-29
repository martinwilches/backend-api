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

Métodos principales

| Método | Ejemplo |
| -------- | --------- |
| GET | Obtener usuarios |
| POST | Creare usuario |
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