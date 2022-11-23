import React, { ReactNode } from "react";

type PageBodyProps = {
    children: ReactNode;
}

export default function PageBody(props: PageBodyProps) {
    const { children } = props;
    
    return (
        <main className="w-full flex flex-col justify-center items-center min-h-screen bg-neutral-300 dark:bg-neutral-800">
            {children}
        </main>
    )
}
