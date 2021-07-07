//TODO: Stub out component ##DONE
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design

//Splash / Landing 
// Logo Image 
// Name Big
// large-ish tagline 

export default function Splash(){
  return (
    // Splash container
    <div id="Splash" className="p-2 flex flex-col bg-gray-400 items-center w-auto">
      {/* Name Splash 
        {/* Last Name */}
      <div className="flex flex-col text-center sm:flex-row">
        <h1 className="p-2 sm:text-9xl text-6xl font-black"> 🔎 </h1>
        <h1 className="p-2 text-purple-800 sm:text-9xl text-6xl font-black sm:m-3"> What Is TRKR?</h1>
        <h1 className="p-2 sm:text-9xl text-6xl font-black sm:ml-2">  📝 </h1>
      </div>
      {/* tagline div */}
      <div className="p-3 bg-gray-300 flex items-center rounded shadow-2xl">
        {/* tagline text */}
        <h3 className="text-xl text-center text-gray-800 font-mono">T R K R is a SaaS tool and platform for job seekers made by job seekers.
        <br></br>
        <br></br>
        Job seekers need a better way to track job applications, so that they can spend more time applying to jobs with a quality resume and cover letter, which will increase their chances of landing a job.
        <br/>
        <br/>
        We're designed to become obsolete. 
        </h3>
        <img src="/static/laptop.png" alt="laptop app"/>
        {/* other stuff ? */}
      </div>
      {/* buttons div */}
      {/* <div className="p-3 w-full flex justify-evenly items-stretch">
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://drive.google.com/file/d/1f1mh2Jgczfy_o_WEpZ0nn3W5x5Qgbbcj/view?usp=sharing">Resume</a>
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://www.linkedin.com/in/seanmichael-feiner/">LinkedIn</a>
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://github.com/sameghosts">GitHub</a>
      </div> */}
    </div>
  )
}
