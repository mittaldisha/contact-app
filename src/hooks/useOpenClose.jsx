import { useState } from 'react';

function useOpenClose() {
  const [isOpen, setIsOpen] = useState(false);
  const openList = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return { isOpen, openList, close };
}

export default useOpenClose;
