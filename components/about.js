//TODO: Stub out component 
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design

// Name Title 
// Bio
// Resume info
// Tech Stack and Icons
// Buttons for : Resume, LinkedIn, Email, Github

//TODO: Wire nav button for about

export default function About(){
  return(

  <div id="About" className="p-2 flex flex-col bg-purple-600 items-center">
    {/* Section Title */}
    <h1 className="text-purple-300 font text-7xl font-extrabold p-2">About</h1>
    {/* Biography */}
    <p className="p-4 font-bold mx-10 text-3xl text-purple-200">
    TRKR was born out of the General Assembly Product Club Extended Hackathon
    </p>
    <p className="p-4 font-bold mx-10 text-3xl text-purple-300">
    the team is: 
    </p>
    {/* Education / Training Div */}
    <div> 
    {/* Add tiny divs in here with education */}
    </div>
    {/* Buttons */}
    {/* <div className="p-6 w-full flex flex-wrap justify-around content-around">
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://drive.google.com/file/d/1f1mh2Jgczfy_o_WEpZ0nn3W5x5Qgbbcj/view?usp=sharing">Resume</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://www.linkedin.com/in/seanmichael-feiner/">LinkedIn</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://github.com/sameghosts">GitHub</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" href="mailto:seanfeiner.dev@gmail.com">Email</a>
      </div> */}
      {/* Tech Stack images TODO: Add images */}
      <div className="flex flex-col flex-wrap font-mono">
        <div className="flex flex-col  items-center justify-around">
        <p className="text-3xl font-semibold  text-purple-300">
          UX / UI
        </p>
        <ul className="list-disc list-inside text-purple-200 font-semibold px-6 flex flex-col  items-center">
          <li className="text-2xl flex flex-col">
          Natallia Berakchyian 
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://uxfol.io/natalliaberakchyian">Portfolio</a>
          </li>
          
          <li className="text-2xl flex flex-col">
          Nora Pirsch
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="https://www.linkedin.com/in/norapirsch/">LinkedIn</a>
          </li>
        </ul>
        <p className="text-3xl font-semibold  text-purple-300">
          Data Science
        </p>
        <ul className="list-disc list-inside text-purple-200 font-semibold px-6">
          <li className="text-2xl flex flex-col">
          Song May
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="https://www.linkedin.com/in/songmay717/">Song May</a>
          </li>
          
          <li className="text-2xl flex flex-col">
          Rebecca Wright
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="http://www.rebeccawright.tech/">Portfolio</a>
          </li>
        </ul>
        <p className="text-3xl font-semibold  text-purple-300">
          Software Engineering
        </p>
        <ul className="list-disc list-inside text-purple-200 font-semibold px-6">
          <li className="text-2xl flex flex-col">
          Arthur D'Amato
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/">LinkedIn</a>
          </li>
          
          <li className="text-2xl flex flex-col">
          Sean Feiner
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="http://www.seanmichael.dev">Portfolio</a>
          </li>
          <li className="text-2xl flex flex-col">
          Jesse Maretz
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="https://www.linkedin.com/in/jesse-maretz/">LinkedIn</a>
          </li>
          <li className="text-2xl flex flex-col">
          Bryant Pyram
          <a className="flex justify-center text-xl  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150"  target="_blank" href="https://www.linkedin.com/in/bryant-pyram-7b261763/">LinkedIn</a>
          </li>
        </ul>
        <p className="p-4 font-bold mx-10 text-3xl text-purple-300">
          Look forward to further implementations bellow, and updates here about documentation, further demos, and product announcements!
        </p>
        </div>
        <div className="p-2 flex flex-col bg-purple-600 items-center">
        <img src="/static/DashboardDeskNext.png" alt="desktop future app"/>
        <img src="/static/dashboardMobileNext.png" alt="mobile app"/>
        </div>
      </div>

  </div>
  )
}