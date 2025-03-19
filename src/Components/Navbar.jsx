import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed md:top-4 top-1  w-full   text-white p-4 z-1 ">
            <div className="container mx-auto  bg-gray-600 h-14 rounded-2xl md:rounded-lg px-5 md:px-10  flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl md:block hidden font-bold text-yellow-400">MyPortfolio</h1>
                <h1 className="text-xl  block font-bold md:hidden text-yellow-300" >Moheed Dar</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    {["home", "projects", "skills", "contact"].map((section) => (
                        <li key={section} className="cursor-pointer">
                            <Link
                                to={section}
                                smooth={true}
                                duration={700}
                                className="hover:text-yellow-400 transition-all"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <button className="md:hidden text-green-400 hover:text-green-700" onClick={() => setIsOpen(true)}>
                    <FaBarsStaggered size={24} />
                </button>
            </div>

            {/* Mobile Menu (With Close Button & AnimatePresence) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }} // Slide in from right
                        animate={{ opacity: 1, x: 0 }} // Bring into view
                        exit={{ opacity: 0, x: "100%" }} // Slide out to right
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-[210px] rounded-bl-3xl rounded-tl-3xl rounded-br-xl   h-[500px] bg-green-800 p-6 flex flex-col items-start pt-10 z-50"
                    >
                        {/* Close Button (Cross Icon) */}
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Menu Items */}
                        <ul className="flex flex-col gap-6 mt-10">
                            {["home", "projects", "skills", "contact"].map((section, index) => (
                                <motion.li
                                    key={section}
                                    initial={{ opacity: 0, x: 20 }} // Stagger animation from right
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={700}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-gray-300 hover:text-yellow-400 transition-all"
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
