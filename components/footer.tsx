const Footer = () => {   
    return (
        <footer className="border-t-white py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">© {new Date().getFullYear()} Your Company</div>
                <nav>
                <ul className="flex space-x-4">
                    {/* <li>
                    <a href="/">Home</a>
                    </li> */}
                    {/* <li>
                    <a href="/organizers">Organizers</a>
                    </li> */}
                    <li>
                    <a href="/feedback">Feedback</a>
                    </li>
                    <li>
                    <a href="/contributors">Contributors</a>
                    </li>
                    {/* <li>
                    <a href="/privacy">Privacy</a>
                    </li> */}
                </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;