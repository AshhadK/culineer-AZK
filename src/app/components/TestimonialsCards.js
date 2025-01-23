export default function TestimonialCard({ image, text, name, role, profileImage }) {
    return (
        <div className="max-w-sm h-[450px] rounded-lg overflow-hidden shadow-lg flex flex-col my-20">
            {/* Image */}
            <div className="w-full h-1/2 flex-shrink-0">
                <img
                    src={image}
                    alt="Food"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Text Content */}
            <div className="flex-grow p-6 flex flex-col justify-between h-1/2 overflow-hidden bg-white">
                <p
                    className="text-lg text-gray-700 font-medium mb-4 line-clamp-4 overflow-hidden"
                    style={{ wordBreak: "break-word" }}
                >
                    {`"${text}"`}
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                    <img
                        src={profileImage}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{name}</p>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
