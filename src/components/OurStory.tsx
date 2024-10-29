import { Button } from "@/components/ui/button";
import Image from "next/image";

export function OurStory() {
  return (
    <div className="container pt-20 pb-36 px-4 grid lg:grid-cols-2 gap-10 mx-auto">
      <div>
        <div className="relative h-fit w-fit">
          <Image
            src="/home.jpg"
            alt="a picture of room"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src="/image-2.jpg"
            alt="a picture of room"
            width={250}
            height={250}
            className="object-cover absolute top-1/2 left-1/2 border-4 hidden lg:block"
          />
        </div>
      </div>
      <div>
        <p className="font-semibold mb-1">Our Story</p>
        <p className="text-3xl mb-2">Efficiency. Transparency. Control.</p>
        <p className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          atque assumenda maxime distinctio voluptatum aut, omnis nesciunt
          ipsam, aliquid totam maiores molestias necessitatibus vitae rem ipsum
          ipsa. Ex iste tenetur ea deleniti illum. Nobis error repudiandae
          maxime fuga amet quos commodi rem cumque excepturi voluptates
          consequuntur, sed natus eligendi rerum.
        </p>
        <Button>Read more</Button>
      </div>
    </div>
  );
}
