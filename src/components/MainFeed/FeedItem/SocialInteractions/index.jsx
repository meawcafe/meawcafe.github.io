import {
  EyeIcon,
  HeartIcon,
  ChatCircleIcon,
  ShareFatIcon,
  BookmarkSimpleIcon,
} from "@phosphor-icons/react";
import InteractionItem from "./InteractionItem";

export default function SocialInteractions({ views, likes, comments, shares }) {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-4">
        <InteractionItem
          icon={HeartIcon}
          count={likes}
          checkedColor="var(--danger1)"
          enableInteraction={true}
        />
        <InteractionItem
          icon={ChatCircleIcon}
          count={comments}
          checkedColor="var(--success1)"
        />
        <InteractionItem
          icon={EyeIcon}
          count={views}
          checkedColor="var(--secondary1)"
        />
      </div>
      <div className="flex gap-4">
        <InteractionItem
          icon={BookmarkSimpleIcon}
          checkedColor="var(--success1)"
          enableInteraction={true}
        />
        <InteractionItem
          icon={ShareFatIcon}
          count={shares}
          checkedColor="var(--success2)"
          enableInteraction={true}
        />
      </div>
    </div>
  );
}
