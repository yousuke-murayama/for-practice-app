import { TopMenu } from "../../components/organisms/topMenu";
import { useTopMenu } from "./hooks/useTopMenu";

export const TopMenuContainer: React.FC = () => {

  const {isOpen, handleOpen, handleClose } = useTopMenu();

  return (
    <TopMenu 
      isOpen={isOpen}
      onToggleClose={(isOpen) => handleClose(isOpen)}
      onToggleOpen={(isOpen) => handleOpen(isOpen)}
    />
  )
}