import { Card } from "../ui/card";

const Content = () => {
  return (
    <div className="flex-grow w-full px-4 lg:px-0 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8 ">
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
      <CardItem>asdad</CardItem>
    </div>
  );
};

export default Content;

const CardItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="p-4 bg-transparent text-white min-h-58 h-full">
      {children}
    </Card>
  );
};
