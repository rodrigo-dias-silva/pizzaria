import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute(props: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: props.name,
        price: props.price,
        description: props.description,
        banner: props.banner,
        category_id: props.category_id,
      },
    });

    return product;
  }
}

export { CreateProductService };
