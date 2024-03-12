import Link from "next/link";
import toast from "react-hot-toast";
import Book from "@/db/models/Book.js";
import { FormatPrice } from "@/formatPrice.js";
import MongooseConnect from "@/db/mongoose.js";
// import { CartContext } from "@/db/CartContext.js";
import { useState, useContext, useEffect } from "react";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const BookPage = ({ book }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [book]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-3xl font-semibold text-red-400 mb-4">
            Book Not Found
          </p>
          <p className="text-gray-500 text-lg font-semibold">
            Sorry, the book you are looking for does not exist or may have been
            removed.
          </p>
          <p className="mt-4 text-red-300 text-lg font-medium hover:underline cursor-pointer">
            <Link href="/books">Browse other books</Link>
          </p>
        </div>
      </div>
    );
  }

  if (book) {
    return (
      <div>
        <section className="mt-20 md:mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden px-4 md:px-2">
              <img
                src={book.images[0]}
                alt="book-image"
                className="w-full h-full md:h-[90vh] object-cover object-center border border-primary rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid lg:grid-cols-1 lg:gap-y-4 px-2 gap-2 md:gap-0 md:px-2">
              {book.images.slice(1, 3).map((image, index) => (
                <div
                  className="lg:aspect-h-2 lg:aspect-w-3 lg:rounded-lg lg:overflow-hidden"
                  key={index}
                >
                  <img
                    src={image}
                    alt="book-image"
                    className="w-full h-full md:h-[44vh] object-cover object-center border border-secondary rounded-lg p-4"
                  />
                </div>
              ))}
            </div>
            <div className="p-4 lg:p-8 border rounded-lg">
              <h1 className="text-3xl font-semibold text-text">{book.title}</h1>
  <h1 className="text-3xl font-semibold text-text">{book.author}</h1>
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-2 text-gray-700 text-sm">{book.description}</p>
              </div>

              <div className="mt-6">
            <h2 className="text-xl font-semibold">
                Details
              </h2>
              <p className="mt-2 text-gray-700">
                {product.details}
              </p>
            <h3 className="text-lg font-semibold">dateParution</h3>
              <p className="mt-2 text-gray-700">
                 {product.dateParution}</p>
            <h3 className="text-lg font-semibold">editor</h3>
                <p className="mt-2 text-gray-700">
                {product.editor}
              </p>
            <h3 className="text-lg font-semibold">collection</h3>
              <p className="mt-2 text-gray-700">
                {product.collection}</p>
            <h3 className="text-lg font-semibold">number page</h3>
              <p className="mt-2 text-gray-700">
                {product.numberPage}</p>
            </div>
              <div className="mt-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-700">Price</h2>

                <p className="mt-2 text-primary font-semibold text-lg">
                  {FormatPrice(book.price)}
                </p>
              </div>
              <div className="col-span-12 text-center w-full">
                <button
                  onClick={() => {
                    addItemsCart(book);
                  }}
                  className="flex items-center justify-center border rounded-full font-semibold border-azure-radiance-400 bg-transparent px-5 py-3 text-md text-azure-radiance-400 transition hover:bg-azure-radiance-500 hover:text-white w-full"
                >
                  Add to cart{" "}
                  <PiShoppingBagOpenDuotone className="w-6 h-6 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

}

export default BookPage
