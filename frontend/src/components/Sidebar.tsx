import logo from '../icons/logo.png';
import { sideBarItems } from './SidebarItem';

function Sidebar() {
  return (
    <div className="bg-white h-screen min-w-60 shadow border-r-2 border-gray-200">
      <header>
        <div className="flex items-center px-6 py-4 gap-4">
          <img src={logo} width={45} />
          <h1 className="text-2xl font-semibold">Brain Box</h1>
        </div>
      </header>

      {/* nav items */}
      <div>
        <div className="space-y-6 px-8 py-6">
          {sideBarItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              {item.icon} <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
