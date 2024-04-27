import { LazyExoticComponent, lazy } from "react";

import house from "@/images/house";
import jobs from "@/images/jobs";
import liIcon from "@/images/li-icon";
import messages from "@/images/messages";
import notifications from "@/images/notifications";
import people from "@/images/people";

export enum Icons {
  house = "house",
  jobs = "jobs",
  liIcon = "liIcon",
  messages = "messages",
  notifications = "notifications",
  people = "people",
}

const icons: Record<Icons, () => JSX.Element> = {
  house,
  jobs,
  liIcon,
  messages,
  notifications,
  people,
};

type SvgIconProps = {
  icon: Icons;
};

const SvgIcon = (props: SvgIconProps) => {
  const { icon } = props;
  return icons[icon]();
};

export default SvgIcon;
