const ServiceCard = ({ icon: Icon, label, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="flex items-center justify-center bg-azure-radiance-500 rounded-full w-12 h-12 mb-6 mx-auto">
        <Icon className="w-8 h-8 text-white mx-auto mb-4" />
      </div>
      <h3 className="text-2xl font-semibold text-red-300 mb-2">{label}</h3>
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
};

export default ServiceCard;
