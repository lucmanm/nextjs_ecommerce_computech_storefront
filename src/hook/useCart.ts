import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { productsSchema } from "@/zod.type";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

type TProduct = z.infer<typeof productsSchema>

type TCartProps = {
    items: TProduct[]
    addItem: (product: TProduct) => void
    removeItem: (id: string) => void
    removeAll: () => void
}
export const useCart = create(
    persist<TCartProps>((set, get) => ({
        items: [],
        addItem: (product: TProduct) => {
            const currentItems = get().items
            const checkExistingItems = currentItems.find((item) => item.id === product.id)
            if (checkExistingItems) {
                return toast({
                    description: "Product Already in Cart",
                    variant: "destructive"
                })
            }
            set({ items: [...get().items, product] })
            toast({ description: "Successfully Added to cart", variant: "success"})
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
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    }
), 
)