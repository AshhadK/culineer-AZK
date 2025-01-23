import TestimonialSlider from "../components/Testimonials";

export default function ClientFeedback() {
    return (
        <div className="relative w-full h-auto bg-cover bg-center bg-no-repeat bg-[#F3F9ED] overflow: hidden; white-space: nowrap;">
            {/* Overlay (Optional) */}
            <div className="absolute inset-0"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-36 w-full h-full text-white space-y-8" >
                {/* Main Heading */}
                <div className="relative inline-block text-center text-white space-y-8 px-24 lg:px-24 mx-auto">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">

                        <span className="text-black"> See what our </span>
                        <span className="text-greenPrimary"> Clients Said </span>
                        <span className="text-black">about us. </span>
                    </h1>
                </div>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-lg text-center text-lightGray leading-relaxed max-w-xs sm:max-w-md lg:max-w-full mt-8 mx-auto">
                    Join our community to stay updated with your favorite food producer or market.
                </p>

                <TestimonialSlider />

            </div>
        </div>
    );
}
