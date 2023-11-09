'use client';

import { useEffect, useState } from 'react';

import AuthModal from '../modals/auth-modal';
import UploadModal from '../modals/upload-modal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
