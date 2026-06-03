\# Módulo Pedidos



\## Objetivo



Permitir registrar y realizar el seguimiento de los pedidos realizados por los clientes.



\## Datos generales del pedido



\* ID.

\* Cliente.

\* Teléfono.

\* Fecha de creación.

\* Fecha estimada de entrega.

\* Estado.

\* Seña.

\* Precio total.

\* Saldo pendiente.

\* Observaciones.



\## Productos del pedido



Un pedido puede contener uno o varios productos.



Cada producto debe registrar:



\* Producto.

\* Cantidad.

\* Medidas.

\* Observaciones.



\### Ejemplo



Pedido #125



Cliente: Juan Pérez



Productos:



\* Mesa (2m x 1m)

\* 6 Sillas

\* Aparador (1.5m)



\## Estados del pedido



\* Pendiente.

\* En fabricación.

\* Listo para retirar.

\* Entregado.

\* Cancelado.



\## Flujo del pedido



Pendiente

↓

En fabricación

↓

Listo para retirar

↓

Entregado



o



Pendiente

↓

Cancelado



\## Reglas



\* Todo pedido inicia en estado Pendiente.

\* Un pedido puede contener varios productos.

\* Un pedido puede registrar una seña.

\* El sistema debe calcular el saldo pendiente.

\* Un pedido entregado ya no puede modificarse.

\* Un pedido cancelado debe conservarse en el historial.



