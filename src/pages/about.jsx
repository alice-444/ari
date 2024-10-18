// import { FaStar, FaBook, FaHeart, FaQuoteLeft } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-4xl text-red-300 font-semibold mb-6 text-center">
//         About Us
//       </h1>
//       <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto">
//         Welcome to our online bookstore, where you can explore a wide range of
//         books across various genres. Our journey began with a shared passion for
//         literature and a vision to create a haven for book enthusiasts.
//       </p>

//       <div className="mt-8 text-center">
//         <h2 className="text-2xl text-azure-radiance-500 font-semibold mb-4">
//           Our Story
//         </h2>
//         <p className="text-gray-500 max-w-3xl mx-auto">
//           The inspiration behind our bookstore came from a simple yet profound
//           love for books. As avid readers ourselves, we envisioned a space where
//           fellow book lovers could discover, indulge, and connect through the
//           written word. This vision turned into reality with the establishment
//           of our bookstore.
//         </p>
//         <p className="text-gray-700 mt-4 italic">
//           <FaQuoteLeft className="text-2xl text-gray-500 mr-2 inline-block" />
//           "A room without books is like a body without a soul." - Marcus Tullius
//           Cicero
//         </p>
//       </div>

//       {/* Icons section */}
//       <div className="flex items-center justify-center mt-12 space-x-8">
//         <div className="text-4xl text-azure-radiance-500 flex flex-col items-center">
//           <FaBook className="hover:text-red-300 transition duration-300" />
//           <p className="text-sm text-gray-700 mt-2">Wide Book Collection</p>
//         </div>
//         <div className="text-4xl text-red-400 flex flex-col items-center">
//           <FaHeart className="hover:text-azure-radiance-500 transition duration-300" />
//           <p className="text-sm text-gray-700 mt-2">Passionate Readers</p>
//         </div>
//         <div className="text-4xl text-azure-radiance-500 flex flex-col items-center">
//           <FaStar className="hover:text-red-300 transition duration-300" />
//           <p className="text-sm text-gray-700 mt-2">Quality Selection</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center">
//         <h2 className="text-2xl text-red-300 font-semibold mb-4">Our Team</h2>
//         <p className="text-gray-500 max-w-3xl mx-auto">
//           Meet the passionate team behind our bookstore. We are dedicated to
//           bringing you the best reading materials and ensuring your satisfaction
//           with every purchase.
//         </p>
//       </div>

//       <div className="mt-12 text-center">
//         <h2 className="text-2xl text-azure-radiance-500 font-semibold mb-4">
//           Customer Reviews
//         </h2>
//         <div className="flex items-center justify-center">
//           <FaStar className="text-red-300 mr-1" />
//           <FaStar className="text-red-300 mr-1" />
//           <FaStar className="text-red-300 mr-1" />
//           <FaStar className="text-red-300 mr-1" />
//           <FaStar className="text-red-300" />
//           <p className="text-gray-700 ml-2">4.0 stars from 256 reviews</p>
//         </div>
//         <p className="text-gray-500 mt-2 max-w-3xl mx-auto">
//           Read what our customers have to say about their experience with our
//           bookstore.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import { FaStar, FaBook, FaHeart, FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-20">
      {/* Introduction Section */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-12 tracking-wide animate-fade-in-slow">
          About Us
        </h1>
        <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed animate-slide-in">
          Welcome to our online bookstore, a curated space for book lovers. Our
          journey began with a shared passion for literature and a vision to
          create a sanctuary where readers can explore, connect, and immerse
          themselves in the world of books.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="relative mt-20 bg-white shadow-2xl rounded-3xl py-16 px-6 transform transition duration-500 hover:-translate-y-2">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-600 mb-8 animate-slide-up-slow tracking-widest">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Our bookstore was born from a deep love for books. We envisioned a
            space where readers could discover, indulge, and connect through the
            stories they cherish. This vision has turned into reality with the
            creation of our bookstore—a haven for every reader.
          </p>
          <p className="text-gray-700 mt-8 italic text-2xl max-w-xl mx-auto animate-fade-in-slow">
            <FaQuoteLeft className="text-4xl text-gray-400 mr-2 inline-block" />
            "A room without books is like a body without a soul." - Marcus
            Tullius Cicero
          </p>
        </div>
      </div>

      {/* Icon Section with Interactive Hover Effects */}
      <div className="mt-24 container mx-auto flex flex-col md:flex-row items-center justify-around space-y-12 md:space-y-0 md:space-x-16 text-center">
        <div className="group transition-transform hover:scale-110 hover:rotate-1 text-blue-600 flex flex-col items-center">
          <FaBook className="text-8xl mb-6 group-hover:text-blue-400 transition-all duration-300 ease-in-out" />
          <p className="text-xl text-gray-700 mt-4">Wide Book Collection</p>
        </div>
        <div className="group transition-transform hover:scale-110 hover:-rotate-1 text-red-500 flex flex-col items-center">
          <FaHeart className="text-8xl mb-6 group-hover:text-red-400 transition-all duration-300 ease-in-out" />
          <p className="text-xl text-gray-700 mt-4">Passionate Readers</p>
        </div>
        <div className="group transition-transform hover:scale-110 hover:rotate-1 text-yellow-400 flex flex-col items-center">
          <FaStar className="text-8xl mb-6 group-hover:text-yellow-500 transition-all duration-300 ease-in-out" />
          <p className="text-xl text-gray-700 mt-4">Quality Selection</p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="relative mt-24 bg-white py-16 px-6 shadow-2xl rounded-3xl transform transition duration-500 hover:-translate-y-2">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-red-500 mb-8 tracking-widest animate-slide-up">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our passionate team is dedicated to providing you with the best
            reading materials and ensuring your satisfaction with every
            purchase.
          </p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="relative mt-24 bg-gradient-to-r from-blue-50 to-white py-16 shadow-lg rounded-3xl">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-600 mb-8 tracking-widest animate-slide-up">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-6">
            {[...Array(4)].map((_, index) => (
              <FaStar
                key={index}
                className="text-yellow-400 text-3xl animate-bounce-slow"
              />
            ))}
            <FaStar className="text-gray-300 text-3xl" />
            <p className="text-lg text-gray-700 ml-4">
              4.0 stars from 256 reviews
            </p>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover what our customers have to say about their experience with
            our bookstore. We take pride in offering excellent selections and a
            personalized shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
