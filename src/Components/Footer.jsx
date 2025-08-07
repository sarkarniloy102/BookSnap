import { BookOpenIcon } from "@heroicons/react/16/solid";
import FloatingParticle from "./FloatingParticle";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div className="space-y-6 text-center sm:text-left">
                        <div className="flex justify-center sm:justify-start items-center space-x-2">
                            <BookOpenIcon className="h-8 w-8 text-cyan-400"></BookOpenIcon>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                BookSnap
                            </span>
                        </div>
                        <p className="text-gray-400">Unlock endless adventures. Explore, imagine, and dive into books that inspire and transform.</p>
                    </div>

                </div>
            </div>

            <FloatingParticle></FloatingParticle>

        </footer>
    );
};

export default Footer;