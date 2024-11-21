import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
