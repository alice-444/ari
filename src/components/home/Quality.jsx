import Image from 'next/image';

const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-1 flex-col px-4 lg:px-8">
        <h3 className="mt-6 lg:mt-0 font-semibold text-3xl lg:text-4xl text-azure-radiance-500">
          Quality
        </h3>
        <p className="mt-4 text-gray-700 text-base lg:text-lg">
          At ariBooks, we're dedicated to providing you with an exceptional
          reading experience. Our curated selection of high-quality books is
          chosen with care, ensuring each title offers captivating content and
          enriching narratives.
        </p>
        <p className="mt-4 text-gray-700 text-base lg:text-lg">
          From thrilling adventures to insightful reflections, our diverse range
          of titles caters to every reader's taste. Every book undergoes
          meticulous inspection before shipping, guaranteeing it arrives in
          pristine condition, ready to immerse you in its pages.
        </p>
        <p className="mt-4 text-gray-700 text-base lg:text-lg">
          Explore our collection and elevate your reading journey with ariBooks.
          Quality is our promise, because you deserve nothing but the best.
        </p>
      </div>

      <div className="flex flex-1 justify-center items-center bg-gradient-to-r from-azure-radiance-200 to-red-200 rounded-lg shadow-md p-4 w-full max-w-lg lg:max-w-md mx-auto lg:mx-0">
        <Image
          src="/mnt/data/cae2cac0b0ae97c02802b5bc6eebed7f.png"
          alt="Quality Image"
          width={470}
          height={402}
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Quality;
