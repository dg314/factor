import Page from '../components/Page'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col grow justify-center items-center px-8 py-4 w-full max-w-2xl">
        <h1 className="text-black dark:text-white text-2xl sm:text-3xl mb-16 text-center">Get facts from trustworthy sources.</h1>
        <SearchBar big={true} />
      </div>
    </Page>
  )
}
