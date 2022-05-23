# Kraken_Cypress_Ghost
Séptima semana de la materia Pruebas Automatizadas de Software, en la que se realizaran pruebas sobre las versiones de Ghost latest en Docker con la herramienta Cypress implementando las estrategias para validar datos en los formularios de la aplicación y el manejo de entradas inválidas, haciendo uso de mecanismos para generar datos(Mockaroo, Faker).
## 10 defectos por manejo de datos inválidos en el sistema de  registro de incidencia del grupo
Estas se encuentran en los issues de este repositorio.
## Descripción de las estrategias usadas
Por favor hacer clic en el siguiente enlace https://github.com/ChristianBorrasTorres/Kraken_Cypress_Ghost/wiki/Descripcion-de-las-estrategias-Utilizadas, sin embargo, si hay algún problema por favor remitirse a la Wiki de este repositorio, alli se podrá encontrar la descripción de las estrategias usadas.
## Cypress
### Instrucciones para ejecutar los escenarios en Cypress
- Hacer clic en el siguiente link buscar su sistema operativo e instalar Docker: https://docs.docker.com/desktop/mac/install/
- Luego desde una terminal correr el comando docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_latest ghost:latest.
- Clonar este repositorio en una carpeta vacía.
- Abra una terminal y ejecute el comando npm install -g cypress, si aún no lo tiene instalado globalmente en su computador.
- En el mismo terminal ejecutar npm install, (en caso de no funcionar el xpath por favor correr el comando **npm i cypress-xpath** o **npm install -D cypress-xpath**; en caso de no funcionar faker correr el comando **npm install @faker-js/faker --save-dev**), realizar estos comandos previa ejecución u otro paso.
- En el archivo **cypress.json** cambiar el usuario y contraseña del GHOST local. Adicionalmente revisar el puerto sobre el cual se tiene desplegada la aplicación de Ghost, para el presente caso es el puerto 3001:
![cypressjson](https://user-images.githubusercontent.com/98656753/169742678-d7fa5380-51c0-4e31-aef3-d1c2455c8fff.png)
- Ejecute en la terminal desde la carpeta Kraken_Cypress_Ghost el comando cypress open
- Este comando le permitirá visualizar la interfaz gráfica de Cypress, así como las pruebas del repositorio.
- En el caso que desee correr todas las pruebas al mismo tiempo se sugiere eliminar las siguientes carpetas en cypress/integration/: escenariosModificadosV4.10.0, paginas, post, tags.
- En el dado caso que Cypress no permita correr todas las pruebas, (teniendo en cuenta la cantidad), se sugiere correrlas individualmente. Estas se encuentran en las siguientes carpetas:
![cypresscarpetas](https://user-images.githubusercontent.com/98656753/169743618-49109541-ad84-4c57-b093-1cb9c6340e06.png)
Y son por ejemplo: ajustesIntegraciones.spec.js, creacionPagina.spec.js, etc...

*Tener en cuenta que algunas de las pruebas generan bugs, por lo que puede haber errores en Cypress, estas se encuentran en el registro de incidencias del repositorio (Issues).

