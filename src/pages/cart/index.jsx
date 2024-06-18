import axios from "axios";
import Link from "next/link";
import FormatPrice from "@/formatPrice.js";
import { CartContext } from "@/db/CartContext.js";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { cartBooks, removeBook, addBook, clearCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (cartBooks.length > 0) {
      axios
        .post("api/cart", { ids: cartBooks })
        .then((response) => setBooks(response.data));
    } else {
      setBooks([]);
    }
  }, [cartBooks]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      clearCart();
    }
  }, []);

  const increaseBook = (id) => {
    addBook(id);
  };

  const decreaseBook = (id) => {
    removeBook(id);
  };

  const deleteCart = () => {
    clearCart();
  };

  let total = 0;
  for (const bookId of cartBooks) {
    const price = parseFloat(books.find((p) => p._id === bookId)?.price || 0);
    total += price;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-red-300 text-center mb-8">
        Your Cart
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-2/3">
          {!books.length ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="flex items-center justify-between p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <img
                    src={book.images[0]}
                    alt="cart image"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {book.title}
                    </h3>
                    <p className="text-gray-500">
                      {cartBooks.filter((id) => id === book._id).length *
                        book.price}{" "}
                      €
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseBook(book._id)}
                      className="h-10 w-10 flex items-center justify-center text-gray-600 transition hover:bg-gray-200 rounded-full border border-azure-radiance-400"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={cartBooks.filter((id) => id === book._id).length}
                      className="h-10 w-16 rounded border text-lg font-bold text-center"
                      readOnly
                    />
                    <button
                      onClick={() => increaseBook(book._id)}
                      className="h-10 w-10 flex items-center justify-center text-gray-600 transition hover:bg-gray-200 rounded-full border border-azure-radiance-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-8 border-t pt-4">
                <button
                  onClick={deleteCart}
                  className="text-red-300 text-xl hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
                <div className="text-lg font-bold text-gray-700">
                  Total: {FormatPrice(total)}
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/books" legacyBehavior>
                  <a className="mt-4 inline-block text-center bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-8 rounded-full font-semibold transition hover:from-blue-500 hover:to-blue-700">
                    Continue Shopping
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
        {books.length > 0 && (
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold text-azure-radiance-500 mb-4">
              Shipping Details
            </h2>
            <div className="p-4 border rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700">City</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">State</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Zip</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-azure-radiance-200 focus:border-azure-radiance-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="mt-4 inline-block text-center bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-8 rounded-full font-semibold transition hover:from-blue-500 hover:to-blue-700">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
