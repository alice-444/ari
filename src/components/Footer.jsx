import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram, link: "#" },
    { icon: FaGithub, link: "https://github.com/alice-444/ari.git" },
  ];

  const links = [
    {
      title: "About",
      icon: "",
      links: [
        { name: "Legals mentions", href: "#" },
        { name: "Personal data", href: "#" },
        { name: "General terms and conditions", href: "#" },
        { name: "General terms and conditions", href: "#" },
      ],
    },
    {
      title: "Help",
      icon: "",
      links: [
        { name: "About us", href: "/about" },
        { name: "FAQs", href: "#" },
        { name: "How it works", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Payment policy", href: "#" },
      ],
    },
    {
      title: "Get in touch",
      icon: "",
      links: [
        { name: "customer@aribooks.com", href: "#" },
        { name: "+33 123 456 789", href: "tel:+33123456789" },
      ],
    },
  ];

  return (
    <footer className="bg-azure-radiance-50 py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2 xl:w-1/4">
          <Link href={"/"}>
            <img
              src="/assets/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="mt-0"
            />
          </Link>
          <p className="mt-6 text-lg leading-6 text-azure-radiance-400">
            Explore a vast selection of books for all tastes and ages. Dive into
            our collection and find your next exciting read today!
          </p>

          <div className="flex items-center gap-4 mt-8">
            {socialIcons.map((socialIcon, index) => (
              <a
                key={index}
                href={socialIcon.link}
                className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
              >
                <socialIcon.icon className="w-7 h-7 text-azure-radiance-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-3/4 mt-8 lg:mt-0">
          <div className="flex justify-between gap-8 px-7">
            {links.map((section, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
                <h3 className="text-2xl leading-6 font-medium mb-4 text-azure-radiance-500">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="mt-2 text-lg leading-6 text-azure-radiance-400 hover:text-azure-radiance-200 cursor-pointer"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-8 text-center text-azure-radiance-400">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ariBooks, Inc. All rights reserved.
        </div>
        <div className="text-sm mt-2">
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
