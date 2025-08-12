import {
  BriefcaseIcon,
  ChatCircleTextIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LightningIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <NavbarButton
        icon={<UserCircleIcon />}
        label={"About me"}
        buttonId={"about-me"}
      />
      <NavbarButton
        icon={<GraduationCapIcon />}
        label={"Education"}
        buttonId={"education"}
      />
      <NavbarButton
        icon={<BriefcaseIcon />}
        label={"Work Experience"}
        buttonId={"work-experience"}
      />
      <NavbarButton
        icon={<LightningIcon />}
        label={"Skills & Tools"}
        buttonId={"skills"}
      />
      <NavbarButton
        icon={<FolderOpenIcon />}
        label={"My Projects"}
        buttonId={"projects"}
      />
      <NavbarButton
        icon={<ChatCircleTextIcon />}
        label={"Contact me"}
        buttonId={"contact-me"}
      />
    </div>
  );
}
