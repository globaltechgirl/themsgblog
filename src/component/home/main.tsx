import { Image, Box, Text } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import type { CSSProperties } from "react";
import mainImage from "@/assets/bg.svg";

interface CornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const isMd = useMediaQuery('(min-width: 768px)');
const isLg = useMediaQuery('(min-width: 1200px)');

const Corner = ({ position }: CornerProps) => {
  const styles: Record<CornerProps["position"], CSSProperties> = {
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

  return (
    <Box
      style={{
        position: "absolute",
        width: "clamp(8px, 2vw, 15px)",
        height: "clamp(8px, 2vw, 15px)",
        ...styles[position],
      }}
    />
  );
};

const Main = () => {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        paddingTop: "clamp(60px, 5vw, 80px)",
        overflow: "hidden", 
      }}
    >
      <Box style={{ position: "relative", display: "inline-block" }}>
<Text style={{
  fontWeight: 600,
  color: 'var(--grey-100)',
  fontSize: isLg ? '5rem' : isMd ? '2.6rem' : '1.8rem'
}}>
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
          width: "clamp(400px, 50vw, 50%)",
          height: "auto",
          borderRadius: 12,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          marginTop: "clamp(-190px, -15vw, -80px)",
          marginBottom: "clamp(-20px, -3vw, -25px)",
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 250,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default Main;
