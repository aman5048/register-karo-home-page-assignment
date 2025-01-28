export const BlogCard = ({ data }) => {
  return (
    <>
      <div className=" overflow-hidden bg-white flex flex-col">
        <img
          src={data.image}
          alt={data.image}
          className="h-60 object-cover w-full"
        />

        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <p className="text-xs font-medium text-gray-400">
              {data.name} • {data.date}
            </p>
            <h3 className="text-lg font-bold text-gray-800">{data.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{data.description}</p>
          </div>
          <div className="mt-4">
            <div className="mt-2 flex flex-wrap gap-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-lg"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
