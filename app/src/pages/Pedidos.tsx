import { mockPedidos } from "../data/mockPedidos";

export default function Pedidos() {
  return (
    <>
      <h1>Pedidos</h1>

      <table className="pedidos-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Saldo</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {mockPedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.cliente}</td>

              <td>
                <span
                  className={`estado estado-${pedido.estado}`}
                >
                  {pedido.estado}
                </span>
              </td>

              <td>
                $
                {pedido.total.toLocaleString()}
              </td>

              <td>
                $
                {pedido.saldoPendiente.toLocaleString()}
              </td>

              <td>{pedido.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}