import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/types/Article";
import { ReactOriginal } from "devicons-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
export const ArticleCard2: FunctionComponent<Article> = ({
  author,
  description,
  title,
  createAt = new Date(),
  tags,
  cover,
}) => {
  return (
    <Card>
      <CardHeader className="flex items-center md:flex-row gap-6">
        {cover && (
          <div
            className="md:w-1/4 w-full aspect-video rounded-lg bg-accent shadow-md"
            style={{
              background: `hsl(var(--accent)) url('${cover}') no-repeat center / cover`,
            }}
          ></div>
        )}
        <div>
          <div className="flex gap-2 justify-start mb-2 items-center">
            {tags.map((tag, key) => (
              <Badge key={key} variant="secondary" className="space-x-1">
                <ReactOriginal /> <span>{tag.name}</span>
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>
            {dayjs(createAt).format("MMMM DD, YYYY")}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-justify">{description}</div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-muted-foreground text-sm">
            <Link
              href={"https://arthurmonney.me"}
              className="font-bold hover:text-primary hover:underline"
            >
              {author.username}
            </Link>
          </div>
        </div>

        <Link href={"/article/1"} className="font-bold text-primary underline">
          Read article
        </Link>
      </CardFooter>
    </Card>
  );
};
