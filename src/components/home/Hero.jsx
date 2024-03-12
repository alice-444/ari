import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="px-9">
      <div className="gap-2 flex container">
        <div className="relative">
          <h1>title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            aut.
          </p>
          <button>Shop now</button>
        </div>
        <div>
          <div>
            <span>
              <p>+</p>
            </span>
            <span>
              <CountUp start={500} end={1500} duration={4} />
            </span>
            <span> Books</span>
          </div>

          <div>
            <span>
              <p>+</p>
            </span>
            <span>
              <CountUp start={500} end={1500} duration={4} />
            </span>
            <span> Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
