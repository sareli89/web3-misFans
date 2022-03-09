export const Nav = () => {
    return (
        <nav  className="flex items-center justify-between flex-wrap bg-black p-6 border-b-4  border-purple-700">
            <div className="flex items-center flex-shrink-0 text-white font-extrabold mr-6">
                <span className="font-semibold font-mono text-xl tracking-tight">Mis Fans</span>
            </div>
            <div className="input-group flex">
                <input type="search" className="input-group min-w-0 block w-full px-3 py-1.5 font-mono border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-100 focus:bg-white focus:border-purple-600 focus:outline-none" placeholder="Search" aria-label="Search"></input>
                <button className="btn px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-purple-400 hover:shadow-lg focus:bg-purple-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-300 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </div>
            
            <div>
                <a href="#" className="inline-block text-sm font-mono px-4 py-2 leading-none border rounded text-white font-semibold border-purple-500 hover:border-transparent hover:text-purple-300 hover:bg-purple-600 mt-4 lg:mt-0">Registrarme</a>
                
            </div>
           
        </nav>
    )
}