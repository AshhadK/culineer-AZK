export default function BusinessSection() {
    return (
        <div className="relative w-full max-w-6xl mx-auto mt-20 h-auto py-16 bg-lightPrimaryGreen shadow-lg rounded-[20px] overflow-hidden">
            {/* Content Container */}
            <div className="relative flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-8 z-10 px-6 md:pl-20">
                    {/* For Business Button */}
                    <button className="px-5 py-2 bg-lightBgGreen text-darkTextGreen font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                        For Business
                    </button>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-semibold text-greenPrimary leading-tight">
                        Producers<br /><span className="text-gray-500">&</span> <span className="text-black">Markets</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-base sm:text-lg text-gray-500">
                        Capture leads, engage customers, and track your marketing efforts with limited to no marketing expertise. Culineer makes growing your business easy!
                    </p>

                    {/* Points Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 flex items-center justify-center bg-greenPrimary text-white rounded-full">
                                ✓
                            </div>
                            <span className="text-base text-black">Increase sales and improve profits.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 flex items-center justify-center bg-greenPrimary text-white rounded-full">
                                ✓
                            </div>
                            <span className="text-base text-black">Streamlined marketing and data insights.</span>
                        </div>
                    </div>

                    {/* Upgrade Button */}
                    <button className="px-6 py-3 bg-greenPrimary text-white font-semibold rounded-full shadow-md hover:bg-gray-600 transition duration-300">
                        Upgrade to a Professional Account
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-end md:justify-center">
                    <img
                        src="/assets/images/for-business-image.png"
                        alt="Business Growth"
                        className="h-auto max-h-[380px] md:max-h-full w-auto object-contain md:object-right"
                    />
                </div>
            </div>
        </div>
    );
}
