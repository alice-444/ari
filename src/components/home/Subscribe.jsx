const Subscribe = () => {
  return (
    <section className="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center lg:gap-10 mx-auto py-2">
      <h3 className="text-4xl leading-10 text-red-300 font-semibold lg:max-w-md px-10">
        Subscribe to Our Newsletter
      </h3>
      <div className="flex flex-col lg:flex-row items-center">
        <input
          type="email"
          placeholder="Customer@aribooks.com"
          className="bg-gray-100 border border-gray-300 rounded-md px-4 py-3 mr-4 mb-2 lg:mb-0 shadow-lg"
        />

        <button className="bg-red-300 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-red-200 shadow-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
