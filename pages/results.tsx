import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Page from '../components/Page'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import { SearchQuery, SearchResult } from '../types/search'

type ResultsProps = {
    query: SearchQuery,
    results: SearchResult[],
}

export default function Results(props: ResultsProps) {
    const { query, results } = props;

    const topCenterContent = (
        <div className="max-w-full">
            <SearchBar initialText={query.text} big={false} />
        </div>
    )

    return (
        <Page
            childrenCentered={false}
            topCenterContent={topCenterContent}
        >
            <ResultsList query={query} results={results} />

            {/*results.map((result, index) => <div key={index}>{result.fact}</div>)*/}
        </Page>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const { query } = context;

    try {
        const { text } = query as SearchQuery;

        if (!text) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/",
                },
                props: {},
            };
        }

        const results = [
            {
                fact: `You are interested in ${text}.`,
                sources: ["https://www.bbc.com/", "https://www.nytimes.com/"],
                scores: {
                    confidence: 93,
                    relevance: 88,
                }
            },
            {
                fact: `1 + 1 = 2.`,
                sources: ["https://www.bbc.com/", "https://www.nytimes.com/"],
                scores: {
                    confidence: 100,
                    relevance: 4,
                }
            }
        ] as SearchResult[];

        const props = {
            query,
            results
        } as ResultsProps;

        return { props }
    } catch {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        };
    }
}
