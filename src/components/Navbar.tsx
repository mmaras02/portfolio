"use client";

import { pages } from "@/constants/pages";

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

function NavButton({
    item,
    activeSection,
    onClick,
    isMobile = false,
}: {
    item: typeof pages[number];
    activeSection: string;
    onClick: (id: string) => void;
    isMobile?: boolean;
}) {
    const baseClass = isMobile
        ? "text-xl font-medium py-2 capitalize"
        : "capitalize transition-colors";

    const activeClass = isMobile ? "text-blue-500" : "text-violet-500";
    const inactiveClass = isMobile ? "text-gray-400" : "text-slate-300";

    return (
        <button
            key={item.id}
            onClick={() => onClick(item.id)}
            className={`${baseClass} ${activeSection === item.id ? activeClass : inactiveClass
                } ${!isMobile ? "hover:text-violet-500 transition-colors" : ""}`}
        >
            {item.label}
        </button>
    );
}

export const Navbar = ({
    activeSection,
    scrollToSection,
    menuOpen,
    setMenuOpen,
}: NavbarProps) => {
    return (
        <>
            <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm shadow-sm z-1000">
                <div className="container mx-auto px-6 py-4 flex justify-end items-center">

                    <nav className="hidden md:flex space-x-10">
                        {pages.map((item) => (
                            <NavButton
                                key={item.id}
                                item={item}
                                activeSection={activeSection}
                                onClick={scrollToSection}
                            />
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-violet-500 text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="fixed inset-0 bg-slate-900/95 z-40 p-6 md:hidden flex flex-col">
                    <div className="flex justify-end mb-10">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-blue-500 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6 text-center">
                        {pages.map((item) => (
                            <NavButton
                                key={item.id}
                                item={item}
                                activeSection={activeSection}
                                onClick={scrollToSection}
                                isMobile
                            />
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};
