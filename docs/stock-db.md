# \# Diseño inicial de la base de datos

# 

# \## Tabla productos

# 

# \* id

# \* nombre

# \* categoria

# \* cantidad\_actual

# \* unidad\_medida

# \* medidas

# \* descripcion

# \* precio\_compra

# \* precio\_venta

# \* ubicacion\_id

# 

# \## Tabla ubicaciones

# 

# \* id

# \* nombre

# \* tipo

# 

# \## Tabla movimientos\_stock

# 

# \* id

# \* producto\_id

# \* tipo\_movimiento

# \* cantidad

# \* fecha

# \* ubicacion\_id

# \* detalles

# 

# \## Tabla pedidos

# 

# \* id

# \* cliente

# \* telefono

# \* fecha\_creacion

# \* fecha\_estimada

# \* estado

# \* sena

# \* precio\_total

# \* saldo\_pendiente

# \* observaciones

# 

# \## Tabla pedido\_detalles

# 

# \* id

# \* pedido\_id

# \* producto\_id

# \* cantidad

# \* medidas

# \* observaciones

# 

