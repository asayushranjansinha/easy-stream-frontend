"use client";

import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-2 bg-background rounded-md px-3">
      <Input type="search" placeholder="Search" className="py-0" />
      <Button>
        <Icon icon="material-symbols:search" height="24" width="24" />
      </Button>
    </div>
  );
};

export default SearchBar;
