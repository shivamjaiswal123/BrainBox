import { DeleteIcon } from '../icons/DeleteIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Video } from '../icons/Video';
import { X } from '../icons/X';

interface CardProps {
  link: string;
  type: 'youtube' | 'twitter';
  title: string;
}

function Card({ link, type, title }: CardProps) {
  return (
    <div className="max-w-72 max-h-96 p-4 bg-white shadow-md rounded outline outline-1 outline-slate-300">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          {type === 'twitter' ? <X /> : <Video />}
          <p className="text-black font-semibold">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </header>

      <div className="py-4">
        {type == 'youtube' && (
          <iframe
            className="w-full h-48"
            src={link.replace('watch', 'embed').replace('?v=', '/')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {type == 'twitter' && (
          <blockquote className="twitter-tweet" data-cards="hidden">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default Card;
