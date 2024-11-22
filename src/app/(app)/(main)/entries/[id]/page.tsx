import Image from 'next/image'
import { draftMode } from 'next/headers'
import markdownit from 'markdown-it'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { mockReadme } from '@/mock'
import { cache } from 'react'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function EntryPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise

  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  // const file = await remark().use(mockReadme).processSync()
  const result = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  }).render(mockReadme)

  console.log('string', result)

  return (
    <div className="container py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-5 gap-8 my-8">
        <div className="col-span-3 flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Shadcn</h1>

          <div>
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. Use this to build your own
            component library.
          </div>

          <div className="space-x-2">
            <span className="font-bold text-md">Added on:</span>
            <span>Nov 16 2024</span>
          </div>

          <div className="flex gap-2">
            <Button className="rounded-full" variant="outline">
              test tag
            </Button>

            <Button className="rounded-full" variant="outline">
              test tag
            </Button>

            <Button className="rounded-full" variant="outline">
              test tag
            </Button>
          </div>

          <div>
            <Button>Visit Website</Button>
          </div>
        </div>
        <div className="col-span-2 aspect-[16/9] group overflow-hidden relative rounded-lg">
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

      <div
        dangerouslySetInnerHTML={{ __html: result }}
        className="prose-lg py-8"
      ></div>
    </div>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
