import { useState } from 'react';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import AddContentModal from '../components/AddContentModal';
import ShareBrainModal from '../components/ShareBrainModal';

function Dashboard() {
  const [openAddContentModal, setOpenAddContentModal] = useState(false);
  const [openShareBrainModal, setOpenShareBrainModal] = useState(false);

  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>

      <AddContentModal
        open={openAddContentModal}
        close={() => setOpenAddContentModal(false)}
      />
      <ShareBrainModal
        open={openShareBrainModal}
        close={() => setOpenShareBrainModal(false)}
      />

      <div className="w-full h-screen bg-gray-300 px-8 py-6 ml-60">
        <header className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">All Contents</h1>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setOpenAddContentModal(true)}
              title="Add Content"
              variant="primary"
              startIcon={<PlusIcon />}
            />
            <Button
              onClick={() => setOpenShareBrainModal(true)}
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
