import { ReactNode } from "react";
import About from "./About";
import Screenshots from "./Screenshots";
import Tags from "./Tags";
import Stores from "./Stores";
import { BodyProps } from "@/interfaces/Details/interface";

const Body = ({ data }: { data: BodyProps }) => {
  const areTags = data.tags && data.tags.length > 0;
  const isData =
    data.description_raw ||
    data.screenshots_count ||
    areTags ||
    data.stores.length > 0;

  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-4 mt-auto px-4 sm:px-6 lg:px-0 pb-4">
      {data.description_raw && (
        <Section title="About">
          <About description_raw={data.description_raw} />
        </Section>
      )}

      {data.screenshots_count > 0 && (
        <Section title="Screenshots">
          <Screenshots slug={data.slug} />
        </Section>
      )}

      {areTags && (
        <Section title="Tags">
          <Tags tags={data.tags} />
        </Section>
      )}

      {data.stores.length > 0 && (
        <Section title="Where to buy">
          <Stores slug={data.slug} storeData={data.stores} />
        </Section>
      )}

      {!isData && (
        <div className="w-full flex items-center justify-center py-8">
          <p className="text-xl">
            There is no more information about this game yet, please come back
            later.
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="w-full flex flex-col gap-4 mt-10">
    <p className="text-2xl font-bold">{title}</p>
    {children}
  </div>
);
