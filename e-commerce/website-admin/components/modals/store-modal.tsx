"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Create your own store and start selling"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Store Form
    </Modal>
  );
};
