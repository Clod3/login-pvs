#  Ejercicio Técnico — PVS

Este proyecto contiene pruebas automáticas desarrolladas con:

- Lenguaje: TypeScript
- Framework de testing: Playwright
- Test Runner: Playwright Test
- Gestor de dependencias: npm

---

#  ¿Por qué elegí este stack?
Elegí Playwright con TypeScript, porqué Playwright es un framework moderno, estable, y con actualizaciones constante, y me permite automatizar multiples navegadores con una sola configuración, además de que tiene su propio test runner, lo que simplifica la configuración del proyecto.

Su configuración sobre ejecuciones de test está muy simplificada, ya que se puede configurar desde el archivo playwright.config.ts cosas como: si ejecutar en paralelo, cuantos workers, cuantos retries debería hacer en caso de fallo, que navegadores utilizar, permite ejecutar tipos específicos de pruebas utilizando tags como @smoke o @regression por ejemplo.

Typescript lo elegí por ser un lenguaje de tipo tipado, esto reduce la cantidadad de errores al momento del desarrollo, y hace que el flujo de trabajo sea mas simplificado

Utilicé npm como gestor de dependencias ya que viene incluido con node.js y permite administrar de manera simple las librerias del proyecto, facilita la instalación de las mismas, el control de versiones y la ejecución de scripts

Agregué un reporter JUnit en formato JUnit(results.xml) para facilitar la trazabilidad de los test en pipelines de CI/CD y permitir la integración con herramientas de monitoreo y reporting.

# Como levantar el proyecto


## Instalar Node.js

Ir a:

https://nodejs.org

Descargar la ultima versión  e instalar.

Verificar instalación en la terminal:

node -v
npm -v

## Instalar dependencias
Desde la terminal ingresar:

**npm install**

## Instalar navegadores de PW
Desde la terminal ingresar:

**npx playwright install**

## Instalar dotenv
Desde la terminal ingresar:
**npm install dotenv**

## Ejecutar la automatización

Desde la terminal:
**npx playwright test**

(En caso de que se requiera ejecutar los test)