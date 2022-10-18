import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header aria-label="Site Header" className="bg-blue-200">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to={"/"} className="text-2xl font-bold">FRPC</Link>
                    </div>
                    <div className="">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-3 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/orders">
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" to="/inventory">
                                        Inventory
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                    href="/"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Navbar;