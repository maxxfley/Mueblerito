import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <h2>Mueblerito</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/pedidos">Pedidos</Link>
          </li>

          <li>
            <Link to="/stock">Stock</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}