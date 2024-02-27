import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import ServiceCard from "@/components/home/ServiceCard.jsx";

const Services = [
  { icon: TbTruckDelivery, label: "Quick Delivery", text: "Enjoy shopping with our fast and reliable delivery service" },
  { icon: MdOutlinePayment, label: "Payment Security", text: "Experience worry-free transactions with our secure payment options" },
  { icon: BiSupport, label: "Dedicated Support", text: "Our dedicated team is here to assist you every step of the way" },
];

const Service = () => {
  return (
    <div>
      <section className="max-container flex justify-center flex-wrap gap-9 px-20">
        {Services.map((service) => (
          <ServiceCard key={service.label}{...service}/>
        ))}
      </section>
    </div>
  );
};

export default Service;
