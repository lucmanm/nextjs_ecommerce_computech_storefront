import { productsSchema } from "@/lib/zodDataType";
import { z } from "zod";
import { create } from "zustand";

type TProduct = z.infer<typeof productsSchema>

type TProductModalStore = {
    isOpen: boolean;
    productData?: TProduct,
    onPreview: (productData: TProduct) => void
    onClose: () => void
}

const usePreviewModal = create<TProductModalStore>((set) => ({
    isOpen: false,
    productData: undefined,
    onPreview: (productData: TProduct) => set({ isOpen: true, productData }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal