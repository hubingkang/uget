import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { MagicCard } from '@/components/ui/magic-card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { WordRotate } from '@/components/ui/word-rotate'
import Image from 'next/image'
import { Bike } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const words = [
  {
    prefix: 'You',
    suffix: '',
    desc: '你想要的，这里都有',
  },
  {
    prefix: 'U',
    suffix: 'niversal',
    desc: '通用工具导航站',
  },
  {
    prefix: 'U',
    suffix: 'seful',
    desc: '只为你提供有价值的工具',
  },
  {
    prefix: 'U',
    suffix: 'ltimate',
    desc: '找到最适合你的工具',
  },
]

export default function IndexPage() {
  return (
    <div className="">
      <BackgroundBeamsWithCollision className="h-auto">
        <div className="w-full">
          <section className="container grid items-center justify-items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-center gap-6">
              <h1 className="font-extrabold leading-tight tracking-tighter md:text-5xl flex items-center gap-1">
                <div className="w-48 text-left">
                  <WordRotate
                    words={words.map((item, index) => (
                      <span key={index}>
                        <span className="text-orange-500">{item.prefix}</span>
                        <span>{item.suffix}</span>
                      </span>
                    ))}
                  />
                </div>
                <span>get</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                精选优质工具资源，让工具选择变得简单。发现、对比、选择最适合你的在线工具
              </p>
            </div>
            {/* <div className="flex gap-4">
              <Link
                href={siteConfig.links.docs}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Documentation
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: 'outline' })}
              >
                GitHub
              </Link>
            </div> */}

            {/* <BackgroundBeams /> */}
          </section>

          <div className="container grid grid-cols-4 gap-4 p-4 text-center cursor-pointer">
            <div className="text-md md:text-xl font-bold bg-orange-500 text-white rounded-lg py-2 md:py-3 hover:bg-orange-600">
              出海必备
            </div>
            <div className="text-md md:text-xl font-bold bg-green-500 text-white rounded-lg py-2 md:py-3 hover:bg-green-600">
              AI工具
            </div>
            <div className="text-md md:text-xl font-bold bg-blue-500 text-white rounded-lg py-2 md:py-3 hover:bg-blue-600">
              营销工具
            </div>
            <div className="text-md md:text-xl font-bold bg-pink-500 text-white rounded-lg py-2 md:py-3 hover:bg-pink-600">
              更多专题
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      <div className="container flex p-4 gap-6">
        <div className="hidden md:flex md:flex-col md:gap-1 w-48 max-h-[calc(100vh-96px)] overflow-y-auto scrollbar-none sticky top-[81px] pr-2">
          <ScrollArea className="px-4">
            <div className="space-y-1">
              {new Array(30).fill(0).map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'p-2 rounded-md cursor-pointer hover:bg-primary/5 hover:text-primary flex items-center gap-2',
                    idx === 0 && 'bg-primary/10 text-primary'
                  )}
                >
                  <Bike className="w-4 h-4" />
                  <span>测试分类{idx}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* <div className="hidden md:flex md:flex-col md:gap-1 w-48 max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-none sticky top-[65px] pr-2">
          {new Array(30).fill(0).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'p-2 rounded-md cursor-pointer hover:bg-primary/5 hover:text-orange-500 flex items-center gap-2',
                idx === 0 && 'bg-primary/10 text-orange-500'
              )}
            >
              <Bike className="w-4 h-4" />
              <span>测试分类{idx}</span>
            </div>
          ))}

          <div className='bg-primary text-orange-500 absolute top-1/2 w-1 h-4'></div>
        </div> */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {new Array(30).fill(0).map((_, idx) => (
            // <MagicCard
            //   key={idx}
            //   className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl h-[300px]"
            //   gradientColor="#D9D9D955"
            //   // gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
            // >
            // <Link href={`/entries/${idx}`} key={idx}>
            <div
              className="border rounded-lg group hover:-translate-y-1 transition-all duration-300 bg-primary/15 px-1 py-1"
              key={idx}
            >
              <div className="bg-background rounded-md p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center border border-1 rounded-full relative">
                    <div
                      className="absolute inset-0 z-[-1] transition-all duration-300 group-hover:blur-lg group-hover:backdrop-opacity-70 group-hover:bg-no-repeat group-hover:bg-cover"
                      style={{
                        backgroundImage:
                          'url(https://cdn.macwk.net/images/77241704625853555.png?imageMogr2/format/webp)',
                      }}
                    ></div>
                    <Image
                      src="/test.jpeg"
                      alt="logo"
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}

                  <div className="flex-1">
                    <Link href={`/entries/${idx}`}>
                      <h2 className="text-lg font-bold hover:text-primary">
                        Top Social Tools
                      </h2>
                    </Link>
                    <div className="flex space-x-2 text-sm text-gray-500">
                      <Badge variant="outline">Marketing</Badge>
                      <Badge variant="outline">Business</Badge>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Find the Perfect Social Media Tool for Your Marketing Goals
                  Research, Growth...
                </p>
              </div>
              <div className="flex items-center justify-between space-x-2 text-sm px-4 py-2">
                <span className="cursor-pointer hover:text-primary">
                  # Free
                </span>
                <div className="flex items-center space-x-1">
                  <span>📊 DR: 100</span>
                  <span>AS: 100</span>
                </div>
              </div>
            </div>
            // </Link>
            // </MagicCard>
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
