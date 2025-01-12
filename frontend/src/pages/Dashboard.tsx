import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';

function Dashboard() {
  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>

      <div className="w-full h-screen bg-gray-300 px-8 py-6 ml-60">
        <header className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">All Contents</h1>
          </div>
          <div className="flex gap-4">
            <Button
              title="Add Content"
              variant="primary"
              startIcon={<PlusIcon />}
            />
            <Button
              title="Share Brain"
              variant="secondary"
              startIcon={<ShareIcon />}
            />
          </div>
        </header>

        {/* All content */}
        <div className="flex flex-wrap gap-6 mt-10"></div>
      </div>
    </div>
  );
}

export default Dashboard;
