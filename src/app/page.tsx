import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
      <Main />
    </div>
  );
}
