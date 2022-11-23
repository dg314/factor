import { SearchQuery, SearchResult } from "../types/search"
import ResultPreview from "./ResultPreview";

type ResultsListProps = {
    query: SearchQuery,
    results: SearchResult[],
}

export default function ResultsList(props: ResultsListProps) {
    const { query, results } = props;

    return (
        <div className="flex justify-center w-full min-h-full">
            <div className="w-full max-w-lg">
                <p className="text-base my-6 text-neutral-800 dark:text-neutral-300">{results.length} results for &quot;{query.text}&quot;</p>
                {results.map((result, index) => (
                    <div key={index} className="w-full mb-8">
                        <ResultPreview result={result} />
                    </div>
                ))}
            </div>
        </div>
    )
}
