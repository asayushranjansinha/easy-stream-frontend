import Image from "next/image";
import React from "react";

const Logo = () => {
  return <Image 
    src={"/logo.svg"} 
    alt="Logo" 
    width={120} 
    height={50} />;
};

export default Logo;
