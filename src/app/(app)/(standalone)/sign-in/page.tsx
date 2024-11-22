import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { SignInForm } from '@/components/sign-in-form'
import { Logo } from '@/components/logo'
import { Icons } from '@/components/icons'
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
    <div className="flex items-center h-screen justify-center">
      <div className="relative flex h-screen w-screen">
        <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
          <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
            <Logo />

            <div className="w-full text-left">
              <p className="pb-2 text-foreground text-lg font-bold">
                welcome back
              </p>
              <p className="text-sm text-muted-foreground">
                login your account to continue
              </p>
            </div>

            <SignInForm />

            <div className="flex w-full items-center gap-4 py-2">
              <hr
                className="bg-muted border-none w-full h-[1px] flex-1"
                role="separator"
              />
              <p className="shrink-0 text-sm text-muted-foreground">或</p>
              <hr
                className="bg-muted border-none w-full h-[1px] flex-1"
                role="separator"
              />
            </div>

            {/* <Button
              className="w-full"
              variant="bordered"
              startContent={<FlatColorIconsGoogle className="w-6 h-6 text-default-500" />}
            >
              Google 登录
            </Button> */}
            <Button className="w-full" variant="outline">
              <Icons.gitHub className="!h-5 !w-5" />
              Github 登录
            </Button>
            <Button className="w-full" variant="outline">
              <Icons.google className="!h-5 !w-5" />
              Google 登录
            </Button>

            <div className="text-sm text-muted-foreground text-center space-x-1">
              <span>need an account?</span>
              <a href="/sign-up" className="text-primary">
                register
              </a>
            </div>
          </div>
        </div>
        <div
          className="relative hidden w-1/2 flex-col-reverse rounded-medium p-10 shadow-small lg:flex"
          style={{
            backgroundImage: `url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
    </div>
  )
}
