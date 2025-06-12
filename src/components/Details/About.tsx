const About = ({ description_raw }: { description_raw: string }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-10">
      <p className="text-2xl font-bold">About</p>
      {description_raw
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

export default About;
