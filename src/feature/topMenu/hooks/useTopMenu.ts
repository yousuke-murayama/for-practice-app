import { useState } from "react"

export const useTopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    isOpen = true;
    setIsOpen(isOpen);
  }

  const handleClose = (isOpen: boolean) => {
    isOpen = false;
    setIsOpen(isOpen);
  }

  return {isOpen, handleOpen, handleClose }
}