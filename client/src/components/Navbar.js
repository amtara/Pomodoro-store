import React, { Fragment } from "react";
import { Search } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20 px-2 md:px-10">
        <div className="mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div>
            <Link to="/">
              <img
                className="h-10 w-auto"
                src="https://test-pomodoro.hm-dev.com/wp-content/uploads/2020/08/image1-removebg-preview-e1597251215323.png"
                alt="Workflow"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <MenuItem>
              <Link to="/cart">
                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </MenuItem>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link
                to="/pomodoro"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Notre engagement
              </Link>
              <Link
                to="/shop"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pomodoro collection
              </Link>
              <Link
                to="/faq"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Termes et conditions
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <MenuItem>
                <Link to="/cart">
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </MenuItem>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-left-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-3 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <img
                      className="h-10 w-auto"
                      src="https://test-pomodoro.hm-dev.com/wp-content/uploads/2020/08/image1-removebg-preview-e1597251215323.png"
                      alt="Pomodoro logo"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-2">
                <Link
                  to="/shop"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Nos collections
                </Link>
              </div>

              <div className="mt-6 sm:mt-2">
                <Link
                  to="/pomodoro"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pomodoro
                </Link>
              </div>
              <div className="mt-2 sm:mt-2">
                <Link
                  to="/faq"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Faq
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
