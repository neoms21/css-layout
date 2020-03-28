import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as MyFiles } from "../assets/folder.svg";
import { ReactComponent as RecentFiles } from "../assets/folder-minus.svg";
import { ReactComponent as SharedFiles } from "../assets/folder-plus.svg";
import { ReactComponent as FileRequest } from "../assets/headphones.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";

export const sideBarItems = [
  { Icon: Search, label: "Search" },
  { Icon: MyFiles, label: "My Files" },
  { Icon: RecentFiles, label: "Recent Files" },
  { Icon: SharedFiles, label: "Shared Files" },
  { Icon: FileRequest, label: "File Request" },
  { Icon: Trash, label: "Trash" }
];
