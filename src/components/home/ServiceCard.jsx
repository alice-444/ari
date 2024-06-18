const ServiceCard = ({ icon: Icon, label, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full sm:w-72 md:w-80 lg:w-96">
      <div className="flex items-center justify-center bg-azure-radiance-500 rounded-full w-12 h-12 mb-6 mx-auto">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-red-300 mb-2">{label}</h3>
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
};

export default ServiceCard;
