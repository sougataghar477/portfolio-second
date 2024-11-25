import { NavLink } from "react-router";
const links=[{name:'🏡  Home',to:'/'},{name:'📋  Projects',to:'/projects'},{name:'🧩 Extensions',to:'/extensions'},{name:'📞  Contact',to:'/contact'}]
function Sidebar(){
    return <div className="my-8 relative block w-96 hidden md:block">
        
        <ul className="fixed">
        <h1 className="text-4xl text-white mb-4">Sougata Ghar</h1>  
        {links.map((link,index)=> 
      <NavLink 
        key={index}
        className={`text-white link ${(isActive)=>isActive ? "active" : null}`}  
        to={link.to}>
<li className="w-full lg:w-56">{link.name}</li>
</NavLink>)}
        </ul>
    </div>
}
export default Sidebar;