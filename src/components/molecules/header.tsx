import { AppBar, Toolbar, Typography } from "@mui/material"
import { HeaderIconBtn } from "../atoms/iconButton/headerIconBtn"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type HeaderProps = {
  isOpen: boolean;
  onToggleOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isOpen,
  onToggleOpen
}) => {

  //マウスイベントにはbooleanを引数にできない
  const handleOpen = () => {
    onToggleOpen(isOpen);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderIconBtn
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleOpen}
         >
          <ArrowForwardIosIcon/>
        </HeaderIconBtn>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          タスク管理さん
        </Typography>
      </Toolbar>
    </AppBar>
  )
}