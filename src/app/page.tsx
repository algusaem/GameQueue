import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./providers";

export default function Home() {
  return (
    <Providers>
      <div className="w-full min-h-screen bg-gray-950 text-white flex flex-col">
        <Navbar />
        <Main />
      </div>
    </Providers>
  );
}
