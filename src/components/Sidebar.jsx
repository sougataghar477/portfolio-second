import { NavLink } from "react-router";
const links=[{name:'🏡  Home',to:'/'},{name:'📋  Projects',to:'/projects'},{name:'🧩 Extensions',to:'/extensions'},{name:'📞  Contact',to:'/contact'}]
function Sidebar(){
    return <div className="my-8 relative block min-w-[230px] hidden md:block">
        
        <ul className="fixed">
        <h1 className="text-4xl font-bold text-white mb-4">Sougata Ghar</h1>  
{links.map((link, index) => (
  <NavLink
    key={index}
    className={({ isActive }) => 
      `dark:text-white link ${isActive ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : ""}`
    }
    to={link.to}
  >
    <li className="w-full md:w-56">{link.name}</li>
  </NavLink>
))}

        </ul>
    </div>
}
export default Sidebar;