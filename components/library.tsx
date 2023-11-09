'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

import useAuthModal from '@/hooks/use-auth-modal';
import useUpdateModal from '@/hooks/use-update-modal';
import { useUser } from '@/hooks/use-user';
import { Song } from '@/types';
import MediaItem from './media-item';

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const updateModal = useUpdateModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //
    // Check for subscription
    //
    return updateModal.onOpen();
  };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist
            size={26}
            className='text-neutral-400'
          />

          <p className='text-neutral-400 font-medium text-base'>Your Library</p>
        </div>

        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className='text-neutral-400 cursor-pointer hover:text-white transition'
        />
      </div>

      <div className='flex flex-col gap-y-2 mt-4 px-3'>
        {songs.map((song) => (
          <MediaItem
            key={song.id}
            data={song}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
