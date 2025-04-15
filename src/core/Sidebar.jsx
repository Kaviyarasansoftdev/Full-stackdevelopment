// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { FaHome, FaReact, FaNodeJs, FaDatabase, FaMobile, FaDocker, FaRoad, FaCode, FaBook } from 'react-icons/fa';

function Sidebar() {
  const menuItems = [
    { icon: <FaHome size={20} />, text: 'Home', path: '/' },
    { icon: <FaReact size={20} />, text: 'Frontend', path: '/frontend' },
    { icon: <FaNodeJs size={20} />, text: 'Backend', path: '/backend' },
    { icon: <FaDatabase size={20} />, text: 'Database', path: '/database' },
    { icon: <FaMobile size={20} />, text: 'Mobile Apps', path: '/mobile' },
    { icon: <FaDocker size={20} />, text: 'DevOps', path: '/devops' },
    { icon: <FaRoad size={20} />, text: 'Career Roadmap', path: '/roadmap' },
    { icon: <FaCode size={20} />, text: 'Project Ideas', path: '/projects' },
    { icon: <FaBook size={20} />, text: 'Resources', path: '/resources' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800">Learning Navigation</h2>
      </div>
      <nav className="mt-2">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-6 py-3 transition-colors ${
                    isActive 
                      ? 'bg-primary/10 text-primary border-r-4 border-primary' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;