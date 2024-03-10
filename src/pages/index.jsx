import Book from "@/db/models/Book.js";
import Hero from "@/components/home/Hero.jsx";
import Quality from "@/components/home/Quality.jsx";
import Service from "@/components/home/Service.jsx";
import MongooseConnect from "@/db/mongoose.js";
// import Category from "@/components/home/Category.jsx";
import Subscribe from "@/components/home/Subscribe.jsx";
import SpecialOffer from "@/components/home/SpecialOffer.jsx";
import PopularBooks from "@/components/home/PopularBooks.jsx";
import CustomerReviews from "@/components/home/CustomerReviews.jsx";

const Home = ({newBooks}) => {
  return (
    <main className="relative">
     
      <p>Hero : en cours de maintenance</p>
      <PopularBooks books={newBooks}/>
      <div className="py-10">
        
        <p>Category : en cours de maintenance</p>
      </div>
      <Quality />
      <div className="py-10">
        <Service />
      </div>
      
      <p>SpecialOffer : en cours de maintenance</p>
      <div className="bg-azure-radiance-200">
        
        <p>Customer Reviews : en cours de maintenance</p>
      </div>
      <div className="sm:py-32 py-16 w-full">
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