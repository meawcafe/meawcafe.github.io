import {
  BriefcaseIcon,
  ChatCircleTextIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LightningIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import NavbarButton from "./NavbarButton";

export default function Navbar({ focusedFeedItemId }) {
  return (
    <div className="flex flex-col gap-2">
      <NavbarButton
        icon={<UserCircleIcon />}
        label={"About me"}
        buttonId={"about-me"}
        {...{ focusedFeedItemId }}
      />
      <NavbarButton
        icon={<GraduationCapIcon />}
        label={"Education"}
        buttonId={"education"}
        {...{ focusedFeedItemId }}
      />
      <NavbarButton
        icon={<BriefcaseIcon />}
        label={"Work Experience"}
        buttonId={"work-experience"}
        {...{ focusedFeedItemId }}
      />
      <NavbarButton
        icon={<LightningIcon />}
        label={"Skills & Tools"}
        buttonId={"skills"}
        {...{ focusedFeedItemId }}
      />
      <NavbarButton
        icon={<FolderOpenIcon />}
        label={"My Projects"}
        buttonId={"projects"}
        {...{ focusedFeedItemId }}
      />
      <NavbarButton
        icon={<ChatCircleTextIcon />}
        label={"Contact me"}
        buttonId={"contact"}
        {...{ focusedFeedItemId }}
      />
    </div>
  );
}
