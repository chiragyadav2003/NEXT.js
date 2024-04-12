
export function Footer(){
    return (
        <footer className="relative bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left w-screen ">
            <div className="fixed bottom-2">
                <div className="bg-black/5 p-4 text-center text-surface dark:text-white flex justify-center items-center w-full">
                <div className="flex  justify-center items-center fixed  left-4">
                Made with <svg 
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 px-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                by <a className="text-slate-400 font-bold text-lg hover:scale-110 hover:duration-300 pl-2 " href="https://github.com/chiragyadav2003">Chirag Yadav</a>
                </div>
                <div className="fixed right-4">
                © 2024 Copyright:All Rights Reserved
                </div>
                </div>
            </div>
        </footer>
    )
}

// function loveIcon(){
//     return (
        
//     )
// }

