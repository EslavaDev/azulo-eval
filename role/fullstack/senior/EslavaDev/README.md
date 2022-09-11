# Azulo: test

## Instrucciones

1. ejecutar el sh **sh ./run_docker.sh**
2. entrar a directus en el siguiente link [DIRECTUS](http://0.0.0.0:8055)
3. ingresar correo **admin@test.com** pass **admin**

## Permisos Directus

1. ingresar a ajustes > roles y permisos
2. darle acceso a todas las colecciones y las colecciones de sistema, principalmente **Directus Collections, Directus Activity, Directus Migrations, Directus Relations**

## ENDPOINTS

1. GET all airports (http://0.0.0.0:3001/airport)
2. GET by id airports (http://0.0.0.0:3001/airport/1)
3. PUT update operator (http://0.0.0.0:3001/airport/operator/1) body ` { "operator": 10 }`
4. PUT update priority (http://0.0.0.0:3001/airport/priority/1) body ` { "priority": 10 }`
