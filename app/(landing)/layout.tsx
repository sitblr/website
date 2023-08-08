
const HomeLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <main className="h-full overflow-auto bg-gradient-to-tl to-[#e1cf2b] from-[#e1a610] ">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>

    )
}

export default HomeLayout;