export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Pedidos Pendientes</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>En Fabricación</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Listos para Retirar</h3>
          <p>3</p>
        </div>
      </div>
    </>
  );
}