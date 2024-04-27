"use client";

import { ProductPreviewModal } from "@/components/modal/ProductPreviewModal";
import { useEffect, useState } from "react";


const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProductPreviewModal />
    </>
  );
};

export default ModalProvider;
