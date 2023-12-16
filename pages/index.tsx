import { ArticleCard1 } from "@/components/ArticleCard1";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ReactOriginal } from "devicons-react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArticleCard2 } from "@/components/ArticleCard2";
import { Circles } from "@/components/Circles";

export default function Page() {
  return (
    <main>
      <Circles />
      <div className="container pt-8 md:pt-16 relative z-20">
        <div className="mb-8 md:mb-16">
          <h1 className="text-5xl font-extrabold">DevThread, Home</h1>
          <p className="text-muted-foreground">
            Welcome on <b>DevThread a blog for all Developer topics</b>
          </p>
        </div>
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            perPage: 3,
            gap: 12,
            breakpoints: {
              930: {
                perPage: 2,
              },
              650: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <ArticleCard1 id={1} />
            </SplideSlide>
            <SplideSlide>
              <ArticleCard1 id={1} />
            </SplideSlide>
            <SplideSlide>
              <ArticleCard1 id={1} />
            </SplideSlide>
            <SplideSlide>
              <ArticleCard1 id={1} />
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows space-x-4">
            <button className="splide__arrow absolute top-1/2 left-0 -translate-y-1/2 splide__arrow--prev p-2 rounded-full bg-accent">
              <ArrowLeft2 />
            </button>
            <button className="splide__arrow absolute top-1/2 right-0 -translate-y-1/2 splide__arrow--next p-2 rounded-full bg-accent">
              <ArrowRight2 />
            </button>
          </div>
        </Splide>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-16">
          <div className="w-full sm:w-2/3 space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold">Recents Articles</h2>
              <p className="text-muted-foreground">
                Find the latest news, discoveries and research in web/mobile
                development.
              </p>
            </div>
            <ArticleCard2
              author={{
                email: "jeansamist@gmail.com",
                fullName: "BAHA Ephraim",
                username: "jeansamist",
              }}
              cover="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95b79182-7a3e-4f15-8157-665b4150436c_1920x960.jpeg"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              title="Les développeurs francophones à suivre pour commencer la programmation en 2023"
              tags={[{ name: "React" }]}
            />
            <ArticleCard2
              author={{
                email: "jeansamist@gmail.com",
                fullName: "BAHA Ephraim",
                username: "jeansamist",
              }}
              cover="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95b79182-7a3e-4f15-8157-665b4150436c_1920x960.jpeg"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              title="Les développeurs francophones à suivre pour commencer la programmation en 2023"
              tags={[{ name: "React" }]}
            />
            <ArticleCard2
              author={{
                email: "jeansamist@gmail.com",
                fullName: "BAHA Ephraim",
                username: "jeansamist",
              }}
              cover="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95b79182-7a3e-4f15-8157-665b4150436c_1920x960.jpeg"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              title="Les développeurs francophones à suivre pour commencer la programmation en 2023"
              tags={[{ name: "React" }]}
            />
            <ArticleCard2
              author={{
                email: "jeansamist@gmail.com",
                fullName: "BAHA Ephraim",
                username: "jeansamist",
              }}
              cover="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95b79182-7a3e-4f15-8157-665b4150436c_1920x960.jpeg"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit provident officiis veritatis aut dignissimos laudantium quae quibusdam ratione sit et inventore quod, incidunt nemo id magnam eligendi ut. Veritatis, pariatur."
              title="Les développeurs francophones à suivre pour commencer la programmation en 2023"
              tags={[{ name: "React" }]}
            />
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-between flex"
                  )}
                >
                  <div className="space-x-4 flex items-center">
                    <ReactOriginal />
                    <span>React</span>
                  </div>
                  <Badge variant={"secondary"}>+5k posts</Badge>
                </Link>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "space-x-4 w-full justify-start flex"
                  )}
                >
                  <ReactOriginal />
                  <span>React</span>
                </Link>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "space-x-4 w-full justify-start flex"
                  )}
                >
                  <ReactOriginal />
                  <span>React</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
