import { BookOpenIcon, CommandLineIcon, GlobeAltIcon } from "@heroicons/react/16/solid";
import FloatingParticle from "./FloatingParticle";
import { Github, Instagram, MessagesSquare, Twitter } from "lucide-react";

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
                    {/* Quick Links / Navigate section */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Navigate
                        </h3>
                        <ul className="space-y-3">
                            {
                                ['Trending', 'New Releases', 'Genres', 'Authors'].map((item) => (
                                    <li key={item}>

                                        <a href="#" className="group text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group:">
                                            <span className='w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity' />
                                            {item}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>


                    </div>
                    {/* Stacked section */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Stacked On
                        </h3>
                        {/* part 1 */}
                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                            {
                                ['React', 'Vite', 'Tailwind', 'GoogleAPI'].map((tech) => (
                                    <span className="px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all"
                                        key={tech}>
                                        {tech}

                                    </span>
                                ))
                            }
                        </div>
                        {/* part 2 */}
                        <div className="mt-4 space-y-2">
                            {/* 1 */}
                            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                                <CommandLineIcon className="h-5 w-5"></CommandLineIcon>
                                <span className="text-sm">Developer Friendly API</span>
                            </div>
                            {/* 2 */}
                            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                                <GlobeAltIcon className="h-5 w-5"></GlobeAltIcon>
                                <span className="text-sm">Global Book Database</span>
                            </div>

                        </div>
                    </div>
                    {/* Social Links */}
                    <div className=" space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Link Up
                        </h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {
                                [
                                    ['Github','hover:text-purple-300',Github],
                                   ['Instagram','hover:text-indigo-300',Instagram],
                                   ['Discord','hover:text-cyan-300',MessagesSquare],
                                   ['Twitter','hover:text-pink-300',Twitter],
                                // eslint-disable-next-line no-unused-vars
                                ].map(([platform,className, Icon])=>(
                                    <a href="#" 
                                    key={platform}
                                    className={`text-gray-400 ${className} transition-colors hover:scale-110`}>
                                        <span className="sr-only">
                                            {platform}
                                        </span>
                                        <Icon className="h-6 w-6 md:h-8 md:w-8" stroke="currentColor"></Icon>

                                    </a>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

            <FloatingParticle></FloatingParticle>

        </footer>
    );
};

export default Footer;