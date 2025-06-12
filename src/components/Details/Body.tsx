import About from "./About";
import Screenshots from "./Screenshots";
import Tags from "./Tags";

const Body = ({ data }) => {
  const areTags = data.tags && data.tags.length > 0;
  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-4 mt-auto px-4 sm:px-6 lg:px-0 pb-4">
      <About description_raw={data.description_raw} />
      <Screenshots slug={data.slug} />
      {areTags && <Tags tags={data.tags} />}
    </div>
  );
};

export default Body;
