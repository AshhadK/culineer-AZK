export default function HeroSection() {
    return (
        <div className="relative w-full h-[110vh] bg-cover bg-center" style={{ backgroundImage: 'url("/assets/images/bg.jpg")' }}>
            {/* Overlay (Optional) */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-16 sm:pt-20 w-full h-full text-white space-y-6 sm:space-y-8">
                {/* Main Heading */}
                <div className="relative inline-block text-center px-4 sm:px-0">
                    {/* Decorative Image */}
                    <img
                        src="/assets/images/three-lines.png"
                        alt="Decorative lines"
                        className="absolute -top-10 sm:-top-12 -left-8 sm:-left-12 w-16 sm:w-20 h-16 sm:h-20"
                    />
                    <img
                        src="/assets/images/group-1.png"
                        alt="Decorative lines"
                        className="absolute -top-0 -left-[20%] sm:-left-[30%] w-40 sm:w-64 z-999999"
                    />
                    <img
                        src="/assets/images/group-2.png"
                        alt="Decorative lines"
                        className="absolute -top-12 sm:-top-20 -right-[20%] sm:-right-[30%] w-40 sm:w-64 z-999999"
                    />
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
                        <span className="text-black">Discover and </span>
                        <span className="text-greenPrimary">Support</span>
                        <br />
                        <span className="text-black">Your </span>
                        <span className="text-greenPrimary">Local Food</span>
                        <span className="text-black"> Heroes</span>
                    </h1>
                </div>

                {/* Subheading */}
                <p className="text-sm sm:text-lg md:text-xl text-center max-w-xl px-4 sm:px-0 text-lightGray">
                    Connecting consumers with local food producers for a healthier, sustainable future.
                </p>

                {/* Buttons */}
                <div className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-6 sm:mt-8">
                    <a
                        href="#"
                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white border-2 border-light-gray text-black font-bold rounded-full text-sm sm:text-base hover:bg-greenPrimary hover:text-white transition-all duration-300"
                    >
                        Join as a Consumer
                    </a>
                    <div className="relative flex items-center">
                        <a
                            href="#"
                            className="px-6 sm:px-10 py-3 sm:py-4 bg-greenPrimary text-white rounded-full text-sm sm:text-base hover:bg-gray-600 transition-all duration-300"
                        >
                            Upgrade your Business
                        </a>
                        {/* Arrow pointing to the button */}
                        <img
                            src="/assets/images/green-arrow.png"
                            alt="Arrow pointing to Upgrade your Business"
                            className="absolute -top-12 sm:-top-16 -right-[50%] sm:-right-[60%] w-20 sm:w-32 h-20 sm:h-32"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16 mt-10 sm:mt-12">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black">200+</h2>
                        <p className="text-lg sm:text-xl text-lightGray">Total Producers</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black">199+</h2>
                        <p className="text-lg sm:text-xl text-lightGray">Happy Customers</p>
                    </div>
                </div>

                {/* Decorative Section */}
                <div className="w-full flex justify-center items-end pb-6 sm:pb-8 absolute bottom-0">
                    <div
                        className="w-[90%] sm:w-[80%] lg:w-[70%] h-60 sm:h-80 lg:h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{ backgroundImage: 'url("/assets/images/haha.png")' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
