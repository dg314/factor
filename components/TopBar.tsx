import { ReactNode } from 'react';
import Image from 'next/image'
import Link from 'next/link'

type TopBarProps = {
  children?: ReactNode;
}

export default function TopBar(props: TopBarProps) {
  const { children } = props;

  return (
    <div className="relative w-full flex items-center px-4 text-black dark:text-white h-[4.5rem]">
      <Link href="/" className="flex gap-4 items-center w-16 sm:w-32 shrink-0">
        <Image src="/factor-logo.png" alt="Factor logo" width="40" height="40" />
        <h1 className="text-2xl hidden sm:inline-block">Factor</h1>
      </Link>
      <div className="flex shrink justify-center items-center mx-auto px-2">
        {children}
      </div>
      <div className="w-16 sm:w-32 shrink-0" />
    </div>
  )
}
