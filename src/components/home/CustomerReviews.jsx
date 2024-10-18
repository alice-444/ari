import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    review:
      "Fantastic selection of books and amazing customer service. Highly recommend!",
  },
  {
    name: "Mark Smith",
    rating: 4,
    review:
      "Great variety of genres and fast delivery. Will definitely shop here again.",
  },
  {
    name: "Jane Doe",
    rating: 5,
    review:
      "The best online bookstore! I found exactly what I was looking for.",
  },
  {
    name: "John Appleseed",
    rating: 4,
    review:
      "Good prices and fast shipping. I am very satisfied with my purchase.",
  },
  {
    name: "Emily Carter",
    rating: 5,
    review: "Excellent customer support and a great selection of books.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CustomerReviews = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl shadow-md p-8">
        <h3 className="text-4xl font-bold text-center text-red-300 mb-8">
          Customer Reviews
        </h3>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col justify-between mx-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {review.name}
              </p>
              <p className="text-gray-600 mt-2">{review.review}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
