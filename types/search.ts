export type SearchQuery = {
    text: string;
}

export type SearchResult = {
    fact: string;
    sources: string[];
    scores: {
        confidence: number;
        relevance: number;
    };
}