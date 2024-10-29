import { PropertyCard } from "@/components/PropertyCard";

export const propertiesList = [
  {
    id: "pro_1",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 5,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-1.jpg",
  },
  {
    id: "pro_2",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-2.jpg",
  },
  {
    id: "pro_3",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 3,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-3.jpg",
  },
  {
    id: "pro_4",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-4.jpg",
  },
  {
    id: "pro_5",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 3,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-5.jpg",
  },
  {
    id: "pro_6",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-6.jpg",
  },
  {
    id: "pro_7",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 2,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-7.jpg",
  },
  {
    id: "pro_8",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-8.jpg",
  },
  {
    id: "pro_9",
    name: "123 Main St, Anytown. USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-9.jpg",
  },
];

export function Features() {
  return (
    <div className="container pb-20 mx-auto">
      <h3 className="text-4xl text-center mb-2">Feature Properties</h3>
      <p className="text-center text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia
        possimus neque repellat qui accusamus. Aut id porro facere esse!
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertiesList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
