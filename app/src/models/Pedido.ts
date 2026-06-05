export interface ProductoPedido {
  id: number;
  nombre: string;
  medidas: string;
  cantidad: number;
  precio: number;
}

export interface Pedido {
  id: number;

  cliente: string;
  telefono: string;

  fecha: string;

  estado:
    | "Pendiente"
    | "Fabricacion"
    | "Listo"
    | "Entregado";

  sena: number;
  total: number;
  saldoPendiente: number;

  productos: ProductoPedido[];
}