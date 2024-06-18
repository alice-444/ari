import Link from "next/link";
import toast from "react-hot-toast";
import Book from "@/db/models/Book.js";
import FormatPrice from "@/formatPrice.js";
import MongooseConnect from "@/db/mongoose.js";
import { CartContext } from "@/db/CartContext.js";
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

  const { addBook } = useContext(CartContext);

  const addItemsCart = (book) => {
    addBook(book._id);
    toast.success("Item added to cart");
  };

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
      <div className="max-w-6xl mx-auto p-4">
        <section className="mt-10 md:mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={book.images[0]}
                  alt="book-image"
                  className="w-full h-full object-cover border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {book.images.slice(1, 3).map((image, index) => (
                  <div className="overflow-hidden rounded-lg" key={index}>
                    <img
                      src={image}
                      alt="book-image"
                      className="w-full h-full object-cover border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-between p-4 bg-white shadow-lg rounded-lg">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800">
                  {book.title}
                </h1>
                <h2 className="text-xl font-semibold text-gray-600 mt-2">
                  {book.author}
                </h2>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Description</h3>
                  <p className="mt-2 text-gray-700 text-sm">
                    {book.description}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Details</h3>
                  <div className="mt-2 text-gray-700 text-sm space-y-2">
                    <p>
                      <span className="font-semibold">Publication Date:</span>{" "}
                      {book.publicationDate}
                    </p>
                    <p>
                      <span className="font-semibold">Editor:</span>{" "}
                      {book.editor}
                    </p>
                    <p>
                      <span className="font-semibold">ISBN:</span> {book.ISBN}
                    </p>
                    <p>
                      <span className="font-semibold">EAN:</span> {book.EAN}
                    </p>
                    <p>
                      <span className="font-semibold">Number of Pages:</span>{" "}
                      {book.numberPage}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700">Price</h3>
                <p className="text-primary font-semibold text-xl text-gray-700">
                  {FormatPrice(book.price)}
                </p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => addItemsCart(book)}
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
  }
};

export default BookPage;

export const getServerSideProps = async (context) => {
  await MongooseConnect();
  const { id } = context.query;

  try {
    const book = await Book.findById(id);
    return {
      props: {
        book: JSON.parse(JSON.stringify(book)),
      },
    };
  } catch (error) {
    console.error("Error fetching book:", error);
    return {
      props: {
        book: null,
      },
    };
  }
};
