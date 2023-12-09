# Endpoint: `PATCH /pacientes/`

Permite modificar la informacion de un paciente especifica con su ID 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único sobre la consulta que se desea recuperar.

## Ejemplo de Solicitud
```http
PATCH /paciente/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
    "message": "Successfull partial update"
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

  {


    "errno": 400,
    "error": "Bad Request",

  }