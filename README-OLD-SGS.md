# Pasos para correr el sistema de SGS Viejo

## Pre requisitos

1. Endpoint checkpoint VPN configurada con los ajustes de Santillana
2. Aplicacion de Escritorio Remoto
3. Credenciales de acceso a una maquina Santillana

## Pasos de configuracion

1. Ubicar proyecto de "sgs", normalmente se encuentra dentro de la maquina en local C:/ en un directorio asociado a Git.
   Ej: C:/Git/sgs
2. Abrir el archivo SanWF.build con el editor de texto de su preferencia
3. Configurar la BD del entorno que se necesita en el archivo build en la configuracion local ubicada en la linea 123
   del archivo aprox.

<!--config.local-->

    <target name="set.config.local">
    	<property name="config.targetName" value="Local" />

    	<!-- BD -->
    	<property name="config.DataBasePresupuesto" value="Presupuesto" />
    	<property name="config.DataBaseSeguridadWF" value="SeguridadWF" />
    	<property name="config.ServerDb" value="${SGS.BD.Testing}" />
    	<property name="config.PasswordDb" value="fwnas" />
    	<property name="config.ServerDbInterfaces" value="${SGS.BD.Testing}" />
    	<property name="config.UserDbInterfaces" value="sanwf" />
    	<property name="config.PasswordDbInterfaces" value="fwnas" />

Se debe ajustar el nombre de ServerDB y ServerDbInterfaces. Ej: Testing, Desarrollo, Integracion o Preproduccion

4. Despues de guardar los ajustes del archivo build, se debe abrir la aplicacion "Powershell" y se debe ubicar la
   terminal de powershell el proyecto sgs en la misma ruta del paso 1.

5. Ejecutar el comando ---> .\build.bat config.local <---- el cual despues de unos segundos mostrara el mensaje que la
   configuracion se realizo con exito en el entorno de la bd configurada. Ej: [echo] Configuración aplicada con éxito!
   [echo] Entorno 'Local', BD: SARSQLDESA02\TESTING

## Levantamiento

1. Abrir Visual Studio y cargar la solución "SanWF.sln" en caso de que se encuentre entre las recientes en Visual Studio
   o sino buscar el archivo "SanWF.sln" en el proyecto de "sgs" que se encuentra en la ruta: "/sgs\SanWF\SanWF"

2. Para levantar la app le puede dar al boton de play que sale en la parte superior de Visual en caso de estar ya
   configurado para levantar el proyecto. Si no debe ir a la parte de explorador del proyecto y ubicar el directorio
   Solucion SanWF/SanWF.inbox/InboxTareas, parado ahi, se le da a click derecho y se marca la opcion de configurar como
   proyecto de inicio/arranque y ya con eso se le puede dar a play como se especifico en primera instancia.

3. El proyecto debe levantar de forma automatica en el puerto localhost:2074
