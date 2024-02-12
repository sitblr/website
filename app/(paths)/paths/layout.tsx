import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-full overflow-auto">
            {children}
        </main>
    )
}

export default HomeLayout;