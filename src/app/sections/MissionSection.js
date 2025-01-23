export default function MissionSection() {
    return (
        <section className="py-12 px-4 mx-8 my-24 lg:mx-auto sm:px-24 lg:px-12 lg:my-48 max-w-5xl min-w-sm relative space-y-10">
            {/* Background Image for the First Word */}
            <div className="relative">
                <div className="relative inline-block">
                    <img
                        src="/assets/images/quotes.png" // Replace with your image path
                        alt="Decorative Quotes"
                        className="absolute -top-10 sm:-top-14 -left-6 sm:-left-8 w-16 sm:w-20 lg:w-24 sm:w-20 sm:h-20 lg:h-24 translate-y-[-5px] translate-x-[-10px] z-0"
                    />
                    <div className="relative z-10 text-left">
                        <p className="text-5xl font-bold leading-snug lg:leading-relaxed">
                            Culineer is on a{" "}
                            <span className="text-gray-600">mission to build</span> a more
                            sustainable{" "}
                            <span className="text-greenPrimary">world by making it easy</span>
                            <span className="text-gray-600"> for people</span>
                            <span className="text-black"> to eat locally produced foods.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="mt-6 flex items-center space-x-4">
                <img
                    src="assets/images/john.jpg" // Replace with the image path
                    alt="John Doe"
                    className="w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-left">
                        John Doe
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-500 text-left">
                        CEO and Founder
                    </p>
                </div>
            </div>
        </section>
    );
}
