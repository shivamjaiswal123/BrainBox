import { useAuth } from '../hooks/useAuth';
import { useSession } from '../hooks/useSession';
import logo from '../icons/logo.png';
import { Logout } from '../icons/Logout';
import { sideBarItems } from './SidebarItem';

function Sidebar() {
  const { data: session } = useSession();
  const { handleLogout } = useAuth();

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

        {/* user profile */}
        {session && (
          <div className="flex gap-4 dropdown dropdown-top avatar px-4 mt-60 hover:cursor-pointer">
            <div tabIndex={0} className="w-8 rounded-md bg-teal-500" />
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-md w-52 shadow mb-2"
            >
              <li>
                <button onClick={() => handleLogout()} className="text-red-600">
                  <Logout />
                  Logout
                </button>
              </li>
            </ul>
            <span className="font-semibold self-center">
              {session.user.username}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
