"use client"
import { useCart } from "@/hook/createPersistedHook";
import { Container } from "@/components/Container";
import { Summary } from "../_components/Summary";
import { ProductCard } from "../_components/ProductCard";

const CartPage = () => {
  const cart = useCart(state => state.items);
  return (
    <Container title="Shopping Cart">
      {cart.length === 0 ? (
        <div className="w-full border bg-white p-4 text-center text-xl shadow-sm">
          No added item
        </div>
      ) : (
        <section className="flex max-sm:flex-col gap-2 md:gap-4 md:flex-wrap">
          <div className="flex flex-1 flex-col gap-2 md:gap-y-4">
            {cart.map((data, index) => (
              <ProductCard key={index} item={data} />
            ))}
          </div>
          <Summary className="md:w-1/3" />
        </section>
      )}
    </Container>
  );
};

export default CartPage;
