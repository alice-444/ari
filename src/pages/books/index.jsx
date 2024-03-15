import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import Book from "@/db/models/Book.js";
import FormatPrice from "@/formatPrice.js";
import MongooseConnect from "@/db/mongoose.js";
import { CartContext } from "@/db/CartContext.js";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const Books = ({ allBooks, error }) => {
  const { addBook } = useContext(CartContext);

  const addItemsCart = (book) => {
    addBook(book._id);
    toast.success("Item added to cart");
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-azure-radiance-400 font-bold text-3xl mb-4">
            Oops! Something went wrong.
          </p>
          <p className="text-gray-600 text-lg">{error}</p>
          <button
            className="mt-4 px-4 py-2 text-2xl border border-red-200 text-red-300 rounded-xl hover:bg-red-300 hover:text-white"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl flex items-center justify-center font-semibold text-red-300 py-6">
        All books
      </h1>
      <div className="flex justify-center min-h-screen w-full p-4">
        <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 xl:gap-x-8 px-2">
          {allBooks?.length > 0 &&
            allBooks.map((book) => (
              <div key={book._id}>
                <div className="group block overflow-hidden border border-red-300 border-accent rounded-xl shadow-md border-opacity-10">
                  <div className="relative md:h-[300px] h-[200px]">
                    <img
                      src={book.images[0]}
                      alt="product image"
                      className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={book.images[1]}
                      alt="product image"
                      className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div className="relative p-3 border-t">
                    <Link href={"/books/" + book._id}>
                      <h3 className="text-2xl text-red-300 font-semibold group-hover:underline truncate">
                        {book.title}
                      </h3>
                    </Link>
                    <Link href={"/"}>
                      {" "}
                      <h3 className="text-xl text-red-300 font-semibold group-hover:underline truncate">
                        {book.author}{" "}
                      </h3>{" "}
                    </Link>{" "}
                    <div className="mt-1.5 flex flex-col items-center justify-between text-md">
                      {" "}
                      <p className="tracking-wide text-gray-500 text-lg font-semibold md:text-md">
                        {FormatPrice(book.price)}
                      </p>
                      <div className="col-span-12 text-center w-full">
                        <button
                          onClick={() => {
                            addItemsCart(book);
                          }}
                          className="flex items-center justify-center border rounded-full font-semibold border-azure-radiance-400 bg-transparent px-5 py-3 text-md text-azure-radiance-400 transition hover:bg-azure-radiance-500 hover:text-white w-full"
                        >
                          Add to cart{" "}
                          <PiShoppingBagOpenDuotone className="w-6 h-6 ml-2" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Books;

export const getServerSideProps = async () => {
  try {
    await MongooseConnect();
    const allBooks = await Book.find({}, null, { sort: { _id: 1 } });

    return {
      props: {
        allBooks: JSON.parse(JSON.stringify(allBooks)),
      },
    };
  } catch (error) {
    console.error("Error fetching books:", error.message);

    return {
      props: {
        allBooks: [],
        error: "Please try again later.",
      },
    };
  }
};
