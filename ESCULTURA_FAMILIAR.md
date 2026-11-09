# Escultura familiar · enfoque sistémico

Herramienta independiente de Cartas Proyectivas, disponible en:
https://armandmu.github.io/cartas-proyectivas/escultura-familiar/

## Acceso

- El **psicólogo** entra con la misma cuenta que utiliza en Cartas Proyectivas. Al crear sesión, recibe un código y un enlace para el paciente.
- El **paciente** entra con ese código o enlace. Puede mover, añadir, orientar y nombrar figuras mientras el psicólogo no haya bloqueado la interacción.
- **Cursores compartidos**: cada participante ve el cursor del otro encima del tablero, con su rol, y puede señalar mediante clic.

## Uso

- 18 muñecos prediseñados. Los tamaños y colores son **fijos** y no admiten edición. Hay figuras pequeñas, medianas y grandes.
- Dos vistas compartidas: **Mi familia hoy** y **Cómo me gustaría que fuera**. Es posible copiar la primera composición a la segunda.
- Cada figura se añade una vez por vista, se arrastra a su posición y se puede orientar a izquierda, frente o derecha. Se pueden añadir etiquetas como «yo», «madre», «abuela» o seudónimos.
- El psicólogo puede **bloquear al paciente**, vaciar una escena, deshacer cambios y **exportar la imagen a SVG**.
- Evitar incluir datos identificativos de pacientes. Los colores, la posición y el tamaño no se interpretan de forma automática: su significado se explora con cada persona.

## Implementación

La herramienta comparte el proveedor de autenticación y el mecanismo de sesión ya utilizados por Cartas Proyectivas (RPC `cope_create_session`, `cope_join_session`, `cope_update_board`, `cope_close_session`). Se distingue por `board.kind = 'family-sculpture'`. La sincronización de posiciones usa cambios de PostgreSQL y los cursores usan Realtime Broadcast.

No necesita crear nuevas tablas, ni modifica la aplicación original de cartas. La entrada de la nueva herramienta se carga mediante importación dinámica para no iniciar dos clientes Supabase a la vez.

**Validaciones pendientes antes del uso clínico**: comprobar el inicio de sesión, permisos de funciones RPC y reglas RLS en el proyecto Supabase original; verificar el despliegue de GitHub Pages; y probar simultáneamente un navegador profesional y uno de paciente. No introducir datos personales reales antes de completar estas pruebas.
