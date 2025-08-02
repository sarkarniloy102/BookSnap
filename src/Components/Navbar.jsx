import React, { useState } from 'react';
import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handleSearch(searchTerm);
    }

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
                    {/* SearchBar */}


                    {/* <div className="w-full md:flex-1 md:max-w-2xl order-3 md:order-2 lg:ml-6 md:mx-4">
                        <form action="" onSubmit={handleSubmit} className='w-full'>
                            <div className='relative group'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow'>
                                    <div className='relative dynamic-gradient'>
                                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4'>
                                            <MagnifyingGlassIcon className='h-5 w-5 md:h-6 md:w-6 text-cyan-300 drop-shadow-glow z-10'></MagnifyingGlassIcon>

                                        </div>
                                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Discover your next read...' className='block w-full rounded-2xl border border-gray-700/50 bg-gray-900/60 py-2 md:py-3 pl-10 md:pl-12 pr-4 md:pr-6 text-sm md:text-base text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-300/50 focus-ring-2 focus:ring-cyan-300/30 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-gray-900/80' />

                                    </div>

                                </div>
                            </div>
                        </form>

                    </div> */}
                    {/* extra */}
                    <div className="w-full md:flex-1 md:max-w-2xl order-3 md:order-2 lg:ml-6 md:mx-4">
                        <form onSubmit={handleSubmit} className='w-full relative group'>
                            {/* Background Blur Layer */}
                            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse-slow z-0' />

                            {/* Input Field and Icon */}
                            <div className='relative z-10'>
                                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4'>
                                    <MagnifyingGlassIcon className='h-5 w-5 md:h-6 md:w-6 text-cyan-300 drop-shadow-glow' />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder='Discover your next read...' className='block w-full rounded-2xl border border-gray-700/50 bg-gray-900/60 py-2 md:py-3 pl-10 md:pl-12 pr-4 md:pr-6 text-sm md:text-base text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-300/50 focus-ring-2 focus:ring-cyan-300/30 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-gray-900/80' />
                            </div>
                        </form>
                    </div>



                </div>
            </div>

        </nav>
    );
};

export default Navbar;