import axios from "axios";
import Link from "next/link";
import FormatPrice from "@/formatPrice.js";
import { CartContext } from "@/db/CartContext.js";
import { TbDirectionSign } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { cartBooks, removeBook, addBook, clearCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);

  const [isSuccess, setIsSuccess] = useState(false);

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
      // toast.success("Order placed successfully");
    }
  }, []);

  const increaseBook = (id) => {
    addBook(id);
    // toast.success('Item added!!')
  };

  const decreaseBook = (id) => {
    removeBook(id);
    // toast.success('Item removed!!')
  };

  const deleteCart = () => {
    clearCart();
    // toast.success('Cart Cleared!!')
  };

  let total = 0;
  for (const bookId of cartBooks) {
    const price = parseFloat(books.find((p) => p._id === bookId)?.price || 0);
    total += price;
  }

  return (
    <div>
      <section className="flex justify-between max-md:flex-col space-x-4">
        <div className="md:w-2/3 px-4">
          <div className="mt-16 md:mt-6">
            <header text-center flex justify-between w-full>
              <h1 className="text-3xl font-semibold text-red-300 sm:text-4xl">
                Your Cart
              </h1>
            </header>
            {!books?.length ? (
              <p className="my-6">Your cart is empty</p>
            ) : (
              <div>
                {books?.length > 0 &&
                  books.map((book) => (
                    <div className="mt-8" key={book._id}>
                      <ul className="space-x-4">
                        <li className="flex items-center gap-3 justify-between">
                          <img
                            src={book.images[0]}
                            alt="cart image"
                            className="h-16 w-16 object-cover rounded"
                          />
                          <div>
                            <h3 className="text-xl text-black max-w-md">
                              {book.title}
                            </h3>
                            <dl className="mt-1 space-y-px text-sm text-gray-500">
                              <p>
                                {cartBooks.filter((id) => id === book._id)
                                  .length * book.price}
                              </p>
                            </dl>
                          </div>

                          <div>
                            <label htmlFor="Quantity" className="sr-only">
                              {" "}
                              Quantity{" "}
                            </label>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => decreaseBook(book._id)}
                                type="button"
                                className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 border border-azure-radiance-400 rounded"
                              >
                                -
                              </button>

                              <input
                                type="number"
                                id="Quantity"
                                value={
                                  cartBooks.filter((id) => id === book._id)
                                    .length
                                }
                                className="h-10 w-16 rounded border text-primary text-lg font-bold border-gray-200 text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                              />

                              <button
                                onClick={() => increaseBook(book._id)}
                                type="button"
                                className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 border rounded border-azure-radiance-400"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))}
                <div className="mt-8 flex justify-end border-t border-red-300 p-8">
                  <div className="max-w-md space-x-4">
                    <div className="space-y-1 text-md text-black">
                      <div className="flex justify-end text-red-300 text-xl hover:text-azure-radiance-500 font-semibold border-b mb-3">
                        <button onClick={deleteCart}>Clear Cart</button>
                      </div>
                      <div className="flex justify-between text-lg">
                        <dt className="text-gray-600">Total :</dt>
                        <dd className="text-azure-radiance-500 font-bold">
                          {FormatPrice(total)}{" "}
                        </dd>
                      </div>
                      <div className="flex justify-end">
                        <Link
                          className="group flex items-center justify-between gap-4 rounded-lg border border-primary bg-primary px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                          href="/books"
                        >
                          <span className="font-bold text-lg text-red-300 transition-colors group-hover:text-primary group-active:text-indigo-500">
                            Continue Shopping
                          </span>

                          <TbDirectionSign className="text-red-300 w-8 h-8" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!books?.length ? (
          ""
        ) : (
          <div className="md:1/3 mt-16 md:mt-6">
            <header className="text-start flex flex-col w-full">
              <h1 className="text-2xl font-bold text-azure-radiance-500 sm:text-3xl">
                Shipping Details
              </h1>
              <p className="mt-2">We use Your Account details For shipping.</p>
            </header>
            <div className="mx-auto max-w-xl p-4 border shadow-xl h-[400px] my-3 rounded-lg">
              <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-6">
                    <label className="mb-1 block text-md font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full rounded-md p-3 border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div className="col-span-6">
                    <label className="mb-1 block text-md font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="block w-full rounded-md p-3 border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div className="col-span-12">
                    <label className="mb-1 block text-md font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      className="block  p-3 border w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="1864 Main Street"
                    />
                  </div>
                  <div class="col-span-6">
                    <label class="mb-1 block text-md font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      class="block p-3 border w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder=""
                    />
                  </div>
                  <div class="col-span-4">
                    <label class="mb-1 block text-md font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      class="block p-3 border w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder=""
                    />
                  </div>
                  <div class="col-span-2">
                    <label class="mb-1 block text-md font-medium text-gray-700">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="block p-3 border w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder=""
                    />
                  </div>

                  <div class="col-span-12 text-center w-full">
                    <button className="block rounded-full px-5 py-3 text-lg text-azure-radiance-500 font-semibold transition hover:bg-azure-radiance-500 hover:text-white w-full">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
