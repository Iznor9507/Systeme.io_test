import RenderDataComponent from "@/app/components/RenderDataComponent";
import { pricePlans } from "../../../entities/pricePlans";

function PricePlans() {
  return <RenderDataComponent items={pricePlans} />;
}

export default PricePlans;
