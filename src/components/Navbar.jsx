import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { CartContext } from "@/db/CartContext.js";
import { AiOutlineMenu } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { TbMinusVertical } from "react-icons/tb";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Books", href: "/books", current: false },
  { name: "Blog", href: "#", current: false },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const { cartBooks } = useContext(CartContext);
  const { data: session } = useSession();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-azure-radiance-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <div className="flex-shrink-0 flex items-center">
                <h1 className="cursor-pointer text-3xl font-semibold text-azure-radiance-500">
                  <Link href="/">
                    <span className="text-red-300">ari</span>Books
                  </Link>
                </h1>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-azure-radiance-500 text-white shadow-lg"
                          : "text-gray-300 hover:bg-azure-radiance-400 hover:text-white hover:shadow-lg",
                        "rounded-lg px-3 py-2 text-xl font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {session ? (
                  <div className="sm:flex sm:gap-2 border-r pr-4">
                    <div className="h-9 w-9">
                      <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="h-full w-full rounded-full object-cover object-center"
                      />
                    </div>
                  </div>
                ) : (
                  ((
                    <Link href="/login">
                      <button className="rounded-full border border-azure-radiance-400 px-3 py-2 text-lg font-semibold text-azure-radiance-500 hover:bg-azure-radiance-400 hover:text-white hover:shadow-lg">
                        Sign in
                      </button>
                    </Link>
                  ),
                  (<TbMinusVertical className="hidden sm:block" />),
                  (
                    <Link href="/register">
                      <button className="rounded-full border border-azure-radiance-400 px-3 py-2 text-lg font-semibold text-azure-radiance-500 hover:bg-azure-radiance-400 hover:text-white hover:shadow-lg">
                        Sign up
                      </button>
                    </Link>
                  ))
                )}
                <TbMinusVertical className="hidden sm:block" />
                <Link
                  href="/cart"
                  className="ml-2 font-semibold items-center flex"
                >
                  <PiShoppingBagOpenDuotone className="w-6 h-6 text-azure-radiance-500" />
                  {cartBooks.length}
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
                      : "text-gray-300  hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white hover:shadow-lg",
                    "block rounded-full py-3 px-8 text-xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
