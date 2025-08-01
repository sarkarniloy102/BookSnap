import React, { useState } from 'react';
import { BookOpenIcon } from "@heroicons/react/24/outline"

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className='sticky top-0 z-50 bg-gray-900/95 backdrop-blur-2xl border-b border-gray-800 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3]'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex min-h-[4rem] md:min-h-[5rem] items-center justify-between flex-wrap gap-y-3 gap-x-4 py-2'>

                    {/* logo section */}
                    <div className="dynamic-gradient relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-transform duration-300 order-1 md:order-none"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={
                            {
                                '--mouse-x': '0px',
                                '--mouse-y': '0px',
                                background: isHovered ? `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0,4), transparent 40%)` : `transparent`
                            }
                        }
                    >
                        <div className='bg-gray-900/80 backdrop-blur-sm rounded-2xl'>
                            <h1 className='text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine'>
                                <BookOpenIcon className='w-5 h-5 md:h-6 inline-block animate-float text-cyan-400 mr-1 md:mr-2 stroke-[2.5]'></BookOpenIcon>
                                <a href="/" className='ml-1 md:ml-2 text-shadow-[0_0_10px_rgba(96,165,250,0.5)]'>
                                    BOOKSNAP
                                </a>

                            </h1>

                        </div>

                    </div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;