import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold w-max">Contact me</h3>

      <div className="flex flex-col gap-4">
        <ContactButton
          icon={<XLogoIcon />}
          text="@meawcafe"
          href="https://x.com/meawcafe"
        />

        <ContactButton
          icon={<GithubLogoIcon />}
          text="/meawcafe"
          href="https://github.com/meawcafe"
        />

        <ContactButton
          icon={<LinkedinLogoIcon />}
          text="Milton M"
          href="https://www.linkedin.com/in/milton-m/"
        />

        <ContactButton
          icon={<MailboxIcon />}
          text="Mail me"
          href="mailto:milton.cafe.549@gmail.com"
        />
      </div>
    </div>
  );
}
