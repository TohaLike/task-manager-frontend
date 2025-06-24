"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Container, Menu, MenuItem } from "@mui/material";
import { useLogout } from "@/features/Auth/hooks";
import Link from "next/link";

export const HomeAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { logoutTrigger } = useLogout();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await logoutTrigger({});
      setAnchorEl(null);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleLogout}>Выйти из системы</MenuItem>
        </Menu>
        <AppBar position="static">
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{ maxWidth: 1300, "&.MuiContainer-root": { p: 0 } }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href={"/home"}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Менеджер проектов
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  id="demo-positioned-button"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="inherit"
                >
                  <AccountCircle shapeRendering="geometricprecision" />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};
