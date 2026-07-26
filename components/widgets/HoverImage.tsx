import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import arrowImage from "@/public/images/arrow-two.webp";
import { hoverEffectConfig } from "@/constants/hoverEffect";

interface HoverImageProps {
  image: StaticImageData;
  imageAlt: string;
  href: string;
  arrowAlt: string;
  priority?: boolean;
  className?: string;
}

const HoverImage = ({
  image,
  imageAlt,
  href,
  arrowAlt,
  priority,
  className,
}: HoverImageProps) => {
  return (
    <div
      className={className ?? "thumb hover-image"}
      data-displacement={hoverEffectConfig.displacement}
      data-intensity={hoverEffectConfig.intensity}
      data-speedin={hoverEffectConfig.speedIn}
      data-speedout={hoverEffectConfig.speedOut}
    >
      <Image
        src={image}
        alt={imageAlt}
        placeholder="blur"
        priority={priority}
        unoptimized
      />

      <div className="arrow">
        <Link href={href} aria-label={arrowAlt}>
          <Image src={arrowImage} alt={arrowAlt} placeholder="blur" />
        </Link>
      </div>
    </div>
  );
};

export default HoverImage;
