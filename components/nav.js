//TODO: continue to style nav component and update with good assets
// Base div
  // Icon (emoji stand in)
  // Links
  // More button


  export default function Nav(){
    return (
      // nav container
      <div id="nav_container" className="bg-purple-700 p-3 flex flex-col  sm:flex-row justify-around max-h-36"> 
        {/* svg logo h1 rn */}
        <div className="flex flex-col sm:flex-row sm: items-center">
        <img src="./favicon.ico"  className="w-1/12 p-1 bg-purple-600 shadow-2xl rounded-full" alt="Logo"/>
        <h1 className="p-2 items-center ml-4 font-extrabold text-6xl text-blue-400">T R K R </h1>

        </div>
        {/* Links div */}
        <div className="flex flex-col sm:flex-row items-center ">
          {/* Links: Projects / About / Contact */}
          <a className="sm:inline-block sm:px-8 text-purple-300 hover:text-indigo-100 text-xl font-semibold" href="#Splash">TRKR</a>
          <a className="sm:inline-block sm:px-8 text-purple-300 hover:text-indigo-100 text-xl font-semibold" href="#About">About</a>
          <a className="sm:inline-block sm:px-8 text-purple-300 hover:text-indigo-100 text-xl font-semibold" href="mailto:seanfeiner.dev@gmail.com">Contact</a>
        </div>
        {/* More button
        <div className="flex items-center">
        <a className="p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" href="#">More</a>
        </div> */}
      </div>
    )
  }