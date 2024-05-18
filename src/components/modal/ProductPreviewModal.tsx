"use client";
import { ImagesPreview } from "@/app/[locale]/[product]/components/ImagesPreview";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import usePreviewModal from "@/hook/usePreviewModal";

export function ProductPreviewModal() {
  const { isOpen, productData, onClose } = usePreviewModal((state) => state);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col lg:flex-row lg:justify-between">
        <ImagesPreview className="" />
        <div className="flex grow-0 flex-col">
          <p className="mb-2 line-clamp-3 font-semibold">
            {productData?.shortDescriptionEn}
          </p>
          <span>Model:{productData?.model}</span>
          <span>Stock:{productData?.stock}</span>
          <Button type="submit" className="bg-blue-950 hover:bg-blue-600">
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
