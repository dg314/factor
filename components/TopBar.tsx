import Image from 'next/image'

export default function TopBar() {
  return (
    <div className="w-full flex gap-4 items-center p-4 text-black dark:text-white">
        <Image src="/factor-logo.png" alt="Factor logo" width="40" height="40" />
        <h1 className="text-2xl">Factor</h1>
    </div>
  )
}
