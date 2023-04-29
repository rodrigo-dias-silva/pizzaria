import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        name: name,
        table: table,
      },
    });

    return order;
  }
}

export { CreateOrderService };
