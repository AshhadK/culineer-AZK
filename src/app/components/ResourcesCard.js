export default function ResourcesCard({ image, date, author, title }) {
  return (
    <div className="flex flex-col items-center w-[350px]">
      {/* Card Section */}
      <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden border">
        {/* Image Section */}
        <div className="h-full">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full mt-4 text-left">
        <p className="text-gray-500 text-sm">
          {date} <span className="font-medium">{author}</span>
        </p>
        <h3 className="mt-2 text-gray-800 font-semibold text-md">{title}</h3>
      </div>
    </div>
  );
}
