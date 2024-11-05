import Book from "@/db/models/Book.js";
import Hero from "@/components/home/Hero.jsx";
import MongooseConnect from "@/db/mongoose.js";
import Quality from "@/components/home/Quality.jsx";
import Service from "@/components/home/Service.jsx";
import Category from "@/components/home/Category.jsx";
import Subscribe from "@/components/home/Subscribe.jsx";
import PopularBooks from "@/components/home/PopularBooks.jsx";

const Home = ({ newBooks }) => {
  return (
    <main className="relative">
      <Hero />
      <PopularBooks books={newBooks} />
      <div className="py-10">
        <Category />
      </div>
      <Quality />
      <div className="py-10">
        <Service />
      </div>

      <div className="sm:py-32 py-10 w-full">
        <Subscribe />
      </div>
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  await MongooseConnect();

  const newBooks = await Book.find({}, null, { sort: { _id: 1 }, limit: 4 });

  return {
    props: {
      newBooks: JSON.parse(JSON.stringify(newBooks)),
    },
  };
};
