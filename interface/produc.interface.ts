interface AboutUs {
  title: string;
  description: string;
  image: string;
  background: string;
  ticket: string;
}
interface benefits {
  title: string;
  benefits: { icon: string; title: string; description: string }[];
}
interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
}
interface ProcessProduct {
  title: string;
  description: string;
  steps: { title: string; description: string; icon: string }[];
}
export interface Products {
  name: string;
  aboutus: AboutUs;
  benefits: benefits;
  product: Product;
  process: ProcessProduct;
}
