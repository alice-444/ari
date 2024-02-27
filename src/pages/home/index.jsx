import Quality from "@/components/home/Quality.jsx";
import Service from "@/components/home/Service.jsx";
import Category from "@/components/home/Category.jsx";
import Subscribe from "@/components/home/Subscribe.jsx";
import SpecialOffer from "@/components/home/SpecialOffer.jsx";
import CustomerReviews from "@/components/home/CustomerReviews.jsx";
import PopularProducts from "@/components/home/PopularProducts.jsx";

const Home = () => {
  return (
    <main className="relative">
      <div>
        <p>Hero</p>
      </div>
      <section>
        <PopularProducts />
      </section>
      <section className="py-10">
        <Category />
      </section>
      <div>
        <Quality />
      </div>
      <div className="py-10">
        <Service />
      </div>
      <div>
        <SpecialOffer />
      </div>
      <div className="bg-azure-radiance-200">
        <CustomerReviews />
      </div>
      <div className="sm:py-32 py-16 w-full">
        <Subscribe />
      </div>
    </main>
  );
};

export default Home;
