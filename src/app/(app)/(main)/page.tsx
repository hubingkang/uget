import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
// import { PageRange } from '@/components/PageRange'
// import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  console.log('posts', posts)

  return (
    <div className="pt-24 pb-24">
      {/* <PageClient /> */}
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      {/* <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} /> */}

      <div className="container">
        <div>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
            {posts?.docs.map((result, index) => {
              if (typeof result === 'object' && result !== null) {
                return (
                  <div className="col-span-4" key={index}>
                    {/* <Card
                      className="h-full"
                      doc={result}
                      relationTo="posts"
                      showCategories
                    /> */}
                    {result.title}
                  </div>
                )
              }

              return null
            })}
          </div>
        </div>
      </div>

      <div className="container">
        {/* {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )} */}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}

// import Link from 'next/link'

// import { siteConfig } from '@/config/site'
// import { Button, buttonVariants } from '@/components/ui/button'
// import { BackgroundBeams } from '@/components/ui/background-beams'
// import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
// import { MagicCard } from '@/components/ui/magic-card'
// import { Badge } from '@/components/ui/badge'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { WordRotate } from '@/components/ui/word-rotate'
// import Image from 'next/image'
// import { Bike } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import { ScrollArea } from '@/components/ui/scroll-area'

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from '@/components/ui/pagination'

// const words = [
//   {
//     prefix: 'You',
//     suffix: '',
//     desc: '你想要的，这里都有',
//   },
//   {
//     prefix: 'U',
//     suffix: 'niversal',
//     desc: '通用工具导航站',
//   },
//   {
//     prefix: 'U',
//     suffix: 'seful',
//     desc: '只为你提供有价值的工具',
//   },
//   {
//     prefix: 'U',
//     suffix: 'ltimate',
//     desc: '找到最适合你的工具',
//   },
// ]

// export default function IndexPage() {
//   return (
//     <div className="">
//       <BackgroundBeamsWithCollision className="h-auto">
//         <div className="w-full">
//           <section className="container grid items-center justify-items-center gap-6 pb-8 pt-6 md:py-10">
//             <div className="flex max-w-[980px] flex-col items-center gap-6">
//               <h1 className="font-extrabold leading-tight tracking-tighter md:text-5xl flex items-center gap-1">
//                 <div className="w-48 text-left">
//                   <WordRotate
//                     words={words.map((item, index) => (
//                       <span key={index}>
//                         <span className="text-orange-500">{item.prefix}</span>
//                         <span>{item.suffix}</span>
//                       </span>
//                     ))}
//                   />
//                 </div>
//                 <span>get</span>
//               </h1>
//               <p className="max-w-[700px] text-lg text-muted-foreground">
//                 精选优质工具资源，让工具选择变得简单。发现、对比、选择最适合你的在线工具
//               </p>
//             </div>
//           </section>

//           {/* <div className="container grid grid-cols-4 gap-4 pb-4 text-center cursor-pointer">
//             <div className="text-md md:text-xl font-bold bg-orange-500 text-white rounded-lg py-2 md:py-3 hover:bg-orange-600">
//               出海必备
//             </div>
//             <div className="text-md md:text-xl font-bold bg-green-500 text-white rounded-lg py-2 md:py-3 hover:bg-green-600">
//               AI工具
//             </div>
//             <div className="text-md md:text-xl font-bold bg-blue-500 text-white rounded-lg py-2 md:py-3 hover:bg-blue-600">
//               营销工具
//             </div>
//             <div className="text-md md:text-xl font-bold bg-pink-500 text-white rounded-lg py-2 md:py-3 hover:bg-pink-600">
//               更多专题
//             </div>
//           </div> */}
//         </div>
//       </BackgroundBeamsWithCollision>

//       <div className="container flex mt-6 gap-6 pb-12">
//         {/* <div className="hidden md:flex md:flex-col md:gap-1 w-48 max-h-[calc(100vh-96px)] overflow-y-auto scrollbar-none sticky top-[81px] pr-2">
//           <ScrollArea className="px-4">
//             <div className="space-y-1">
//               {new Array(30).fill(0).map((_, idx) => (
//                 <div
//                   key={idx}
//                   className={cn(
//                     'p-2 rounded-md cursor-pointer hover:bg-primary/5 hover:text-primary flex items-center gap-2',
//                     idx === 0 && 'bg-primary/10 text-primary'
//                   )}
//                 >
//                   <Bike className="w-4 h-4" />
//                   <span>测试分类{idx}</span>
//                 </div>
//               ))}
//             </div>
//           </ScrollArea>
//         </div> */}
//         {/* <div className="hidden md:flex md:flex-col md:gap-1 w-48 max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-none sticky top-[65px] pr-2">
//           {new Array(30).fill(0).map((_, idx) => (
//             <div
//               key={idx}
//               className={cn(
//                 'p-2 rounded-md cursor-pointer hover:bg-primary/5 hover:text-orange-500 flex items-center gap-2',
//                 idx === 0 && 'bg-primary/10 text-orange-500'
//               )}
//             >
//               <Bike className="w-4 h-4" />
//               <span>测试分类{idx}</span>
//             </div>
//           ))}

//           <div className='bg-primary text-orange-500 absolute top-1/2 w-1 h-4'></div>
//         </div> */}
//         <div className="flex-1">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {new Array(30).fill(0).map((_, idx) => (
//               // <MagicCard
//               //   key={idx}
//               //   className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl h-[300px]"
//               //   gradientColor="#D9D9D955"
//               //   // gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
//               // >
//               // <Link href={`/entries/${idx}`} key={idx}>
//               <div
//                 className="border rounded-2xl group hover:-translate-y-1 transition-all duration-300 bg-primary/15 px-1 py-1"
//                 key={idx}
//               >
//                 <div className="bg-background rounded-xl p-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-12 h-12 flex items-center justify-center border border-1 rounded-full relative">
//                       <div
//                         className="absolute inset-0 z-[-1] transition-all duration-300 group-hover:blur-lg group-hover:backdrop-opacity-70 group-hover:bg-no-repeat group-hover:bg-cover"
//                         style={{
//                           backgroundImage:
//                             'url(https://cdn.macwk.net/images/77241704625853555.png?imageMogr2/format/webp)',
//                         }}
//                       ></div>
//                       <Image
//                         src="/test.jpeg"
//                         alt="logo"
//                         className="rounded-full"
//                         width={48}
//                         height={48}
//                       />
//                     </div>

//                     {/* <Avatar>
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar> */}

//                     <div className="flex-1">
//                       <Link href={`/entries/${idx}`}>
//                         <h2 className="text-lg font-bold hover:text-primary">
//                           Top Social Tools
//                         </h2>
//                       </Link>
//                       <div className="flex space-x-2 text-sm text-gray-500">
//                         <Badge variant="outline">Marketing</Badge>
//                         <Badge variant="outline">Business</Badge>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="mt-3 text-muted-foreground">
//                     Find the Perfect Social Media Tool for Your Marketing Goals
//                     Research, Growth...
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between space-x-2 text-sm px-4 py-2">
//                   <span className="cursor-pointer hover:text-primary">
//                     # Free
//                   </span>
//                   <div className="flex items-center space-x-1">
//                     <span>📊 DR: 100</span>
//                     <span>AS: 100</span>
//                   </div>
//                 </div>
//               </div>
//               // </Link>
//               // </MagicCard>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             <Button>View more</Button>
//             {/* <Pagination>
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationPrevious href="#" />
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink href="#">1</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink href="#">2</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink href="#">3</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationEllipsis />
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationNext href="#" />
//                 </PaginationItem>
//               </PaginationContent>
//             </Pagination> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
