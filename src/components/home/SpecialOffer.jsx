import Link from "next/link";
import { FaShoppingCart, FaTruck, FaPercent } from "react-icons/fa";

const SpecialOffer = () => {
  const offers = [
    {
      title: "Buy 2 Books, Get 1 Free!",
      code: "BUY2GET1",
      icon: FaShoppingCart,
    },
    {
      title: "Free Delivery on Orders Over 50€!",
      code: "FREESHIP",
      icon: FaTruck,
    },
    {
      title: "30% Off Your Next Purchase!",
      code: "SAVE30",
      icon: FaPercent,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-red-100 p-8 rounded-xl shadow-md">
      <p className="text-4xl font-bold text-center text-red-300 mb-8">
        Special Offers
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center sm:w-72 w-full transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <offer.icon className="text-red-300 w-10 h-10 mb-4" />
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">
                {offer.title}
              </p>
              <p className="text-gray-600 mt-2">
                Promo Code:{" "}
                <span className="font-bold text-gray-800">{offer.code}</span>
              </p>
            </div>
            <Link href="/books">
              <button className="mt-4 bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                Buy now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
