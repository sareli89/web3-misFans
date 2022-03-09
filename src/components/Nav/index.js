export const Nav = () => {
    return (
        <nav  className="flex items-center justify-between flex-wrap bg-gray-900 p-6 border-b-4  border-purple-700">
            <div className="flex items-center flex-shrink-0 text-white font-extrabold mr-6">
                <span className="font-semibold text-xl tracking-tight">Mis Fans</span>
            </div>
            <div className="input-group">
                <input type="search" className="input-group"></input>

            </div>
            
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white font-semibold border-purple-500 hover:border-transparent hover:text-purple-300 hover:bg-purple-600 mt-4 lg:mt-0">Registrarme</a>
            </div>
           
        </nav>
    )
}