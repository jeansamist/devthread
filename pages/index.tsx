import { ArticleCard1 } from "@/components/ArticleCard1";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ReactOriginal } from "devicons-react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="fixed top-1/2 -translate-x-1/2 translate-y-1/2 z-0">
        <div className="shadow-inner border rounded-full w-80 h-80 p-8">
          <div className="h-full w-full p-8   shadow-inner border rounded-full">
            <div className="h-full w-full  shadow-inner border rounded-full p-8">
              <div className="h-full w-full   shadow-inner border rounded-full p-8">
                <div className="h-full w-full   shadow-inner border rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 right-0 translate-x-1/2 z-0">
        <div className="  shadow-md border rounded-full w-80 h-80 p-8">
          <div className="h-full w-full p-8   shadow-md border rounded-full">
            <div className="h-full w-full   shadow-md border rounded-full p-8">
              <div className="h-full w-full   shadow-md border rounded-full p-8">
                <div className="h-full w-full   shadow-md border rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-8 md:pt-16">
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
        <div className="flex gap-4 mt-8 md:mt-16">
          <div className="w-1/2 md:w-4/5"></div>
          <div className="w-1/2 md:w-1/5">
            <Card>
              <CardHeader>
                <CardTitle>Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
