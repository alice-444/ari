import PopularProductCard from "@/components/home/PopularProductCard.jsx";
const PopularProducts = () => {
  return (
    <div className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 px-8">
        <h2 className="text-4xl text-gray-600 font-medium">
          Our Popular <span className="text-red-300">Products</span>
        </h2>
        <p className="mt-2 text-lg lg:max-w-lg text-gray-500">
          Discover our most popular books, carefully selected to offer you an
          exceptional reading experience. From captivating novels to practical
          guides, immerse yourself in stories that have won over readers all
          over the world. Explore our collection today!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4">
        <PopularProductCard />
      </div>
    </div>
  );
};

export default PopularProducts;
