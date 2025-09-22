import type { CSSProperties } from "react";
import { Image, Box, Text, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import mainImage from "@/assets/bg.svg";
import SubstackIcon from "@/assets/icons/substack";
import InstagramIcon from "@/assets/icons/instagram";
import PeopleIcon from "@/assets/icons/people";

interface CornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Corner = ({ position }: CornerProps) => {
  const baseStyle: CSSProperties = {
    position: "absolute",
    width: "clamp(8px, 2vw, 15px)",
    height: "clamp(8px, 2vw, 15px)",
  };

  const positionStyles: Record<CornerProps["position"], CSSProperties> = {
    "top-left": {
      top: "clamp(10px, 5vw, 55px)",
      left: "clamp(-20px, -3vw, -20px)",
      borderTop: "3px solid var(--grey-100)",
      borderLeft: "3px solid var(--grey-100)",
    },
    "top-right": {
      top: "clamp(10px, 5vw, 55px)",
      right: "clamp(-20px, -3vw, -20px)",
      borderTop: "3px solid var(--grey-100)",
      borderRight: "3px solid var(--grey-100)",
    },
    "bottom-left": {
      bottom: "clamp(10px, 5vw, 55px)",
      left: "clamp(-20px, -3vw, -20px)",
      borderBottom: "3px solid var(--grey-100)",
      borderLeft: "3px solid var(--grey-100)",
    },
    "bottom-right": {
      bottom: "clamp(10px, 5vw, 55px)",
      right: "clamp(-20px, -3vw, -20px)",
      borderBottom: "3px solid var(--grey-100)",
      borderRight: "3px solid var(--grey-100)",
    },
  };

  return <Box style={{ ...baseStyle, ...positionStyles[position] }} />;
};

interface IconButtonProps {
  href: string;
  children: React.ReactNode;
  padding: string | number;
}

const IconButton = ({ href, children, padding }: IconButtonProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Box
      style={{
        background: "var(--white-100)",
        borderRadius: "50%",
        padding: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          background: "var(--white-200)",
          borderRadius: "50%",
          padding,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--grey-100)",
        }}
      >
        {children}
      </Box>
    </Box>
  </a>
);

const Main = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1200px)");

  const iconSize = isLg ? 14 : isMd ? 13 : 12;
  const iconPadding = isLg ? "6px" : isMd ? "5px" : "3px";

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        paddingTop: "clamp(10px, 5vw, 10px)",
        paddingBottom: !isMd ? 20 : "auto",
        overflow: "hidden",
      }}
    >
      <Box style={{ position: "relative", display: "inline-block" }}>
        <Text
          style={{
            fontWeight: 600,
            color: "var(--grey-100)",
            fontSize: isLg
              ? "clamp(13.5rem, 18vw, 13.5rem)"
              : isMd
              ? "clamp(8.5rem, 16vw, 8.5rem)"
              : "clamp(3rem, 15vw, 4rem)",
          }}
        >
          MESSAGE
        </Text>
        <Corner position="top-left" />
        <Corner position="top-right" />
        <Corner position="bottom-left" />
        <Corner position="bottom-right" />
      </Box>

      <Image
        src={mainImage}
        alt="Main visual"
        fit="contain"
        style={{
          width: isLg
            ? "clamp(45%, 50vw, 45%)"
            : isMd
            ? "clamp(55%, 50vw, 55%)"
            : "clamp(65%, 50vw, 65%)",
          height: "auto",
          borderRadius: 12,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          marginTop: isLg
            ? "clamp(-15%, -18vw, -15%)"
            : isMd
            ? "clamp(-15%, -16vw, -15%)"
            : "clamp(-15%, -15vw, -15%)",
          marginBottom: "clamp(-20px, -3vw, -25px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: isLg ? 250 : isMd ? 150 : 100,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
          zIndex: 3,
        }}
      />

      <Group
        px="md"
        justify="space-between"
        align="center"
        w="100%"
        style={{
          position: "absolute",
          bottom: 10,
          zIndex: 4,
        }}
      >
        <Box style={{ display: "flex", gap: "6px" }}>
          <IconButton href="https://instagram.com" padding={iconPadding}>
            <InstagramIcon width={iconSize} height={iconSize} />
          </IconButton>

          <IconButton href="https://substack.com" padding={iconPadding}>
            <SubstackIcon width={iconSize} height={iconSize} />
          </IconButton>
        </Box>

        <Box
          style={{
            background: "white",
            borderRadius: 12,
            padding: "3px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              background: "var(--white-200)",
              borderRadius: 8,
              padding: isLg ? "6px 8px" : isMd ? "5px 8px" : "3px 8px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "var(--grey-100)",
            }}
          >
            <PeopleIcon width={iconSize} height={iconSize} />
            <Text
              style={{
                fontSize: isLg ? 9.5 : isMd ? 9 : 8.5,
                fontWeight: 500,
              }}
            >
              Join Community
            </Text>
          </Box>
        </Box>
      </Group>
    </Box>
  );
};

export default Main;
