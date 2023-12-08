import Header from "../../components/Layout/Header";
import ServiceCard from "../../components/ServiceCard";
export default function ServicePage() {
  const { cartItems } = useCart();
  return (
    <>
    <Header cartItems={cartItems} />
      <ServiceCard />
    </>
  );
}
