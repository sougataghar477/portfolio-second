
function Card({ project }) {
  return <div className="card scale-card relative bg-gradient-to-r from-[#0288d1] to-[#005b9f] mb-8 w-full">

    <div className="card-body">
      <h1 className="card-title text-white">{project.heading}</h1>
      <p className="leading-6 mb-4 italic text-white">{project.text}</p>
      <div className="flex gap-4">
        <a target="_blank" href={project.link}>
          <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold transition-all border-0  text-white w-28 hover:from-cyan-400 hover:to-blue-400">
            Visit Site
          </button>
        </a>
        {project.github && <a target="_blank" href={project.github}>
          <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 border-0 font-bold transition-all text-white w-28 hover:from-cyan-400 hover:to-blue-400">
            Github
          </button>
        </a>}
      </div>

    </div>
  </div>
}
export default Card;
// bg-base-300
// bg-gradient-to-r from-[#1c91d5] to-sky-400