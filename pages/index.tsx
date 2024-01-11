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
      <div className="m-8 space-y-8">
        <h1 className="font-black text-center text-3xl md:text-5xl leading-snug">
          Recent blog posts
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md">
            <div
              className="aspect-video w-full rounded-sm"
              style={{
                background:
                  "url('https://miro.medium.com/v2/resize:fit:1358/1*U62pEikCBvM1gjIDlAry7Q.png') no-repeat center / cover",
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <Avatar username="Jeansamist" />
            </div>
            <div className="space-y-4">
              <Badge>React.js</Badge>
              <h3 className="font-bold text-xl md:text-3xl leading-snug">
                My favorite Mac OSX backgrounds
              </h3>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae repudiandae necessitatibus fuga, non,
                debitis suscipit est laboriosam tempora consectetur animi.
                Mollitia vero quae voluptatum? Ex, corporis quia. Adipisci,
                dolores.
              </p>
              <Link
                href={"/"}
                className={buttonVariants({ variant: "secondary" })}
              >
                Read article
              </Link>
            </div>
          </div>
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md">
            <div
              className="aspect-video w-full rounded-sm"
              style={{
                background:
                  "url('https://miro.medium.com/v2/resize:fit:1358/1*U62pEikCBvM1gjIDlAry7Q.png') no-repeat center / cover",
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <Avatar username="Jeansamist" />
            </div>
            <div className="space-y-4">
              <Badge>React.js</Badge>
              <h3 className="font-bold text-xl md:text-3xl leading-snug">
                My favorite Mac OSX backgrounds
              </h3>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae repudiandae necessitatibus fuga, non,
                debitis suscipit est laboriosam tempora consectetur animi.
                Mollitia vero quae voluptatum? Ex, corporis quia. Adipisci,
                dolores.
              </p>
              <Link
                href={"/"}
                className={buttonVariants({ variant: "secondary" })}
              >
                Read article
              </Link>
            </div>
          </div>
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md">
            <div
              className="aspect-video w-full rounded-sm"
              style={{
                background:
                  "url('https://miro.medium.com/v2/resize:fit:1358/1*U62pEikCBvM1gjIDlAry7Q.png') no-repeat center / cover",
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <Avatar username="Jeansamist" />
            </div>
            <div className="space-y-4">
              <Badge>React.js</Badge>
              <h3 className="font-bold text-xl md:text-3xl leading-snug">
                My favorite Mac OSX backgrounds
              </h3>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae repudiandae necessitatibus fuga, non,
                debitis suscipit est laboriosam tempora consectetur animi.
                Mollitia vero quae voluptatum? Ex, corporis quia. Adipisci,
                dolores.
              </p>
              <Link
                href={"/"}
                className={buttonVariants({ variant: "secondary" })}
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>Load more articles</Button>
        </div>
      </div>
      <div className="m-8 space-y-8">
        <h1 className="font-black text-center text-3xl md:text-5xl leading-snug">
          Discover writers
        </h1>
        <div></div>
        <div className="grid grid-cols-3 gap-4 justify-center w-full flex-wrap">
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md w-full">
            <div
              className="w-full aspect-square bg-white rounded-sm"
              style={{
                background: `url("https://laravel.cm/media/197/profile-pic-zinc.png") no-repeat center / cover`,
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <div
                className={
                  "p-2 px-4 font-bold inline-block backdrop-blur-lg rounded-full shadow bg-primary text-primary-foreground"
                }
              >
                Jeansamist
              </div>
            </div>
          </div>
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md w-full">
            <div
              className="w-full aspect-square bg-white rounded-sm"
              style={{
                background: `url("https://laravel.cm/media/197/profile-pic-zinc.png") no-repeat center / cover`,
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <div
                className={
                  "p-2 px-4 font-bold inline-block backdrop-blur-lg rounded-full shadow bg-primary text-primary-foreground"
                }
              >
                Jeansamist
              </div>
            </div>
          </div>
          <div className="p-4 bg-transparent transition-colors hover:bg-white rounded-md w-full">
            <div
              className="w-full aspect-square bg-white rounded-sm"
              style={{
                background: `url("https://laravel.cm/media/197/profile-pic-zinc.png") no-repeat center / cover`,
              }}
            ></div>
            <div className="flex justify-center -translate-y-1/2">
              <div
                className={
                  "p-2 px-4 font-bold inline-block backdrop-blur-lg rounded-full shadow bg-primary text-primary-foreground"
                }
              >
                Jeansamist
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
