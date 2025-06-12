import { Tag } from "@/interfaces/Details/interface";
import TagComponent from "../ui/tag";

const Tags = ({ tags }: { tags: Tag[] }) => (
  <div className="w-full flex flex-col gap-4 mt-10">
    <p className="text-2xl font-bold">Tags</p>
    <div className="w-full flex flex-wrap gap-2 text-xs sm:text-sm">
      {tags.map((tag: Tag) => (
        <TagComponent key={tag.id}>
          {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
        </TagComponent>
      ))}
    </div>
  </div>
);

export default Tags;
