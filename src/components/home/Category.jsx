import Link from "next/link";
import {
  FaBook,
  FaPenNib,
  FaAward,
  FaHeart,
  FaMoon,
  FaMagic,
  FaHistory,
  FaChild,
} from "react-icons/fa";

const categories = [
  { name: "Fiction", icon: FaBook, link: "/category/fiction" },
  { name: "Non-Fiction", icon: FaPenNib, link: "/category/non-fiction" },
  { name: "Bestsellers", icon: FaAward, link: "/category/bestsellers" },
  { name: "Romance", icon: FaHeart, link: "/category/romance" },
  { name: "Dark Romance", icon: FaMoon, link: "/category/dark-romance" },
  { name: "Fantasy", icon: FaMagic, link: "/category/fantasy" },
];

const Category = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <h3 className="text-4xl font-bold text-center text-azure-radiance-500 mb-8">
        Categories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-r from-blue-100 to-red-100">
              <category.icon className="text-azure-radiance-400 w-10 h-10 mb-4" />
              <p className="text-xl font-semibold text-gray-800">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
