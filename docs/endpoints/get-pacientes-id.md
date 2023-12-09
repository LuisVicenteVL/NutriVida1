# Endpoint: `GET /pacientes/{id}/`

Permite obtener información sobre los pacientes relacionados a un tema mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único sobre la consulta que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /pacientes/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_paciente": 1,
    "fecha_consulta": "2023-01-10T00:00:00.000Z",
  }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }