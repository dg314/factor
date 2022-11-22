import Head from 'next/head'
import Image from 'next/image'
import BottomBar from '../components/BottomBar'
import SearchBar from '../components/SearchBar'
import TopBar from '../components/TopBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col justify-center items-center min-h-screen bg-neutral-300 dark:bg-neutral-800">
        <TopBar />
        <div className="flex flex-col grow justify-center items-center px-8 py-4 w-full max-w-2xl">
          <h1 className="text-black dark:text-white text-2xl sm:text-3xl mb-16 text-center">Get facts from trustworthy sources.</h1>
          <SearchBar />
        </div>
        <BottomBar />
      </main>
    </div>
  )
}
