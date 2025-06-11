const Body = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-2 mt-auto mb-4 px-4 sm:px-6 lg:px-0">
      {data.description_raw
        .trim()
        .split("\n")
        .map(
          (line: string, i: number) =>
            line && (
              <p key={i} className="text-xl text-gray-300 mb-6">
                {line}
              </p>
            )
        )}
    </div>
  );
};

export default Body;
