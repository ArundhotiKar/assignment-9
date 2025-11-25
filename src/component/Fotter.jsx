import React from 'react';

const Fotter = () => {
    return (
        <div>
            <footer className="relative bg-primary text-primary-content py-10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">

                    {/* Logo + Info */}
                    <aside className="mb-6 md:mb-0 text-center md:text-left items-center">
                        <div className="flex items-center justify-center md:justify-start mb-3">
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="inline-block mr-2"
                            >
                                <path d="M22.672 15.226l-2.432.811..."></path>
                            </svg>
                            <span className="font-bold text-lg">ACME Industries Ltd.</span>
                        </div>
                        <p className="text-gray-200 text-sm">Providing reliable tech since 1992</p>
                        <p className="text-gray-300 text-xs mt-1">
                            Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                    </aside>

                    {/* Social Icons */}
                    <nav className="flex gap-4">
                        {/* Twitter */}
                        <a className="p-2 rounded-full bg-black bg-opacity-10 hover:bg-opacity-30 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                                <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482 13.939 13.939 0 01-10.11-5.13 4.917 4.917 0 001.523 6.573 4.902 4.902 0 01-2.228-.616v.062a4.917 4.917 0 003.946 4.817 4.934 4.934 0 01-2.224.084 4.918 4.918 0 004.588 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.788-.023-1.175-.068a13.945 13.945 0 007.557 2.212c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a className="p-2 rounded-full bg-black bg-opacity-10 hover:bg-opacity-30 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a className="p-2 rounded-full bg-black bg-opacity-10 hover:bg-opacity-30 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </nav>

                </div>

                {/* Background Gradient Circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -z-0"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-20 -z-0"></div>
            </footer>

        </div>
    );
};

export default Fotter;