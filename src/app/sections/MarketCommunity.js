export default function MarketCommunity() {
    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/assets/images/commuity-bg.png")' }}>
            {/* Overlay (Optional) */}
            <div className="absolute inset-0"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start w-full h-full ">
                {/* Main Heading */}
                <div className="relative inline-block text-center text-white space-y-8 px-24 lg:px-24 mx-auto">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
                        <span className="text-black">Start building your </span>
                        <span className="text-greenPrimary">market</span>
                        <br />
                        <span className="text-greenPrimary">community </span>
                        <span className="text-black">today. </span>
                    </h1>
                </div>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-lg text-center text-lightGray leading-relaxed max-w-xs sm:max-w-md lg:max-w-full mt-8 mx-auto">
                    Join our community to stay updated with your favorite food producer or market.
                </p>




                {/* Buttons */}
                <div className="relative flex space-x-8 mt-8">
                    <div className="relative flex items-center">
                        <a
                            href="#"
                            className="px-10 py-4 bg-greenPrimary text-white rounded-full hover:bg-gray-600 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}
