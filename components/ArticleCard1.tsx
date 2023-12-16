import { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ReactOriginal } from "devicons-react";
import Link from "next/link";
export const ArticleCard1: FunctionComponent<{ id: number }> = ({ id }) => {
  return (
    <Link href={"/article/1"}>
      <div className="h-64 rounded-md">
        <div className="w-full h-full rounded-md bg-gradient-to-b from-transparent to-accent flex items-end p-4 relative">
          <div className="absolute top-0 right-0 p-4 flex gap-2">
            <Badge variant="secondary" className="space-x-1">
              <ReactOriginal /> <span>React</span>
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">Discover WEB 3.0</h3>
              <p className="text-xs">November 23, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
