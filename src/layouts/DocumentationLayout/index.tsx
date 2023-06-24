import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { classNames } from "../../utils/className";
import { componentsData, gettingStartedData } from "../../data";
import logo from "../../assets/images/creative-widget-logo.png";
export default function DocumentationLayout() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-4 md:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center px-2 md:px-0">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        className="h-8 w-auto cursor-pointer"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link to="/documentation">
                        <p className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                          Documentation
                        </p>
                      </Link>
                      <Link to="/components"> 
                        <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                          Components
                        </p>
                      </Link>

                      <Link to="/about">
                        <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                          About Us
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-2 md:ml-6 md:justify-end">
                  <div className="w-full max-w-lg md:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
                  <Link to="/documentation">Documentation</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Link to="/components">Components</Link>
                </Disclosure.Button>
                <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Link to="/about">About Us</Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <NavigationMenu></NavigationMenu>
      <footer className="bg-white absolute bottom-0 border-t w-full">
        <div className="mx-auto max-w-7xl px-6 py-2 md:flex md:items-center md:justify-between md:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 Creative Widget built by{" "}
              <span className="text-black cursor-pointer">Jakesdev</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavigationMenu() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:flex md:w-56 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 border-r border-gray-200 bg-white px-6 pb-4 overflow-y-scroll h-[calc(100vh-100px)]">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 mt-4">
                <li>
                  <div className="text-md font-semibold leading-6 text-gray-600">
                    Getting Started
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {gettingStartedData.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href}>
                          <p
                            className={classNames(
                              item.current
                                ? "bg-gray-50 text-red-600"
                                : "text-gray-500 hover:text-red-600 hover:bg-gray-50",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <span className="truncate">{item.name}</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-md font-semibold leading-6 text-gray-600">
                    Components
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {componentsData.map((com) => (
                      <li key={com.name}>
                        <Link to={com.href}>
                          <p
                            className={classNames(
                              com.current
                                ? "bg-gray-50 text-red-600"
                                : "text-gray-500 hover:text-red-600 hover:bg-gray-50",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <span className="truncate">{com.name}</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {isMobile ? (
          <div className="text-gray-500 md:hidden flex items-center justify-center py-32">
            We are not support mobile version yet!
          </div>
        ) : (
          <div className="md:pl-56">
            <main className="py-10">
              <div className="px-4 sm:px-6 md:px-8">
                {" "}
                <Outlet />
              </div>
            </main>
          </div>
        )}
      </div>
    </>
  );
}
