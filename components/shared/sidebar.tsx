import generateNavigationItems, { INavigation } from "@/data";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconWrapper } from "./icon-wrapper";

const SidebarMain = () => {
  const NAVIGATION_ITEMS = generateNavigationItems("lksd;jfa");

  return (
    <div className="hidden md:block fixed top-16 w-60 h-full border-r p-4 overflow-y-auto">
      <Accordion type="single" collapsible className="w-full">
        {NAVIGATION_ITEMS.map((item, idx) => (
          <SidebarMenuItems key={idx} item={item} />
        ))}
      </Accordion>
      <div className="mt-4 flex flex-col items-center">
        <span>Made with</span>
        <IconWrapper
          icon="ri:heart-fill"
          color="red"
        />
        <span>By Ayush Ranjan</span>
      </div>
    </div>
  );
};

export default SidebarMain;

interface SidebarMenuItemsProps {
  item: INavigation;
}
function SidebarMenuItems({ item }: SidebarMenuItemsProps) {
  switch (item.type) {
    case "dropdown":
      return (
        <AccordionItem value={item.name}>
          <AccordionTrigger>
            <div className="w-full flex items-center gap-4">
              <IconWrapper icon={item.icon} height="28" width="28" />
              <span>{item.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-2 ml-8">
              {item.subItems?.map((subitem) => (
                <li className="w-full flex items-center gap-4 p-1 font-medium hover:bg-secondary rounded-md transition-all">
                  <IconWrapper icon={subitem.icon} height="28" width="28" />
                  <span className="font-medium">{subitem.name}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      );

    default:
      return (
        <div className="flex gap-4 items-center p-2 font-medium hover:bg-secondary rounded-md transition-all">
          <IconWrapper icon={item.icon} height="28" width="28" />
          <span>{item.name}</span>
        </div>
      );
  }
}
