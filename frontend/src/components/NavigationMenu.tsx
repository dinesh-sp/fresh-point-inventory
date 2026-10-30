import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

interface MenuItemType {
  label: string;
  path: string;
}

interface NavigationMenuProps {
  title: string;
  items: MenuItemType[];
}

export default function NavigationMenu({
  title,
  items,
}: NavigationMenuProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {title}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {items.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => {
              navigate(item.path);
              setAnchorEl(null);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}