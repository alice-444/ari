import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import FormatPrice from "@/formatPrice.js";
import { CartContext } from "@/db/CartContext.js";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const PopularBooks = ({ books }) => {
  const { addBook } = useContext(CartContext);
  const addItemsCart = (book) => {
    addBook(book._id);
    toast.success("Item added to cart");
  };

  return (
    <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex flex-col justify-start gap-5 text-center">
        <h2 className="text-4xl text-gray-600 font-medium">
          Our Popular <span className="text-azure-radiance-500">Books</span>
        </h2>
        <p className="mt-2 text-lg lg:max-w-2xl mx-auto text-gray-500">
          Discover our most popular books, carefully selected to offer you an
          exceptional reading experience. From captivating novels to practical
          guides, immerse yourself in stories that have won over readers all
          over the world. Explore our collection today!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {books?.length > 0 &&
          books.map((book) => (
            <div className="flex flex-col items-center" key={book._id}>
              <div className="bg-gradient-to-l from-azure-radiance-100 to-red-100 rounded-lg shadow-md p-4 w-full">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>

              <div className="mt-4 w-full flex flex-col items-center">
                <Link href={"/books/" + book._id}>
                  <h3 className="text-lg leading-normal font-semibold text-azure-radiance-500 hover:underline">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600">{book.author}</p>{" "}
                <div className="flex items-center justify-between w-full mt-2">
                  <p className="text-lg text-red-300 font-semibold">
                    {FormatPrice(book.price)}
                  </p>
                  <button
                    className="flex items-center justify-center border rounded-full font-semibold border-red-200 bg-transparent px-5 py-2 text-md text-red-300 transition hover:bg-red-300 hover:text-white"
                    onClick={() => {
                      addItemsCart(book);
                    }}
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
