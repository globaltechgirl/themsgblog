import { useRef, useLayoutEffect, useState, type ReactNode, type CSSProperties } from "react";
import { Box, Anchor } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface NavMenuProps {
  navItems: NavItem[];
  showSplash: boolean;
  Tooltip: React.FC<{ label: string }>;
}

const NavMenu: React.FC<NavMenuProps> = ({ navItems, showSplash, Tooltip }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeStyle, setActiveStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    if (showSplash) return;

    const container = containerRef.current;
    if (!container) return;

    const activeIndex = navItems.findIndex((item) => item.path === location.pathname);
    if (activeIndex === -1) return;

    const activeEl = navRefs.current[activeIndex];
    if (!activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    setActiveStyle({
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
    });
  }, [location.pathname, showSplash, navItems]);

  const navAnchorBase: CSSProperties = {
    color: "var(--grey-100)",
    borderRadius: "8px",
    padding: "7px 9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "color 0.25s ease-in-out",
  };

  if (showSplash) return null;

  return (
    <Box
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        gap: "10px",
        padding: "5px",
        borderRadius: "12px",
        backgroundColor: "var(--white-100)",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 4,
          left: activeStyle.left,
          width: activeStyle.width,
          height: "79%",
          backgroundColor: "var(--white-200)",
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
          ref={(el) => {
            navRefs.current[index] = el;
          }}
          style={{ ...navAnchorBase, zIndex: 1 }}
          onMouseEnter={() => setHoveredNav(label)}
          onMouseLeave={() => setHoveredNav(null)}
        >
          {icon}
          {hoveredNav === label && <Tooltip label={label} />}
        </Anchor>
      ))}
    </Box>
  );
};

export default NavMenu;
