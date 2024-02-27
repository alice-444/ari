const ServiceCard = ({ icon: Icon, label, text }) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full rounded-lg shadow-2xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-azure-radiance-400 rounded-full">
        {Icon && <Icon className="text-white" size={24} />}
      </div>
      <h3 className="mt-5 text-3xl text-red-300 leading-normal font-medium">
        {label}
      </h3>
      <p className="mt-3 text-lg text-gray-500 leading-normal font-medium">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
