import { FaStar, FaBook, FaHeart, FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl text-red-300 font-semibold mb-6">About Us</h1>
      <p className="text-lg text-gray-500">
        Welcome to our online bookstore, where you can explore a wide range of
        books across various genres. Our journey began with a shared passion for
        literature and a vision to create a haven for book enthusiasts.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl text-azure-radiance-500 font-semibold mb-4">Our Story</h2>
        <p className="text-gray-500">
          The inspiration behind our bookstore came from a simple yet profound
          love for books. As avid readers ourselves, we envisioned a space where
          fellow book lovers could discover, indulge, and connect through the
          written word. This vision turned into reality with the establishment
          of our bookstore.
        </p>
        <p className="text-gray-700 mt-4">
          <FaQuoteLeft className="text-2xl text-gray-500 mr-2" />
          "A room without books is like a body without a soul." - Marcus Tullius
          Cicero
        </p>
      </div>

      {/* Icons section */}
      <div className="flex items-center justify-center mt-12">
        <div className="text-4xl text-azure-radiance-500 mx-4">
          <FaBook />
          <p className="text-sm text-gray-700 mt-2">Wide Book Collection</p>
        </div>
        <div className="text-4xl text-red-400 mx-4">
          <FaHeart />
          <p className="text-sm text-gray-700 mt-2">Passionate Readers</p>
        </div>
        <div className="text-4xl text-azure-radiance-500 mx-4">
          <FaStar />
          <p className="text-sm text-gray-700 mt-2">Quality Selection</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl text-red-300 font-semibold mb-4">Our Team</h2>
        <p className="text-gray-500">
          Meet the passionate team behind our bookstore. We are dedicated to
          bringing you the best reading materials and ensuring your satisfaction
          with every purchase.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl text-azure-radiance-500 font-semibold mb-4">
          Customer Reviews
        </h2>
        <div className="flex items-center">
          <FaStar className="text-red-300 mr-1" />
          <FaStar className="text-red-300 mr-1" />
          <FaStar className="text-red-300 mr-1" />
          <FaStar className="text-red-300 mr-1" />
          <FaStar className="text-red-300" />
          <p className="text-gray-700 ml-2">4.0 stars from 256 reviews</p>
        </div>
        <p className="text-gray-500 mt-2">
          Read what our customers have to say about their experience with our
          bookstore.
        </p>
      </div>
    </div>
  );
};

export default About;
