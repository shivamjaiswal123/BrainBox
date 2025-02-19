import { useEffect, useRef, useState } from 'react';
import { Cross } from '../icons/Cross';
import Input from './Input';
import { useToggleBrainSharing } from '../hooks/useToggleBrainSharing';
import { toast } from 'sonner';
import { useShareStatus } from '../hooks/useShareStatus';

interface ModalProps {
  open: boolean;
  close: () => void;
}

function ShareBrainModal({ open, close }: ModalProps) {
  const [isSharing, setIsSharing] = useState(false);
  // const isMounted = useRef<Boolean>(false);
  const urlRef = useRef<HTMLInputElement>(null);

  // create or remove the shareable link
  const { mutate: toggleBrainShare, data, isPending } = useToggleBrainSharing();

  // fetch sharing status on opening the modal
  const { data: currentSharingStatus } = useShareStatus(open);

  useEffect(() => {
    if (currentSharingStatus !== undefined) {
      // if sharing is enabled then get the already created hash
      if (currentSharingStatus) {
        toggleBrainShare({ share: currentSharingStatus });
      }
      setIsSharing(currentSharingStatus);
    }
  }, [currentSharingStatus]);

  const handleToggle = () => {
    setIsSharing((prev) => {
      toggleBrainShare({ share: !prev });
      return !prev;
    });
  };

  // useEffect(() => {
  //   if (isMounted.current) {
  //     toggleBrainShare({ share: isSharing });
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [isSharing]);

  const copyToClip = () => {
    navigator.clipboard.writeText(urlRef.current?.value as string);
    toast.success('Link copied');
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex justify-end">
              <button onClick={close}>
                <Cross />
              </button>
            </div>
            <h1 className="text-black font-bold text-2xl mb-6">
              Share Your Brain Box
            </h1>

            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  className="sr-only peer"
                  checked={isSharing}
                />
                <div className="relative w-14 h-7 bg-gray-400 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[6px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                <span className="ms-3 text-black font-semibold select-none">
                  {isSharing ? 'Sharing Enabled' : 'Sharing Disabled'}
                </span>
              </label>
            </div>

            <div className="mt-6">
              {isSharing && (
                <div>
                  <div className="flex gap-4 items-center">
                    <h1 className="text-sm w-28 font-bold text-black">
                      Share Link
                    </h1>
                    {!isPending && (
                      <Input
                        type="text"
                        link={`http://localhost:5173/${data?.hash}`}
                        iRef={urlRef}
                      />
                    )}
                  </div>
                  <div className="text-end mt-6">
                    <button
                      onClick={copyToClip}
                      className="px-4 py-2 bg-black font-medium tracking-wider text-sm text-white hover:bg-gray-800 rounded-md transition duration-350"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareBrainModal;
