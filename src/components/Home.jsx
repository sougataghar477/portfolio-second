import { Link } from "react-router";
function Home(){
    return < >
        <h1 className="text-4xl font-bold text-white">Welcome To My Website</h1>
        <div className=" my-8 w-full">
        <img loading="lazy" className="rounded-2xl" src="/pexels-photo-3826666.jpeg" />
        </div>
        <p className="text-white leading-7 italic font-bold text-xl"> My name is Sougata Ghar and I am a front end web developer who is proficient in HTML, CSS, Javascript,React,Vue,Next JS,Express JS and MongoDB. </p>
        <p className="text-white leading-7 italic font-bold text-xl">My extension <a className="underline" href='https://chromewebstore.google.com/detail/image-copier-for-instagra/lejedjokmndehmcbfmpjbmimihobnfpo?hl=en&authuser=0'>Instagram Image Copier</a> is used by over 1200 people</p>
        <Link to={'/projects'}>
        <button className="btn font-bold mt-4 w-full bg-white text-black hover:bg-slate-200">Check Out My Projects</button>
        </Link>
                
    </ >
}
export default Home;