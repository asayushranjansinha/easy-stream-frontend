"use client";
import { useEffect, useState } from "react";
import UploadModal from "../modals/upload-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <UploadModal />
    </>
  );
}
