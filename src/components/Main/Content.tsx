import useFetchNewThisMonth from "@/hooks/useFetchNewThisMonth";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const Content = () => {
  const { data: newGames, isLoading, isError, error } = useFetchNewThisMonth();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  console.log(newGames);
  return (
    <div className="flex-grow w-full px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8">
      <CardItem>
        {/* Header */}
        <div className="w-full h-1/3 rounded-t-md bg-gray-600">Header</div>

        {/* Body */}
        <div className="w-full mb-auto p-4 flex-1 bg-amber-600">Body</div>

        {/* Footer */}
        <div className="w-full p-4 flex justify-center">
          <Button
            className="h-full bg-gray-600 hover:bg-gray-500 w-full"
            variant="default"
          >
            More info
          </Button>
        </div>
      </CardItem>
    </div>
  );
};

export default Content;

const CardItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="bg-transparent text-white min-h-120 max-h-full gap-0">
      {children}
    </Card>
  );
};
