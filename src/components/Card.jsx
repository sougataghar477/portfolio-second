import { Link } from "react-router";
function Card({project}){
    return <div className="card bg-base-300  shadow-xl mb-8 w-full md:w-[440px]">
    <div className="card-body">
    <h1 className="card-title text-white">{project.heading}</h1>
      <p className="leading-6 mb-4 italic text-white">{project.text}</p>
      <div className="flex gap-4">
      <a target="_blank" href={project.link}>
        <button className="btn active font-bold border-0 bg-white text-black w-28 hover:bg-sky-400 ">
        Check Out
    </button>
        </a>
        {project.github && <a target="_blank" href={project.github}>
        <button className="btn active border-0 font-bold bg-white text-black w-28 hover:bg-sky-400">
        Github
    </button>
        </a>}
      </div>

    </div>
  </div>
}
export default Card;