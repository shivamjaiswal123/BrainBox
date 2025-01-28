import { useContent } from '../hooks/useContent';
import { DeleteIcon } from '../icons/DeleteIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Video } from '../icons/Video';
import { X } from '../icons/X';

interface CardProps {
  link: string;
  type: 'youtube' | 'tweet';
  title: string;
  id: string;
}

function Card({ link, type, title, id }: CardProps) {
  const { deleteContent } = useContent();

  const deleteC = () => {
    deleteContent(id);
  };

  return (
    <div className="min-w-72 overflow-clip max-h-96 p-4 bg-white shadow-md rounded outline outline-1 outline-slate-300">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          {type === 'tweet' ? <X /> : <Video />}
          <p className="text-black font-semibold">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* <ShareIcon /> */}
          <DeleteIcon deleteC={deleteC} />
        </div>
      </header>

      <div className="py-4">
        {type == 'youtube' && (
          <iframe
            className="w-full h-48"
            src={link.split('&')[0].replace('watch?v=', 'embed/')}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
        {type == 'tweet' && (
          <div>
            <blockquote className="twitter-tweet" data-cards="hidden">
              <a href={link.replace('/x', '/twitter')}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
