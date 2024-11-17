import { siteConfig } from '@/config/site'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-6 dark:border-border md:px-8">
      <div className="container grid grid-cols-4 items-center justify-between gap-4">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex items-center space-x-1 text-2xl font-bold">
            <div className="">u</div>
            <div className="bg-blue-500 px-1 rounded text-white relative">
              <div>get</div>
            </div>
            <div className="">.tools</div>
          </div>

          <div>
            精选优质工具资源，让工具选择变得简单。发现、对比、选择最适合你的在线工具
          </div>

          <div>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="!h-5 !w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.twitter className="!h-5 !w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="font-bold mb-4">测试</div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Link href="/" key={index} className="block">
                test Link {index}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="font-bold mb-4">测试</div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Link href="/" key={index} className="block">
                test Link {index}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn
          </a>
          . The source code is available on{' '}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
