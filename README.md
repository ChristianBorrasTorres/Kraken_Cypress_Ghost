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

### Estrategia para toma de screenshots
Para Cypress la estrategia utilizada fue tomar los screenshots al finalizar cada paso, si bien fue una estrategia repetitiva fue la que más se ajustó a las necesidades:

![image](https://user-images.githubusercontent.com/98660561/168518672-7ad6bb35-ec72-4fc6-8525-0822572ecccc.png)

## Kraken
### Instrucciones para ejecutar los escenarios en Kraken
- Clonar este repositorio en una carpeta vacía.
- Ejecutar el comando npm init para que la carpeta node_modules se genere.
- Cambiar en el archivo properties.json tanto el nombre de usuario USERNAME como la contraseña PASSWORD por la del GHOST local. Adicionalmente verificar el puerto en el cual se tiene desplegada la versión de Ghost y editarlo en el archivo en cuestión de ser necesario. Para el caso se tenía la versión 4.10.0 desplegada en el puerto 3001:

![capturaPuertoConfig](https://user-images.githubusercontent.com/98660561/168514208-1a1b04fd-49af-4f68-9132-5e1b17775bfc.PNG)

- En el directorio _features_ se tienen diferentes archivos que contienen los escenarios agrupados de acuerdo a cada funcionalidad tanto para la versión 4.10.0 como la versión 4.47.2, las correspondientes a la primera se distinguen con una terminación en su nombramiento así: _escenariosXXXXModificadosV410_, respecto a la segunda se tiene el siguiente nombramiento: _escenariosXXXX_.
![CapturaFeatures](https://user-images.githubusercontent.com/98660561/168515238-35913a23-c813-4a6a-961e-c4f7ccf3535a.PNG)
- Como se evidenció en el ítem anterior se tienen separados los archivos debido a que la herramienta no permitió la ejecución de múltiples _features_, por lo que para ejecutar un archivo con los escenarios se debe renombrar el mismo colocando al final _.feature_, cabe señalar que sólo puede haber un archivo con éste nombramiento:

![image](https://user-images.githubusercontent.com/98660561/168515850-cfa19e8b-fe03-4fa8-a06b-96529083ad11.png)

Se puede apreciar en la imagen anterior que el único archivo con el nombramiento _.feature_ es el llamado _escenariosPageYTagModificadosV410.feature_ por lo al ejecutarse la herramienta se correrán los escenarios contenidos en éste. Debe repetirse el procedimiento con cada uno de los archivos.
- Los 5 escenarios modificados para ser ejecutados en la versión 4.10.0 están distribuidos en dos archivos: el archivo llamado _escenariosPageYTagModificadosV410.feature_ contiene los escenarios de Eliminación de página, Creación, asignación y eliminación de Tag. El archivo llamado _escenariosPostModificadosV410_ contiene los escenarios de Creación y publicación de post y el de programar publicación de post. Dicha separación se realizó porque al tener los escenarios seleccionados en el mismo archivo las pruebas no se ejecutaban con éxito, caso contrario al tenerlos separados.
- Tener instalado ADB, o tenerlo en el path del computador.
- - Ejecutar el comando npx kraken-node run.
*Por favor previa ejecución de las pruebas ir al archivo steps.js, de la carpeta web de kraken, y cambiar en el paso "I enter my profile" el nombre del usuario por su usuario, tal y como se ve a continuación:
![cambiar](https://user-images.githubusercontent.com/98656753/168521907-b1a2c366-1c2d-464a-96bf-7a8e56488711.png)
### Estrategia para toma de screenshots
Para la herramienta en cuestión no fue necesario realizar ajustes pues de manera automática toma los screenshots luego de cada paso, lo único que se hizo fue la selección de los screenshots de tal manera que tuvieran correspondencia con los tomados con Cypress  y así tener una comparación coherente.

@@ -45,37 +49,17 @@ Para la herramienta en cuestión no fue necesario realizar ajustes pues de maner

![image](https://user-images.githubusercontent.com/98660561/168518369-6c034c54-885a-4d54-b3f2-01e292809e24.png)

## Resemble JS
Los archivos asociados al desarrollo y documentación de las pruebas de regresión visual se encuentran alojados en el directorio llamado _/regression_test_resemble_.

![image](https://user-images.githubusercontent.com/98660561/168520776-c9f3ff20-d74a-4dff-8f92-bacca0477240.png)


Para la revisión de los reportes generados de cada prueba se debe ingresar al directorio mencionado anteriormente, luego se muestran directorios con cada uno de los escenarios seleccionados:

![image](https://user-images.githubusercontent.com/98660561/168520898-9e984789-ec2c-4fc0-9d21-8c77c7b14ab0.png)

Dentro de cada directorio a su vez se encuentran los archivos con el código fuente junto con los reportes. Para acceder a los reportes se debe ingresar a la carpeta _/results_ y allí seleccionar el archivo _report.html_.

![image](https://user-images.githubusercontent.com/98660561/168521887-14181335-0ae9-4c65-accc-7b05e7a8e5a6.png)

### Estrategia para prueba de regresión visual
Para la realización de las pruebas de regresion visual, se procedio a:
 - Seleccionar 5 features que puedieran ser sensibles a tener cambios entre una versión y otra.
 - Ubicar las capturas de pantalla de cada feature, separadas en una carpeta por cada feature dentro de la cual habra una carpeta "before" y una carpeta "after" dentro de las cuales se ubicaran cada una de las capturas dependiendo de la versión a la que pertenezca.
 - Instalar los paquetes de resembleJS usando npm.
 - Desarrollar el script que a traves del uso de resembleJS permita compara dos capturas de pantalla correspondientes a una misma feature, generando asi una imagen que se alojara en una nueva carpeta denominada "compare", en la cual se mostrara la diferencia entre una versión y otra, asi como tambien un resumen escrito donde se muestra porcentajes de variación a nivel de dimensiones.
