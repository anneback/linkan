import LiIcon from "@/images/li-icon";
import Link from "next/link";
import GlobalLink from "./GlobalLink";
import { Icons } from "./SvgIcon";

const GlobalNav = () => {
  return (
    <header className="flex items-center py-2 shadow">
      <LiIcon />
      <input
        className="rounded border bg-sky-100"
        type="text"
        placeholder="Search"
      />
      <GlobalLink icon={Icons.house} href="/" text="Startpage" />
      <GlobalLink icon={Icons.people} href="/" text="Your Network" />
      <GlobalLink icon={Icons.jobs} href="/" text="Jobs" />
      <GlobalLink icon={Icons.messages} href="/" text="Messages" />
      <GlobalLink icon={Icons.notifications} href="/" text="Notifications" />
      <div>You</div>
    </header>
  );
};

export default GlobalNav;
