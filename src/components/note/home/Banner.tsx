import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <Image
      src="/banner-image.jpg"
      width={1000}
      height={195}
      quality={100}
      alt="banner-image"
      priority
      className="w-full h-52 object-cover"
    />
  );
}
