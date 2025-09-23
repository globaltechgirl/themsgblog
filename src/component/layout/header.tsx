import { Group, Box, Text } from "@mantine/core";
import { type ReactNode } from "react";

import LogoLink from "@/component/header/logoLink";
import NavMenu from "@/component/header/navaMenu";
import NavLink from "@/component/header/navLink";

import { ROUTES } from "@/utils/constants";

import HomeIcon from "@/assets/icons/home";
import BlogsIcon from "@/assets/icons/blogs";
import DailyIcon from "@/assets/icons/daily";
import ReadsIcon from "@/assets/icons/reads";
import LoginIcon from "@/assets/icons/login";
import SettingsIcon from "@/assets/icons/settings";

interface HeaderProps {
  showSplash?: boolean;
}

export interface NavItem {
  icon: ReactNode;
  label: string;
  path: string;
}

export const Tooltip = ({ label }: { label: string }) => (
  <Box
    style={{
      position: "absolute",
      top: "135%",
      backgroundColor: "var(--white-100)",
      borderRadius: "8px",
      padding: "2px 6px 2px 6px",
      whiteSpace: "nowrap",
      zIndex: 20,

    }}
  >
    <Text style={{ color: "var(--grey-100)", fontSize: 9, fontWeight: 500 }}>
      {label}
    </Text>
  </Box>
);

const Header = ({ showSplash = false }: HeaderProps) => {
  const navItems: NavItem[] = [
    { icon: <HomeIcon width={14} height={14} />, label: "Home", path: ROUTES.HOME },
    { icon: <BlogsIcon width={14} height={14} />, label: "Blogs", path: ROUTES.BLOGS },
    { icon: <DailyIcon width={14} height={14} />, label: "Daily", path: ROUTES.DAILY },
    { icon: <ReadsIcon width={14} height={14} />, label: "Reads", path: ROUTES.READS },
  ];

  const dropdownItems: NavItem[] = [
    { icon: <LoginIcon width={12} height={12} />, label: "Login", path: "/login" },
    { icon: <SettingsIcon width={12} height={12} />, label: "Settings", path: "/settings" },
  ];

  return (
    <Group h={60} px="md" justify="space-between" align="center">
      <LogoLink />

      <NavMenu navItems={navItems} showSplash={showSplash} Tooltip={Tooltip} />

      <NavLink showSplash={showSplash} dropdownItems={dropdownItems} />
    </Group>
  );
};

export default Header;
