
function Card({ project }) {
  return <div className="card project-card relative dark:bg-white mb-8 w-full">

    <div className="card-body">
      <h1 className="card-title text-black">{project.heading}</h1>
      <p className="leading-6 mb-4 italic  text-black">{project.text}</p>
      <div className="flex gap-4">
        <a target="_blank" href={project.link}>
          <button className="btn dark:text-white dark:bg-black font-bold transition-all border-0   w-28 hover:from-cyan-400 hover:to-blue-400">
            Visit Site
          </button>
        </a>
        {project.github && <a target="_blank" href={project.github}>
          <button className="btn dark:text-white dark:bg-black border-0 font-bold transition-all w-28 hover:from-cyan-400 hover:to-blue-400">
            Github
          </button>
        </a>}
      </div>

    </div>
  </div>
}
export default Card;
 