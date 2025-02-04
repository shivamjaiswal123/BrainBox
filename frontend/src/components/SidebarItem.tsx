import { LucideListTodo } from 'lucide-react';
import { Document } from '../icons/Document';
import { Link } from '../icons/Link';
import { Video } from '../icons/Video';
import { X } from '../icons/X';

export const sideBarItems = [
  {
    title: 'Tweets',
    icon: <X />,
  },
  {
    title: 'Videos',
    icon: <Video />,
  },
  {
    title: 'Documents',
    icon: <Document />,
  },
  {
    title: 'Links',
    icon: <Link />,
  },
  {
    title: 'Todos',
    icon: <LucideListTodo />,
  },
];
