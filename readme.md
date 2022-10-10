# TO-DO

## Autorización

Para la parte de autorización habría que crear un registro y login real de usuarios. Para cada usuario se generaría un token con expiración y un "refresh token" para ir actualizándolo.

Actualmente simplemente se genera un token para ser utilizado como `Bearer Token` cuando se llama al endpoint `/login`.

## Testing

En la parte de testing crearía tests unitarios para probar los diferentes endpoints utilizando Jest Y Supertest, probando diferentes inputs y variables. Para ello habría que hacer un "mock" de la base de datos para no afectar al entorno real, introducir datos de prueba y resetando la base de datos después de cada prueba.

## Paginación

En el endpoing `/products` añadiría una paginación de los productos para no saturar las respuestas. Esto se haría utilizando las opciones `skip` y `limit` de MongoDB.