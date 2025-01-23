import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
    return (
        <div>
            <nav className="flex items-center flex-col lg:flex-row space-y-8 justify-between py-4 bg-white px-16 mt-12">
                {/* Logo on the left */}
                <div className="flex items-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                    />
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col lg:flex-row space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 justify-center'>
                    <ul className="flex justify-center space-x-8 text-base font-medium">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-green-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-green-500">
                                Farmers Market
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-green-500">
                                Producers
                            </a>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-8 text-base font-medium">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-green-500">
                                Home Cooks
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-green-500">
                                Directory
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Social Media Icons on the right */}
                <div className="flex space-x-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Footer Section */}
            <div className="flex items-center justify-between px-16 pt-4 pb-8 text-sm text-gray-600 flex-col space-y-4 lg:flex-row lg:space-y-0">
                {/* Copyright */}
                <div>© 2024 Culineer. All rights reserved.</div>

                {/* Links */}
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-green-500">Terms & Conditions</a>
                    <a href="#" className="hover:text-green-500">Privacy & Policy</a>
                </div>
            </div>
        </div>
    );
}
