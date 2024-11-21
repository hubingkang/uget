import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function EntryPage() {
  return (
    <div className="container py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {/* <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem> */}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-5 gap-8 mt-8">
        <div className="col-span-3 flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Shadcn</h1>

          <div>
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. Use this to build your own
            component library.
          </div>

          <div>
            <Button>Visit Website</Button>
          </div>
        </div>

        {/* <div className="col-span-2 flex justify-center">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-2xl"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <div className="bg-primary/20 flex items-center justify-center">
                      <Image
                        src="/download.jpeg"
                        alt="Vercel Logo"
                        width={500}
                        height={24}
                      ></Image>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}

        <div className="col-span-2 w-full aspect-[16/9] group overflow-hidden relative rounded-lg">
          <Image
            src="/download.jpeg"
            alt="Vercel Logo"
            width={500}
            height={24}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
          ></Image>
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white font-bold text-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            Visit Website
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-8 mt-8">
        <div className="w-full col-span-2 aspect-[16/9] group overflow-hidden relative rounded-lg">
          <Image
            src="/download.jpeg"
            alt="Vercel Logo"
            width={500}
            height={24}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
          ></Image>
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white font-bold text-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            Visit Website
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Shadcn</h1>

          <div>
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. Use this to build your own
            component library.
          </div>

          <div>
            <Button>Visit Website</Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
