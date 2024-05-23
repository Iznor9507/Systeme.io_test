import RenderDataComponent from "@/components/RenderDataComponent";
import { products } from "../../../entities/products";

function Products() {
  return <RenderDataComponent items={products} />;
}

export default Products;
