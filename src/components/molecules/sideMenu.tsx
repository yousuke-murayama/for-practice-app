import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

type SideMenuProps = {
  isOpen: boolean;
  onToggleClose: (isOpen: boolean) => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  onToggleClose
}) => {

  const handleClose = () => {
    onToggleClose(isOpen);
  }

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
    >
      <List>
        <ListItem divider onClick={handleClose}>
          <ListItemIcon>
            <ListItemText>タスク一覧</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider onClick={handleClose}>
          <ListItemIcon>
            <ListItemText>新規タスク作成</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider onClick={handleClose}>
          <ListItemIcon>
            <ListItemText>完了したタスク</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  )
}