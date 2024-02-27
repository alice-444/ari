const PopularProductCard = () => {
  return (
    <div className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full">
      <div className="bg-gradient-to-l from-azure-radiance-100 to-red-100 rounded">
        <img alt="product name" className="w-[280px] h-[280px] object-contain" />
      </div>

<div className="mt-8 flex-col justify-start gap-2.5 "> 
      <h3 className="mt-1 text-lg leading-normal font-semibold">
        name
      </h3>
      <p className="mt-1 text-lg leading-normal font-semibold">
        price
      </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
