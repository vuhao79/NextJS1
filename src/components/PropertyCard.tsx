import { propertiesList } from "@/components/Features";
import { Bath, Bed, Square, Star } from "lucide-react";
import Image from "next/image";

type PropertyCardProps = (typeof propertiesList)[0];

export function PropertyCard({
  baths,
  beds,
  image,
  name,
  price,
  rating,
  sqft,
}: PropertyCardProps) {
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={420}
          className="w-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-6">
        <p className="text-lg font-semibold">{name}</p>
        <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
          <p className="py-2 flex items-center justify-center gap-2">
            <Square className="w-4 h-4" />
            {sqft} sqft
          </p>
          <p className="py-2 flex items-center justify-center gap-2">
            <Bed className="w-4 h-4" />
            {beds} Beds
          </p>
          <p className="py-2 flex items-center justify-center gap-2">
            <Bath className="w-4 h-4" />
            {baths} Baths
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-muted-foreground">Price</p>
            <p className="font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Rating</p>
            <div className="flex gap-2 items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <Star
                      fill={index < rating ? "orange" : "transparent"}
                      color="orange"
                      className="w-4 h-4"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
