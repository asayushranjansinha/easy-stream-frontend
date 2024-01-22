"use client";
import React from "react";
import { Modal } from "../ui/modal";
import { useUploadModal } from "@/hooks/use-upload-modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  return (
    <Modal isOpen={uploadModal.isOpen} onClose={uploadModal.onClose}>
      <div>Upload modal open</div>
    </Modal>
  );
};

export default UploadModal;
