"use client";

import { useUploadModal } from "@/hooks/use-upload-modal";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { IconWrapper } from "./icon-wrapper";
import Logo from "./logo";
import SearchBar from "./search-bar";

const HeaderMain = () => {
  return (
    <div
      className={cn(
        "sticky top-0 inset-x-0 h-fit border-b bg-background"
      )}
    >
      <div className="container mx-auto py-2 flex gap-2 items-center justify-between">
        <Logo />
        <SearchBar />
        <HeaderNavigation />
      </div>
    </div>
  );
};

export default HeaderMain;

function HeaderNavigation() {
  const uploadModal = useUploadModal();
  return (
    <div className="hidden md:flex items-center gap-2">
      <Button onClick={uploadModal.onOpen}>
        <IconWrapper icon="material-symbols:upload-sharp" />
      </Button>
      <Button>
        <IconWrapper icon="iconamoon:profile-fill" />
      </Button>
    </div>
  );
}
