export const Nav = () => {
  function goBackToMain(){
    document.getElementById("goBack").innerHTML ="I'm back!"
  }
  document.getElementById("goBack")
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6 border-b-4  border-purple-700">
      <div className="flex items-center flex-shrink-0 text-white font-extrabold mr-6">
        <span className="font-semibold font-mono text-xl tracking-tight" id="goBack">
          Web 3
        </span>
      </div>

      <div>
        <a
          href="#"
          className="inline-block text-sm font-mono px-4 py-2 leading-none border rounded text-white font-semibold border-purple-500 hover:border-transparent hover:text-purple-300 hover:bg-purple-600 mt-4 lg:mt-0"
        >
          Registrarme
        </a>
      </div>
    </nav>
  );
};
