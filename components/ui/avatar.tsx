import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
interface AvatarProps {
  username?: string;
  avatar?: string;
  variant?: "dark" | "light";
}
export const Avatar: FunctionComponent<AvatarProps> = ({
  avatar,
  username,
  variant = "dark",
}) => {
  return (
    <div
      className={cn(
        "p-2 backdrop-blur-lg rounded-full flex space-x-4 items-center shadow",
        variant === "dark"
          ? "bg-primary/30 text-primary-foreground"
          : "bg-primary-foreground/30 text-primary"
      )}
    >
      <div
        className="w-10 h-10 rounded-full bg-white"
        style={{
          background: `url('${
            avatar || "https://laravel.cm/media/197/profile-pic-zinc.png"
          }') no-repeat center / cover`,
        }}
      ></div>
      {username && <div className="font-bold pr-6">{username}</div>}
    </div>
  );
};
