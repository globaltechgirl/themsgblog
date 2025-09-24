import type { CSSProperties } from "react";
import { Box, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import mainImage from "@/assets/bg.svg";
import Actions from "@/component/home/actions";

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
    "top-left": { top: "clamp(10px, 5vw, 55px)", left: "clamp(-20px, -3vw, -20px)", borderTop: "3px solid var(--grey-100)", borderLeft: "3px solid var(--grey-100)" },
    "top-right": { top: "clamp(10px, 5vw, 55px)", right: "clamp(-20px, -3vw, -20px)", borderTop: "3px solid var(--grey-100)", borderRight: "3px solid var(--grey-100)" },
    "bottom-left": { bottom: "clamp(10px, 5vw, 55px)", left: "clamp(-20px, -3vw, -20px)", borderBottom: "3px solid var(--grey-100)", borderLeft: "3px solid var(--grey-100)" },
    "bottom-right": { bottom: "clamp(10px, 5vw, 55px)", right: "clamp(-20px, -3vw, -20px)", borderBottom: "3px solid var(--grey-100)", borderRight: "3px solid var(--grey-100)" },
  };

  return <Box style={{ ...baseStyle, ...positionStyles[position] }} />;
};

const Splashed = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        paddingTop: "clamp(5px, 5vw, 5px)",
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
          width: isLg ? "clamp(45%, 50vw, 45%)" : isMd ? "clamp(55%, 50vw, 55%)" : "clamp(65%, 50vw, 65%)",
          height: "auto",
          borderRadius: 12,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          marginTop: isLg ? "clamp(-15%, -18vw, -15%)" : isMd ? "clamp(-15%, -16vw, -15%)" : "clamp(-15%, -15vw, -15%)",
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
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
          zIndex: 3,
        }}
      />

      <Actions />
    </Box>
  );
};

export default Splashed;
