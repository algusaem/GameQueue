import Providers from "@/app/providers";
import Details from "@/components/Details/Details";
import Navbar from "@/components/Navbar/Navbar";

type Params = Promise<{ slug: string }>;

const DetailsPage = async ({ params }: { params: { slug: Params } }) => {
  const { slug } = await params;

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white flex flex-col">
      <Providers>
        <Navbar />
        <Details slug={slug} />
      </Providers>
    </div>
  );
};

export default DetailsPage;
