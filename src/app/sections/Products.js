import MultiTab from '../components/MultiTab';
export default function Products() {
    return (
        <div className="relative w-full h-auto bg-contain bg-center" style={{ backgroundImage: 'url("/assets/images/center-circle.png")' }}>
            {/* Overlay (Optional) */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-0 w-full h-full text-white space-y-8 px-4 md:px-0">
                {/* Main Heading */}
                <div className="relative inline-block text-center">
                    {/* Decorative Image */}
                    <h1 className="text-4xl md:text-5xl text-black font-bold text-center leading-tight md:leading-normal">
                        <span className="text-greenPrimary"> Connecting Farmers </span>
                        and Home Cooks <br />
                        for a Thriving Food
                        <span className="text-greenPrimary">  Community! </span>
                    </h1>
                </div>
                {/* Subheading */}
                <p className="text-md lg:text-lg md:text-md text-center text-lightGray md:leading-relaxed">
                    A platform that connects farmers, producers, and home cooks to promote local, sustainable food.
                </p>
                <MultiTab />
            </div>
        </div>
    );
}
