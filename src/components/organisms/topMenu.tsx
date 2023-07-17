import { SideMenu } from "../molecules/sideMenu"
import { Header } from "../molecules/header"

type TopMenuProps = {
  isOpen: boolean;
  onToggleClose: (isOpen: boolean) => void;
  onToggleOpen: (isOpen: boolean) => void;
}

export const TopMenu: React.FC<TopMenuProps> = ({
  isOpen,
  onToggleClose,
  onToggleOpen
}) => {

  const handleOpen = (isOpen: boolean) => {
    onToggleOpen(isOpen);
  }

  const handleClose = (isOpen: boolean) => {
    onToggleClose(isOpen);
  }

  return (
    <>
      <Header isOpen={isOpen} onToggleOpen={(isOpen) => handleOpen(isOpen)} />
      <SideMenu isOpen={isOpen} onToggleClose={(isOpen) => handleClose(isOpen)} />
    </>
  )
}