import useFetchStores from "@/hooks/useFetchStores";
import { StoreProps, StoresProps } from "@/interfaces/Details/interface";
import {
  BsNintendoSwitch,
  BsPlaystation,
  BsSteam,
  BsXbox,
} from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";
import { Button } from "../ui/button";

const StoreIcons = [
  {
    name: "playstation-store",
    icon: <BsPlaystation className="h-8 w-8 text-blue-500" />,
  },
  { name: "xbox-store", icon: <BsXbox className="h-8 w-8 text-green-500" /> },
  { name: "steam", icon: <BsSteam className="h-8 w-8 text-blue-800" /> },
  {
    name: "nintendo",
    icon: <BsNintendoSwitch className="h-8 w-8 text-red-600" />,
  },
];

const Stores = ({ slug, storeData }: StoresProps) => {
  const { data: stores } = useFetchStores(slug);

  if (!stores?.results?.length) return null;

  return (
    <div className="flex flex-col w-full gap-4">
      {stores.results.map((store: StoreProps) => {
        const result = storeData.find((r) => r.id === store.id);
        if (!result) return null;

        const matchedIcon = StoreIcons.find((s) => s.name === result.store.slug)
          ?.icon ?? <IoLogoGameControllerB className="h-8 w-8 text-pink-400" />;

        return (
          <div
            key={store.id}
            className="w-full flex items-center justify-between bg-gray-800 rounded-sm p-4"
          >
            <div className="flex gap-4 items-center">
              <div className="bg-white/90 p-1 rounded-xs items-center justify-center">
                {matchedIcon}
              </div>
              <p className="text-gray-200 font-semibold text-xl">
                {result.store.name}
              </p>
            </div>
            <a href={store.url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gray-600 hover:bg-gray-500 rounded-sm">
                Visit store
              </Button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Stores;
