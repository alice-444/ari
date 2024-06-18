import CountUp from "react-countup";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-red-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-red-300 mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Explore our wide selection of books and find the perfect one for
            you. From fiction to non-fiction, we have something for every
            reader.
          </p>
          <Link href="/books" legacyBehavior>
            <a className="bg-red-300 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-red-400 shadow-md transform hover:-translate-y-1">
              Shop now
            </a>
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col items-center md:items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center mb-4">
            <p className="text-3xl font-bold text-red-300 mr-2">+</p>
            <CountUp
              className="text-3xl font-bold text-gray-700"
              start={500}
              end={1500}
              duration={4}
            />
            <p className="text-3xl font-bold text-gray-700 ml-2">Books</p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl font-bold text-red-300 mr-2">+</p>
            <CountUp
              className="text-3xl font-bold text-gray-700"
              start={100}
              end={200}
              duration={4}
            />
            <p className="text-3xl font-bold text-gray-700 ml-2">authors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
