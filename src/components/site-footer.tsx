import { siteConfig } from '@/config/site'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import Link from 'next/link'


export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 dark:border-border">
      <div className="container grid grid-cols-5 items-center justify-between gap-12 py-6">
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

        {
          siteConfig.footerLinks.map((item) => (
            <div className="col-span-1" key={item.title}>
              <div className="font-bold mb-4">{item.title}</div>
              <div className="flex flex-col gap-3">
                {item.links.map((link, index) => (
                  <Link href={link.href} key={index} className="block">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))
        }
      </div>

      <div className="flex flex-col items-center justify-between py-4 bg-gradient-to-b from-primary/5 to-background">
        <div>Made with ❤️ by hubingkang</div>
      </div>
    </footer>
  )
}
