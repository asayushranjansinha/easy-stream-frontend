"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IconProps {
  icon: string;
  height?: string;
  width?: string;
  color?: string; // Include the color prop in the interface
  rest?: any;
}

export const IconWrapper = ({
  icon,
  height = "24",
  width = "24",
  color, // Add color to the destructuring
  rest,
}: IconProps) => {
  return <Icon icon={icon} height={height} width={width} color={color} {...rest} />;
};