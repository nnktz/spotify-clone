'use client';

import { useEffect, useState } from 'react';

import { ProductWithPrice } from '@/types';

import AuthModal from '../modals/auth-modal';
import UploadModal from '../modals/upload-modal';
import SubscribeModal from '../subscribe-modal';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
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
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
