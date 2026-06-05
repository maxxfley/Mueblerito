import type { Pedido } from "../models/Pedido";

export const mockPedidos: Pedido[] = [
  {
    id: 1,
    cliente: "Juan Perez",
    telefono: "3704123456",
    fecha: "2026-06-01",
    estado: "Pendiente",
    sena: 50000,
    total: 250000,
    saldoPendiente: 200000,

    productos: [
      {
        id: 1,
        nombre: "Mesa comedor",
        medidas: "180x90",
        cantidad: 1,
        precio: 250000,
      },
    ],
  },

  {
    id: 2,
    cliente: "Carlos Ruiz",
    telefono: "3704555555",
    fecha: "2026-06-03",
    estado: "Fabricacion",
    sena: 100000,
    total: 400000,
    saldoPendiente: 300000,

    productos: [
      {
        id: 2,
        nombre: "Juego cocina",
        medidas: "160x80",
        cantidad: 1,
        precio: 400000,
      },
    ],
  },

  {
    id: 3,
    cliente: "Ana Gomez",
    telefono: "3704999999",
    fecha: "2026-06-04",
    estado: "Listo",
    sena: 200000,
    total: 350000,
    saldoPendiente: 150000,

    productos: [
      {
        id: 3,
        nombre: "Mesa ratona",
        medidas: "80x80",
        cantidad: 1,
        precio: 350000,
      },
    ],
  },
];