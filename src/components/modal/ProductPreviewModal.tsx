import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import usePreviewModal from "@/hook/usePreviewModal";

export function ProductPreviewModal() {
  const { isOpen, productData, onClose } = usePreviewModal((state) => state);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col sm:max-w-[425px]">
        <div className="flex flex-col">
          <p className="font-semibold mb-2">{productData?.shortDescriptionEn}</p>
          <span>Model:{productData?.model}</span>
          <span>SKU:{productData?.stock}</span>
        </div>
        <Button type="submit" className="bg-blue-950 hover:bg-blue-600">Add to cart</Button>
      </DialogContent>
    </Dialog>
  );
}
