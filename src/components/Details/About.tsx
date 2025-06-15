const About = ({ description_raw }: { description_raw: string }) => {
  return (
    <>
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
    </>
  );
};

export default About;
