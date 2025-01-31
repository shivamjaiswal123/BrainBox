import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useSharedBrainContent } from '../hooks/useSharedBrainContent';
import Card from '../components/Card';

function ShareBrainView() {
  const { link } = useParams();

  const { data, isLoading } = useSharedBrainContent(link!);

  if (typeof data === 'string') {
    return (
      <div className="font-semibold text-3xl flex justify-center mt-10">
        {data}
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>

      {/* All content */}
      <div className="w-full min-h-screen bg-gray-300 px-8 pt-6 pb-12 ml-60">
        <div className="flex flex-wrap gap-6 mt-10">
          {isLoading ? (
            <div className="fixed inset-0 flex justify-center left-20">
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            data.brain.map((content: any, index: number) => {
              return (
                <div key={index}>
                  <Card
                    title={content.title}
                    type={content.type}
                    link={content.link}
                    id={content._id}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ShareBrainView;
