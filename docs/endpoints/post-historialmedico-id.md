# Endpoint: `POST /historialmedico`

Permite publicar otro historial medico

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
POST /http://localhost:3100/historialmedico
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  {
    "status": 201,
    "message": "Created"
}
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
  }