import { useState, useRef, useEffect, type ReactNode } from "react";
import { Anchor, Avatar, Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import profile from "@/assets/profile.png";
import AppIcon from "@/assets/app.svg";

interface NavItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface NavLinkProps {
  showSplash: boolean;
  dropdownItems: NavItem[];
}

const NavLink = ({ showSplash, dropdownItems }: NavLinkProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (showSplash) {
    return (
      <Anchor
        component={Link}
        to="https://www.bible.com/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid var(--white-100)",
          borderRadius: "50%",
          width: 28,
          height: 28,
          cursor: "pointer",
        }}
      >
        <img src={AppIcon} alt="Bible" width={12} height={12} />
      </Anchor>
    );
  }

  return (
    <Box ref={dropdownRef} style={{ position: "relative" }}>
      <Avatar
        src={profile}
        alt="Profile"
        radius="xl"
        size={28}
        style={{ border: "2px solid var(--white-100)", cursor: "pointer" }}
        onClick={() => setDropdownOpen((prev) => !prev)}
      />

      {dropdownOpen && (
        <Box
          style={{
            position: "absolute",
            top: "120%",
            right: 0,
            backgroundColor: "var(--white-100)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 10,
            padding: "5px",
            gap: "5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
                color: "var(--grey-100)",
                backgroundColor: "var(--white-100)",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--white-200)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--white-100)")
              }
              onClick={() => setDropdownOpen(false)}
            >
              {icon}
              <Text style={{ color: "var(--grey-100)", fontSize: 9, fontWeight: 500 }}>{label}</Text>
            </Anchor>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavLink;
