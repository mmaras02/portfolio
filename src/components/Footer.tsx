export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 relative z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <nav className="hidden md:flex space-x-10 justify-center">
                        {['about', 'skills', 'projects', 'education'].map((item) => (
                            <button
                                key={item}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {['github', 'twitter', 'linkedin'].map((social, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                            >
                                <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Mia Marasović. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}