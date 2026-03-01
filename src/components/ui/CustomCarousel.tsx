"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

interface CarouselPluginProps {
  images: string[];
  alt?: string;
}

export function CarouselPlugin({ images, alt = "" }: CarouselPluginProps) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-45 md:h-95 rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={`${alt} - ${index + 1}`}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious
            variant="default"
            className="left-2 bg-white/50 cursor-pointer"
          />
          <CarouselNext
            variant="default"
            className="right-2 bg-white/50 cursor-pointer"
          />
        </>
      )}
    </Carousel>
  );
}
