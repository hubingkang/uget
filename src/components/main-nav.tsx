import * as React from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { NavigationMenuDemo } from './navigation-menu'
import { SheetDemo } from './mobile-naivation-menu'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="md:hidden">
        <SheetDemo />
      </div>
      <div className="">
        {/* <div className="flex items-center h-16 text-4xl font-light select-none">
          <div className="">u</div>
          <div className="relative mx-1">
            <div className="h-full bg-blue-500 px-1">
              <div
                className="absolute left-0 h-full w-5 
                        transform translate-x-full
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-0
                        before:border-t-full before:border-l-full before:border-b-full
                        before:border-t-transparent before:border-b-transparent before:border-l-black/5"
              ></div>
              <div
                className="absolute right-0 h-full w-5 
                        transform translate-x-full
                        before:content-[''] before:absolute before:top-0 before:right-0 before:w-0 before:h-0
                        before:border-t-full before:border-l-full before:border-b-full
                        before:border-t-transparent before:border-b-transparent before:border-l-blue-500"
              ></div>
              <span className="relative font-bold text-white">get</span>
            </div>
          </div>
        </div> */}

        <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
          <div className="">u</div>
          <div className="bg-blue-500 px-1 rounded text-white relative">
            <div>get</div>
          </div>
          <div className="">.tools</div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,20)">
            <path
              d="M75 10
             L160 10
             L180 35
             L160 60
             L75 60
             L95 35
             Z"
              fill="#4A90E2"
            />

            <path d="M75 10 L95 35 L75 60" fill="#3A80D2" opacity="0.7" />

            <text
              x="30"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="300"
              fill="#666"
            >
              u
            </text>
            <text
              x="85"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="700"
              fill="white"
            >
              get
            </text>
            <text
              x="190"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="300"
              fill="#666"
            >
              .tools
            </text>
          </g>
        </svg> */}

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
          <g transform="translate(20,120)">
            <path
              d="M75 10
             L160 10
             L180 35
             L160 60
             L75 60
             L95 35
             Z"
              fill="#2ECC71"
            />

            <path d="M75 10 L95 35 L75 60" fill="#25BC61" opacity="0.7" />

            <text
              x="30"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="300"
              fill="#666"
            >
              u
            </text>
            <text
              x="85"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="700"
              fill="white"
            >
              set
            </text>
            <text
              x="190"
              y="45"
              fontFamily="Arial"
              fontSize="40"
              fontWeight="300"
              fill="#666"
            >
              .tools
            </text>
          </g>
        </svg> */}
      </div>
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </div>
  )
}
