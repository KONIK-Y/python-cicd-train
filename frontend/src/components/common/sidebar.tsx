import { Drawer, List, Menu } from '@mui/material';
import { drawerWidth } from '../../constant/constant';

interface SideBarProps {
  children?: React.ReactNode;
}

export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {children}
    </Drawer>
  );
};
