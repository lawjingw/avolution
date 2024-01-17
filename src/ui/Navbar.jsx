import { Disclosure, Transition } from "@headlessui/react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import OrderOnline from "./OrderOnline";
import { SlArrowRight } from "react-icons/sl";
import { Fragment } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutUs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full bg-color-2 shadow-md sm:static sm:shadow-none"
    >
      {({ open }) => (
        <>
          <div className="mx-2 max-w-6xl px-2 py-5 sm:mx-auto sm:px-4">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full border-2 border-slate-300 p-2 px-3 py-2 text-color-1">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineXMark
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineBars3
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="my-1 hidden flex-shrink-0 items-center sm:flex">
                  <Logo />
                </div>
                <span className="text-3xl font-extrabold sm:hidden">
                  AVOLUTION
                </span>
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="rounded-full px-5 py-3.5 text-lg font-bold transition duration-300 hover:bg-color-3"
                      >
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "border-b-4 border-color-1 pb-1" : ""
                            }
                          >
                            {item.name}
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <OrderOnline />
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="flex items-center justify-between rounded-full px-6 py-2 text-base font-medium transition duration-300 hover:bg-color-3"
                    aria-current={item.current ? "page" : undefined}
                  >
                    <span
                      className={
                        item.current
                          ? "border-b-4 border-color-1 pb-1"
                          : undefined
                      }
                    >
                      {item.name}
                    </span>
                    <SlArrowRight className="inline" />
                  </Disclosure.Button>
                ))}
                <div className="mx-2 border-t-2 pt-3">
                  <OrderOnline device="mobile" />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
