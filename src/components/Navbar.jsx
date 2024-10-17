import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { TbMinusVertical } from "react-icons/tb";
import { CartContext } from "@/db/CartContext.js";
import { FaBook, FaQuoteRight } from "react-icons/fa";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Books", href: "/books", current: false, icon: <FaBook /> },
  { name: "Blog", href: "#", current: false, icon: <FaQuoteRight /> },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const { cartBooks } = useContext(CartContext);
  const { data: session } = useSession();

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gradient-to-r from-blue-500 to-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-azure-radiance-400 transition duration-300 ease-in-out">
                  {open ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <h1 className="cursor-pointer text-3xl font-semibold text-azure-radiance-500 hover:text-blue-600 transition duration-300 ease-in-out">
                  <Link href="/">
                    <span className="text-red-500">ari</span>Books
                  </Link>
                </h1>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-b-2 border-blue-500 text-blue-500"
                          : "text-gray-500 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out",
                        "flex items-center space-x-2 px-3 py-2 text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                {!session && (
                  <div className="flex items-center space-x-3">
                    <Link
                      href="/login"
                      className="rounded-full bg-gradient-to-r from-azure-radiance-500 to-azure-radiance-300 px-5 py-2 text-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-full bg-gradient-to-r from-green-400 to-teal-300 px-5 py-2 text-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                      Sign up
                    </Link>
                  </div>
                )}

                <TbMinusVertical className="hidden sm:block text-gray-300" />

                <Link href="/cart" className="flex items-center ml-4">
                  <PiShoppingBagOpenDuotone className="w-6 h-6 text-azure-radiance-500" />
                  <span className="ml-2 text-black font-semibold">
                    {cartBooks.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gradient-to-r from-azure-radiance-500 to-indigo-500 text-white shadow-lg"
                      : "text-gray-500 hover:bg-gradient-to-r hover:from-azure-radiance-500 hover:to-indigo-500 hover:text-white hover:shadow-lg transition duration-300 ease-in-out",
                    "block rounded-full py-3 px-8 text-xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {session ? (
                <>
                  <Disclosure.Button
                    as={Link}
                    href="/profile"
                    className="block rounded-full py-3 px-8 text-xl font-medium text-gray-300 hover:bg-gradient-to-r hover:from-azure-radiance-500 hover:to-indigo-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Mon profil
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href="/api/auth/signout"
                    className="block rounded-full py-3 px-8 text-xl font-medium text-gray-300 hover:bg-gradient-to-r hover:from-azure-radiance-500 hover:to-indigo-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Déconnexion
                  </Disclosure.Button>
                </>
              ) : (
                <>
                  <Disclosure.Button
                    as={Link}
                    href="/login"
                    className="block rounded-full py-3 px-8 text-xl font-medium text-gray-300 hover:bg-gradient-to-r hover:from-azure-radiance-500 hover:to-indigo-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Sign in
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    href="/register"
                    className="block rounded-full py-3 px-8 text-xl font-medium text-gray-300 hover:bg-gradient-to-r hover:from-azure-radiance-500 hover:to-indigo-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Sign up
                  </Disclosure.Button>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
