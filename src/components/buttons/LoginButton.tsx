import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactElement, useState } from 'react';
import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

export function LoginButton(): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleIcon sx={{ color: '#3f3f3f' }}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              'overflow': 'visible',
              'filter': 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              'mt': 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} sx={{ 'fontFamily': 'Poppins' }}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ 'fontFamily': 'Poppins' }}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
      Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ 'fontFamily': 'Poppins' }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
      Settings
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ 'fontFamily': 'Poppins' }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
      Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
