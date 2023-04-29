interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute(props: ProductRequest) {
    return { ok: true };
  }
}

export { CreateProductService };
