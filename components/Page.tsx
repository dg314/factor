import React, { ReactNode } from "react";
import PageHead from "./PageHead";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

type PageProps = {
    children: ReactNode;
    childrenCentered: boolean;
    topCenterContent?: ReactNode;
}

export default function Page(props: PageProps) {
    const { children, childrenCentered, topCenterContent } = props;
    
    return (
        <div>
            <PageHead />
            <div className="w-full flex flex-col justify-center items-center min-h-screen bg-neutral-300 dark:bg-neutral-800">
                <TopBar>
                    {topCenterContent}
                </TopBar>
                <main className={`grow w-full max-w-2xl ${childrenCentered && "flex flex-col justify-center items-center"}`}>
                    {children}
                </main>
                <BottomBar />
            </div>
        </div>
        
    )
}
