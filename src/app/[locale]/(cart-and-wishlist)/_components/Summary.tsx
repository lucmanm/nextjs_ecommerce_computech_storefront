import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hook/createPersistedHook";

import { cn } from "@/lib/utils";

export const Summary = ({ className }: { className?: string }) => {
  const cartItems = useCart((state) => state.items);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {};

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-white px-4 shadow-sm ",
        className,
      )}
    >
      <div className="bg-white  py-2 text-lg font-bold ">Order Summary</div>
      <Separator />
      <div className="space-y-4 text-lg font-bold">
        <span>Total</span>
        {/* <Currency value={totalPrice} /> */}

        <Button
          onClick={onCheckout}
          className="w-full rounded-full py-2 text-xl"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
