import Link from "next/link";
import { FaShoppingCart, FaTruck, FaPercent } from "react-icons/fa";

const SpecialOffer = () => {
  const offers = [
    { title: "2 livres, 1 offert !", code: "BUY2GET1", icon: FaShoppingCart },
    {
      title: "Free delivery -> commandes de plus de 50€ !",
      code: "FREESHIP",
      icon: FaTruck,
    },
    {
      title: "30% de réduction sur votre prochain achat !",
      code: "SAVE30",
      icon: FaPercent,
    },
  ];

  return (
    <div className="bg-azure-radiance-100 p-4 rounded-xl shadow-md animate-pulse">
      <p className="text-3xl font-semibold text-center text-red-300">Specials Offers</p>
      <div className="mt-4 flex overflow-x-auto space-x-4">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-lg flex items-center">
            <offer.icon className="text-red-300 w-7 h-7 text-2xl mr-2" />
            <div>
              <p className="text-lg font-bold text-gray-800">{offer.title}</p>
              <p className="text-gray-600">Code de promotion : {offer.code}</p>
            </div>
            <Link href="/books">
            <button className="ml-auto bg-azure-radiance-300 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
