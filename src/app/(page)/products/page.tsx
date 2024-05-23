import RenderDataComponent from "@/app/components/RenderDataComponent";
import { products } from "../../../entities/products";

function Products() {
  return <RenderDataComponent items={products} />;
}

export default Products;
