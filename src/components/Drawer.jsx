import { useState } from "react";
import { NavLink } from "react-router";
const links = [{ name: '🏡  Home', to: '/' }, { name: '📋  Projects', to: '/projects' }, { name: '🧩 Extensions', to: '/extensions' }, { name: '📞  Contact', to: '/contact' }]
function Drawer() {
    let [isDrawerOpen, setDrawer] = useState(false)
    return <div className="md:hidden relative">
        <div className="absolute top-0 right-2 text-right text-4xl">
            {isDrawerOpen ?
                <span onClick={() => setDrawer(prev => !prev)}>&times;</span> :
                <span onClick={() => setDrawer(prev => !prev)}>&#8801;</span>}

        </div>
        <div className={`bg-neutral fixed top-0 left-0 min-h-screen z-10 w-3/4 transition-all -translate-x-full ${isDrawerOpen ? 'transform-none' : ''}`}>
            <ul className="p-2">

                {links.map((link, index) => (
                    <li key={index} className="w-full lg:w-56 font-bold">
                        <NavLink
                            onClick={() => setDrawer(false)}

                            className={({ isActive }) =>
                                `text-white link ${isActive ? "active" : ""}`
                            }
                            to={link.to}
                        >
                            {link.name}
                        </NavLink>
                    </li>

                ))}
            </ul>
        </div>
    </div>
}
export default Drawer;