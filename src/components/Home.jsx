import { Link } from "react-router";
function Home(){
    return <div>
        <h1 className="text-4xl font-bold text-white">Welcome To My Website</h1>
        <div className=" my-8 w-full md:w-[440px]">
        <img loading="lazy" className="rounded-2xl" src="/pexels-photo-3826666.jpeg" />
        </div>
        <p className="text-white leading-7 italic font-bold text-xl"> My name is Sougata Ghar and I am a front end web developer who is proficient in HTML, CSS, Javascript,React,Vue,Next JS,Express JS and MongoDB. </p>
        <Link to={'/projects'}>
        <button className="btn font-bold mt-4 w-full bg-white text-black hover:bg-slate-200">Check Out My Projects</button>
        </Link>
                
    </div>
}
export default Home;