import Link from "next/link";
import toast from "react-hot-toast";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const formatPrice = (price) => {
  const roundedPrice = Math.round(price * 100) / 100;

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(roundedPrice);

  return formattedPrice;
};

const PopularBooks = ({ books }) => {
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
        {books?.length > 0 &&
          books.map((book) => (
            <div
              className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full"
              key={book._id}
            >
              <div className="bg-gradient-to-l from-azure-radiance-100 to-red-100 rounded">
                <img
                  src={book.image}
                  alt="product name"
                  className="w-[280px] h-[280px] object-contain"
                />
              </div>

              <div className="mt-8 flex-col justify-start gap-2.5">
                <Link href={"/books/" + book._id}>
                  <h3 className="mt-1 text-lg leading-normal font-semibold text-azure-radiance-500">
                    {book.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between space-x-3">
                  <p className="text-lg text-red-300 leading-normal font-semibold">
                    {formatPrice(book.price)}
                  </p>
                  <button
                    className="flex items-center justify-center border rounded-full font-semibold border-red-200 bg-transparent px-5 py-3 text-md text-red-300 transition hover:bg-red-300 hover:text-white"
                  >
                    Add to cart{" "}
                    <PiShoppingBagOpenDuotone className="w-6 h-6 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularBooks;
