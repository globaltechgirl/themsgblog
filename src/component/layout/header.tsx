import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Group, Anchor, Image, Avatar, Box, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.svg";
import profile from "@/assets/profile.png";
import { ROUTES } from "@/utils/constants";

import HomeIcon from "@/assets/icons/home";
import BlogsIcon from "@/assets/icons/blogs";
import DailyIcon from "@/assets/icons/daily";
import ReadsIcon from "@/assets/icons/reads";
import LoginIcon from "@/assets/icons/login"; 
import SettingsIcon from "@/assets/icons/settings";

const Tooltip = ({ label }: { label: string }) => (
  <Box
    style={{
      position: "absolute",
      top: "135%",
      backgroundColor: "var(--white-200)",
      borderRadius: "8px",
      padding: "2px 6px",
      whiteSpace: "nowrap",
      zIndex: 20,
    }}
  >
    <Text style={{ color: "var(--black-100)", fontSize: 9, fontWeight: 500 }}>
      {label}
    </Text>
  </Box>
);

const Header = () => {
  const location = useLocation();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<HTMLAnchorElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });

  const navItems = [
    { icon: <HomeIcon width={14} height={14} />, label: "Home", path: ROUTES.HOME },
    { icon: <BlogsIcon width={14} height={14} />, label: "Blogs", path: ROUTES.BLOGS },
    { icon: <DailyIcon width={14} height={14} />, label: "Daily", path: ROUTES.DAILY },
    { icon: <ReadsIcon width={14} height={14} />, label: "Reads", path: ROUTES.READS },
  ];

  const dropdownItems = [
    { icon: <LoginIcon width={12} height={12} />, label: "Login", path: "/login" },
    { icon: <SettingsIcon width={12} height={12} />, label: "Settings", path: "/settings" },
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeIndex = navItems.findIndex(item => item.path === location.pathname) || 0;
    const activeEl = navRefs.current[activeIndex];
    if (!activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    const newLeft = activeRect.left - containerRect.left;
    const newWidth = activeRect.width;

    setActiveStyle(prev =>
      prev.left === newLeft && prev.width === newWidth
        ? prev
        : { left: newLeft, width: newWidth }
    );
  }, [location.pathname, navItems]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navAnchorBase = {
    color: "var(--black-100)",
    borderRadius: "8px",
    padding: "7px 9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    transition: "color 0.25s ease-in-out",
  };

  return (
    <Group h={60} px="md" justify="space-between" align="center">
      <Image src={logo} alt="Logo" w={35} h="auto" fit="contain" />

      <Box
        ref={containerRef}
        style={{
          position: "relative",
          display: "flex",
          gap: "10px",
          padding: "5px",
          borderRadius: "12px",
          backgroundColor: "var(--white-200)",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 4,
            left: activeStyle.left,
            width: activeStyle.width,
            height: "79%",
            backgroundColor: "var(--white-100)",
            borderRadius: "8px",
            boxShadow: "0 0px 5px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease-in-out",
            zIndex: 0,
          }}
        />
        {navItems.map(({ icon, label, path }, index) => (
          <Anchor
            key={label}
            component={Link}
            to={path}
            ref={el => { if (el) navRefs.current[index] = el; }}
            style={{ ...navAnchorBase, zIndex: 1 }}
            onMouseEnter={() => setHoveredNav(label)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {icon}
            {hoveredNav === label && <Tooltip label={label} />}
          </Anchor>
        ))}
      </Box>

      <Box
        style={{ position: "relative" }}
        ref={dropdownRef}
      >
        <Avatar
          src={profile}
          alt="profile"
          radius="xl"
          size={28}
          style={{ border: "0.5px solid var(--black-200)", cursor: "pointer" }}
          onClick={() => setDropdownOpen(prev => !prev)}
        />

        {dropdownOpen && (
          <Box
            style={{
              position: "absolute",
              top: "110%",
              right: 0,
              backgroundColor: "var(--white-200)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 10,
              padding: "5px",
              gap: "5px",
            }}
          >
            {dropdownItems.map(({ icon, label, path }) => (
              <Anchor
                key={label}
                component={Link}
                to={path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  color: "var(--black-100)",
                  backgroundColor: "var(--white-200)",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--white-100)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "var(--white-200)"}
                onClick={() => setDropdownOpen(false)}
              >
                {icon}
                <Text style={{ color: "var(--black-100)", fontSize: 9, fontWeight: 500 }}>
                  {label}
                </Text>
              </Anchor>
            ))}
          </Box>
        )}
      </Box>
    </Group>
  );
};

export default Header;
