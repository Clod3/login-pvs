# Test cases login herokuapp


## Casos positivos

## TC-1 - Usuario se logea exitosamente a la aplicación

**Precondición:** Usuario ya registrado y activo.
**Acción:**
1. Ingresar username válido.
2. Ingresar password válido.
3. Hacer click en el botón Login.
**Resultado Esperado:** El usuario debería ingresar exitosamente a la aplicación.

## TC-2 - Login exitoso ingresando con tecla enter 

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Ingresar username válido.
2. Ingresar password válido.
3. Presionar la tecla "Enter" estando situado en el campo password.
**Resultado Esperado:** El usuario debería ingresar exitosamente a la aplicación.

## TC-3 - Usuario ya autenticado debería poder deslogearse

**Precondición:** Estar ya autenticado con un usuario activo
**Acción:**
1. El usuario hace click en el botón Logout
**Resultado Esperado:** El sistema deslogea al usuario y vuelve a la pantalla de Log in.

## Casos Negativos

## TC-4 - Usuario no se debería poder ingresar a la aplicación ingresando un username invalido por uso de mayúsculas/minúsculas (case sensitive)

**Precondición:** Usuario ya registrado y activo.
**Acción:**
1. Ingresar username cambiando una mayúscula o minúscula del username real activo.
2. Ingresar password válido.
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.

## TC-5 - Usuario no se debería poder ingresar a la aplicación ingresando un password invalido por uso de mayúsculas/minúsculas (case sensitive)

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Ingresar username válido.
2. Ingresar password cambiando una mayúscula o minúscula del password real activo.
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.

## TC-6 - Usuario no se debería poder ingresar a la aplicación si el usuario ingresa username y password inválidos

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Ingresar username inválido.
2. Ingresar password inválido.
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.

## TC-7 - Usuario no se debería poder ingresar a la aplicación si el usuario deja el campo username vacio

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Dejar el campo username vacio
2. Ingresar password válido.
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.

## TC-8 - Usuario no se debería poder ingresar a la aplicación si el usuario deja el campo password vacio

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Ingresar username válido.
2. Dejar el campo password vacio
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.

## TC-9 - Usuario no se debería poder ingresar a la aplicación si el usuario deja el campo password y username vacio

**Precondición:** Usuario ya registrado y activo
**Acción:**
1. Dejar el campo username vacio
2. Dejar el campo password vacio
3. Hacer click en el botón Login.
**Resultado Esperado:** El sistema rechaza la autenticación, y muestra un mensaje de credenciales inválidas.



# Casos seleccionados para automatización

(En los casos TC-04 y TC-05, la validación negativa se realiza alterando únicamente la capitalización (mayúsculas/minúsculas) del username o password registrado.  
Esto permite verificar de manera precisa la sensibilidad a mayúsculas (case-sensitive) del sistema sin introducir múltiples variaciones innecesarias en los datos de prueba)
Respecto a los casos seleccionados a automatizar, tomé como referencia un hipotetico caso donde se deba ejecutar smoke test (o sanity) para una salida rapida y que de primera mano se pueda validar que la aplicación funciona correctamente, tomé el caso mas representativo (AKA happy path TC-1/2), y los casos negativos mas representativos de los mismos, ya que se valida realmente que cada campo tiene su propia validación, y también su doble validación. Asi también se validan los diferentes mensajes, ya sean de error por username incorrecto, password incorrecto, mensaje de login y logout.

## TC-1 - Usuario se logea exitosamente a la aplicación
## TC-3 - Usuario ya autenticado debería poder deslogearse
## TC-4 - No se debería poder ingresar a la aplicación ingresando un username invalido por uso de mayúsculas/minúsculas (case sensitive)
## TC-5 - No se debería poder ingresar a la aplicación ingresando un password invalido por uso de mayúsculas/minúsculas (case sensitive)
## TC-6 - No se debería poder ingresar a la aplicación si el usuario ingresa username y password inválidos

