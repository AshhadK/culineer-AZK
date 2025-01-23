import Image from 'next/image';

const ResultSection = ({ heading, text, imageName, right = false }) => {
    return (
        <div className={`flex items-center justify-between max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg space-x-4 ${right ? 'flex-row-reverse' : ''}`}>
            {/* Image Section */}
            <div className="w-1/6 flex-shrink-0">
                <Image
                    src={`/assets/images/${imageName}`}
                    alt="Result Image"
                    width={120}
                    height={120} // Adjust height for consistency
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col space-y-1">
                <h2 className="text-sm font-semibold text-black">{heading}</h2> {/* Reduced font size */}
                <p className="text-xs text-gray-500">{text}</p> {/* Reduced font size */}
            </div>
        </div>
    );
};

export default ResultSection;

