import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function EntryPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 space-y-8">
          <h1 className="text-4xl font-bold">Shadcn</h1>

          <div>
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. Use this to build your own
            component library.
          </div>

          <Button>Visit Website</Button>
        </div>

        <Image
          src="/download.jpeg"
          alt="Vercel Logo"
          width={500}
          height={24}
          className="w-full col-span-2"
        ></Image>
      </div>
    </div>
  )
}
