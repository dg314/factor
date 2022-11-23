import { SearchResult } from "../types/search"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ToolTip from "./ToolTip";

type ResultPreviewProps = {
    result: SearchResult,
}

export default function ResultPreview(props: ResultPreviewProps) {
    const { result } = props;

    const percentage = 66;

    const links = result.sources.map((source, index) => (
        <span key={index}>
            <u key={index}><a href={source}>{source}</a></u>
            {index === result.sources.length - 1 ? "" : ", "}
        </span>
    ))

    return (
        <div className="w-full text-black dark:text-white text-lg bg-black/20 p-4 rounded-xl">
            {result.fact}
            <div className="flex justify-center items-center gap-6 my-3">
                <ToolTip tooltip="Confidence">
                    <div className="w-16 h-16 bg-rose-600/20 rounded-full">
                        <CircularProgressbar
                            value={result.scores.confidence}
                            text={`${result.scores.confidence}%`}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '24px',
                                pathColor: "#e11d48c0",
                                textColor: "#e11d48",
                                trailColor: "#00000000",
                            })}
                        />
                    </div>
                </ToolTip>
                <ToolTip tooltip="Relevance">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full">
                        <CircularProgressbar
                            value={result.scores.relevance}
                            text={`${result.scores.relevance}%`}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '24px',
                                pathColor: "#f59e0bc0",
                                textColor: "#f59e0b",
                                trailColor: "#00000000",
                            })}
                        />
                    </div>
                </ToolTip>
            </div>
            <p className="text-neutral-800 dark:text-neutral-300 text-xs">Sources: {links}</p>
        </div>
    )
}
