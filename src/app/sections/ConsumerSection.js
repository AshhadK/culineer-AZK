export default function ConsumerSection() {
    return (
        <div className="relative w-full max-w-6xl mx-auto mt-20 h-auto py-16 bg-lightPrimaryGreen shadow-lg rounded-[20px] overflow-hidden">
            {/* Content Container */}
            <div className="relative flex flex-col md:flex-row-reverse items-start justify-between space-y-8 md:space-y-0">
                {/* Right Section */}
                <div className="w-full md:w-1/2 space-y-8 z-10 px-6 md:pr-20">
                    {/* For Consumers Button */}
                    <button className="px-5 py-2 bg-lightBgGreen text-darkTextGreen font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                        For Consumers
                    </button>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-500 leading-tight">
                        Home <span className="text-greenPrimary">Cooks</span> & <br /><span className="text-black">Chefs</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-base sm:text-lg text-gray-500">
                        Find local producers in your area, get reminders to go to market, know what's available each week. Learn about ingredients and growing practices, be inspired by new recipes.
                    </p>

                    {/* Points Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 flex items-center justify-center bg-greenPrimary text-white rounded-full">
                                ✓
                            </div>
                            <span className="text-base text-black">Easier access to local ingredients.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 flex items-center justify-center bg-greenPrimary text-white rounded-full">
                                ✓
                            </div>
                            <span className="text-base text-black">Improved eating habits and confidence in food quality.</span>
                        </div>
                    </div>

                    {/* Upgrade Button */}
                    <button className="px-6 py-3 bg-greenPrimary text-white font-semibold rounded-full shadow-md hover:bg-gray-600 transition duration-300">
                        Join the Culineer Community
                    </button>
                </div>

                {/* Left Section */}
                <div className="w-full md:w-1/2 flex justify-start pr-6 md:pr-0">
                    <img
                        src="/assets/images/for-consumers-image.png"
                        alt="Business Growth"
                        className="h-auto max-h-[380px] md:max-h-full w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
