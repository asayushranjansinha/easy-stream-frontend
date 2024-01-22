"use client";
// React and Next.js
import { motion, useCycle } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sling as Hamburger } from "hamburger-react";

// Icon

// Constants and Utilities
import generateNavigationItems, { INavigation } from "@/data";
import { IconWrapper } from "./icon-wrapper";
import { AccordionItem } from "@radix-ui/react-accordion";

function HeaderMobile() {
  // Ref for the container element
  const containerRef = useRef(null);

  // Calculate the height using a custom hook (useDimensions)
  const { height } = useDimensions(containerRef);

  // Toggle state for opening and closing
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden overflow-y-auto ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-sky-300/70 dark:bg-background/70"
        variants={ContainerCircularDropdown}
      />
      <NavigationContainer toggle={toggleOpen} />
      <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
    </motion.nav>
  );
}

export default HeaderMobile;

interface NavigationContainerProps {
  toggle: () => void;
}
function NavigationContainer({ toggle }: NavigationContainerProps) {
  const NAVIGATION_ITEMS = generateNavigationItems("kfjldsjf;");
  return (
    <motion.ul
      variants={variants}
      className="absolute grid w-full gap-3 px-10 py-16"
    >
      <Accordion type="single" collapsible className="w-full space-y-4">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem key={item.name} item={item} toggle={toggle} />
        ))}
      </Accordion>

      <motion.div
        variants={MenuItemVariants}
        className="mt-4 flex flex-col items-center"
      >
        <span>Made with</span>
        <IconWrapper icon="ri:heart-fill" color="red" />
        <span>By Ayush Ranjan</span>
      </motion.div>
    </motion.ul>
  );
}
type NavigationItemProps = {
  item: INavigation;
  toggle: () => void;
};
function NavigationItem({ item, toggle }: NavigationItemProps) {
  switch (item.type) {
    case "dropdown":
      return (
        <motion.li variants={MenuItemVariants}>
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
                  <li
                    key={subitem.name}
                    className="w-full flex items-center gap-4 py-1 px-2 font-medium hover:bg-secondary rounded-md transition-all"
                  >
                    <IconWrapper icon={subitem.icon} height="28" width="28" />
                    <span className="font-medium">{subitem.name}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </motion.li>
      );
    default:
      return (
        <motion.li variants={MenuItemVariants}>
          <div className="flex gap-4 items-center p-2 font-medium hover:bg-secondary rounded-md transition-all">
            <IconWrapper icon={item.icon} height="28" width="28" />
            <span>{item.name}</span>
          </div>
        </motion.li>
      );
  }
}

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  const { theme } = useTheme();
  const [menuColor, setColor] = useState<string>("#fff");
  useEffect(() => {
    setColor(theme === "light" ? "#000" : "#fff");
  }, [theme]);
  return (
    <button
      onClick={toggle}
      className="pointer-events-auto fixed right-4 top-2 z-30"
    >
      <Hamburger size={28} color={menuColor} />
    </button>
  );
};

/* ******************************** ANIMATION ******************************* */
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);
  return dimensions.current;
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const ContainerCircularDropdown = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
const signinVariant = {
  open: {
    y: 0,
    x: "50%",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: "50%",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
