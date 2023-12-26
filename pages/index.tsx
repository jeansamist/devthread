import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div
        className="m-8 bg-muted rounded-sm text-primary-foreground min-h-[575px] h-[70vh] relative overflow-hidden"
        style={{
          background:
            "url('https://miro.medium.com/v2/resize:fit:1358/1*U62pEikCBvM1gjIDlAry7Q.png') no-repeat center / cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary flex items-end justify-start p-16 ">
          <div className="absolute right-1/2 translate-x-1/2 md:translate-x-0 top-8 md:right-8">
            <Avatar username="Jeansamist" />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 text-md md:text-xl text-center md:text-left flex flex-col space-y-4">
            <div>
              <Badge>React.js</Badge>
            </div>
            <h1 className="font-black text-3xl md:text-5xl leading-snug">
              My React.js code snippets
            </h1>
            <p className="hidden md:block leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto esse cum maiores obcaecati, voluptatem natus ab
              temporibus expedita consequatur amet mollitia ipsum quidem
              molestiae, quae laboriosam aspernatur doloremque voluptates
              deserunt!
            </p>
            <div>
              <Link
                className={buttonVariants({ variant: "secondary-light" })}
                href={"/article/discover-my-Reactjs-code-snippets-1"}
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-8 bg-white rounded-sm min-h-96 p-8 flex  items-center">
        <div className="container space-y-8 text-center">
          <h1 className="font-black text-3xl md:text-5xl leading-snug">
            Discover nice articles here !
          </h1>
          <p className="hidden md:block leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            esse cum maiores obcaecati, voluptatem natus ab temporibus expedita
            consequatur amet mollitia ipsum quidem molestiae, quae laboriosam
            aspernatur doloremque voluptates deserunt!
          </p>
          <div>
            <Input placeholder="Search..." />
          </div>
          <div className="flex gap-4 justify-center w-full flex-wrap">
            <Button>All</Button>
            <Button variant={"ghost"}>React.js</Button>
            <Button variant={"ghost"}>Javascript</Button>
            <Button variant={"ghost"}>Laravel</Button>
            <Button variant={"ghost"}>Java</Button>
            <Button variant={"ghost"}>Koltin</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
