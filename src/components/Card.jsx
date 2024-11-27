
function Card({ project }) {
  return <div className="card scale-card relative bg-base-300   shadow-xl mb-8 w-full">
     
    <div className="card-body">
      <h1 className="card-title text-white">{project.heading}</h1>
      <p className="leading-6 mb-4 italic text-white">{project.text}</p>
      <div className="flex gap-4">
        <a target="_blank" href={project.link}>
          <button className="btn bg-[#2cb0ff] font-bold border-0  text-[#fff] w-28 hover:bg-sky-400">
            Check Out
          </button>
        </a>
        {project.github && <a target="_blank" href={project.github}>
          <button className="btn  bg-[#2cb0ff] border-0 font-bold  text-[#fff] w-28 hover:bg-sky-400">
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