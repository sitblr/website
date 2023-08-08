import React from "react";

const EventLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <main className="h-full overflow-auto">
            {children}
         </main>
    )
}

export default EventLayout;