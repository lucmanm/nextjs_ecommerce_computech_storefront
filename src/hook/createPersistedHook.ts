
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { productsSchema } from "@/lib/zodDataType";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

type TProduct = z.infer<typeof productsSchema>

type TProps = {
    items: TProduct[]
    addItem: (product: TProduct) => void
    removeItem: (id: string) => void
    removeAll: () => void
}
const createPersistedHook = (name: string) => create(
    persist<TProps>((set, get) => ({
        items: [],
        addItem: (product: TProduct) => {
            const currentItems = get().items
            const checkExistingItems = currentItems.find((item) => item.id === product.id)
            if (checkExistingItems) {
                return toast({
                    description: "Product Already exist",
                    variant: "destructive"
                })
            }
            set({ items: [...get().items, product] })
            toast({ description: `Successfully added ${name}`, variant: "success" })
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter(item => item.id !== id)] })
            toast({ description: "Item Successfully Removed", variant: "success" })
        },
        removeAll: () => {
            set({ items: [] })
        }
    }),
        {
            name: `${name}-storage`,
            storage: createJSONStorage(() => localStorage)
        }
    ),
)

export const useCart = createPersistedHook("cart")
export const useWishlist = createPersistedHook("wishlist")
