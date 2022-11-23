import Page from '../components/Page'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <Page childrenCentered={true}>
      <div className="flex flex-col justify-center items-center px-8 py-4 w-full">
        <h1 className="text-black dark:text-white text-2xl sm:text-3xl mb-16 text-center">Get facts from trustworthy sources.</h1>
        <SearchBar big={true} />
      </div>
    </Page>
  )
}
