import { useState } from "react";
import { mockPedidos } from "../data/mockPedidos";
import { catalogo } from "../data/catalogo";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState(mockPedidos);
  const [cliente, setCliente] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sena, setSena] = useState("");
  const [productos, setProductos] = useState([
  {
    tipo: "Mesa",
    cantidad: 1,
  },
]);

  function crearPedido() {
    if (!cliente.trim()) return;

    const montoSena = Number(sena) || 0;

    const nuevoPedido = {
      id: Date.now(),
      cliente,
      telefono,
      fecha: new Date().toISOString().split("T")[0],
      estado: "Pendiente" as const,
      sena: montoSena,
      total: montoSena,
      saldoPendiente: 0,
      productos: [],
    };

    setPedidos([nuevoPedido, ...pedidos]);

    setCliente("");
    setTelefono("");
    setSena("");
  }
  function agregarProducto() {
    setProductos([
      ...productos,
      {
        tipo: "Mesa",
        cantidad: 1,
      },
    ]);
  }
  const total = productos.reduce((acumulado, producto) => {
  const item = catalogo.find((p) => p.nombre === producto.tipo);
    if (!item) return acumulado; 
    return (acumulado + item.precio * producto.cantidad);
  }, 0);

  const saldo = total - (Number(sena) || 0);
  return (
    <>
      <h1>Pedidos</h1>

        <div className="pedido-form">
          <input
            type="text"
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />

          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          {productos.map((producto, index) => (
            <div key={index} className="producto-linea">
              <button
              type="button"
              onClick={() => {
                if (productos.length === 1) return;
              
                setProductos(
                  productos.filter((_, i) => i !== index)
                );
              }}>❌
            </button>
              <select
                value={producto.tipo}
                onChange={(e) => {
                  const copia = [...productos];
                
                  copia[index].tipo =
                    e.target.value;
                
                  setProductos(copia);
                }}
              >
                {catalogo.map((item) => (
                  <option
                    key={item.nombre}
                    value={item.nombre}
                  >
                    {item.nombre}
                  </option>
                ))}
              </select>
              
              <input
                type="number"
                min="1"
                value={producto.cantidad}
                onChange={(e) => {
                  const copia = [...productos];
                
                  copia[index].cantidad =
                    Number(e.target.value);
                
                  setProductos(copia);
                }}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={agregarProducto}
          >
            + Agregar producto
          </button>
        
          <input
            type="number"
            placeholder="Seña"
            value={sena}
            onChange={(e) => setSena(e.target.value)}
          />

          <div className="resumen-pedido">
            <strong>
              Total: ${total.toLocaleString()}
            </strong>
        
            <strong>
              Saldo: ${saldo.toLocaleString()}
            </strong>
          </div>
        
          <button onClick={crearPedido}>
            Agregar Pedido
          </button>
        </div>

      <table className="pedidos-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Seña</th>
            <th>Total</th>
            <th>Saldo</th>
            <th>Fecha</th>
            <th>Detalle</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido) => (
          <tr key={pedido.id}>
              <td>{pedido.cliente}</td>
            
              <td>
                <span className={`estado estado-${pedido.estado}`}>
                  {pedido.estado}
                </span>
              </td>
            
              <td>
                ${pedido.sena.toLocaleString()}
              </td>
            
              <td>
                ${pedido.total.toLocaleString()}
              </td>
            
              <td>
                ${pedido.saldoPendiente.toLocaleString()}
              </td>
            
              <td>{pedido.fecha}</td>
              <td>
                <details>
                  <summary>Ver más</summary>

                  <ul>
                    {pedido.productos.map((producto) => (
                      <li key={producto.id}>
                        {producto.nombre} x{producto.cantidad}
                        {" - "}
                        {producto.medidas}
                      </li>
                    ))}
                  </ul>
                  
                  <p>
                    Tel: {pedido.telefono}
                  </p>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}