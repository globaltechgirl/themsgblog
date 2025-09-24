import { Box, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Actions from "@/component/home/actions";
import mainImage from "@/assets/bg.svg";
import box1Image from "@/assets/box1.svg";
import box2Image from "@/assets/box2.svg";
import box3Image from "@/assets/box3.svg";
import box4Image from "@/assets/box4.svg";

interface CornerBoxProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: number;
  imgSrc: string;
  shadowLeft?: boolean;
}

const CornerBox = ({ top, bottom, left, right, rotate = 0, imgSrc, shadowLeft = true, }: CornerBoxProps) => (
  <Box
    style={{
      position: "absolute",
      top,
      bottom,
      left,
      right,
      width: 80,
      height: 80,
      borderRadius: 12,
      background: "var(--white-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: `rotate(${rotate}deg)`,
      boxShadow: shadowLeft ? "-6px 10px 18px rgba(0, 0, 0, 0.12)" : "6px 10px 18px rgba(0, 0, 0, 0.12)",
    }}
  >
    <Image
      src={imgSrc}
      alt="Decoration"
      style={{
        width: "90%",
        height: "90%",
        objectFit: "contain",
        background: "var(--white-200)",
        borderRadius: 8,
      }}
    />
  </Box>
);

const Welcome = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1200px)");

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
      <Box style={{ position: "relative", width: "100%", textAlign: "center", zIndex: 2 }}>
        <Image
          src={mainImage}
          alt="Main visual"
          fit="contain"
          style={{
            width: isLg
              ? "clamp(45%, 50vw, 45%)"
              : isMd
              ? "clamp(55%, 50vw, 55%)"
              : "clamp(75%, 50vw, 75%)",
            height: "auto",
            borderRadius: 12,
            margin: "0 auto",
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />

        <Box
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
            filter: "blur(30px)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>

      <CornerBox top="15%" left="12%" rotate={-4} imgSrc={box1Image} />
      <CornerBox bottom="47.5%" left="12%" rotate={-8} imgSrc={box2Image} />
      <CornerBox top="15%" right="12%" rotate={6} imgSrc={box3Image} shadowLeft={false} />
      <CornerBox bottom="47.5%" right="12%" rotate={-5} imgSrc={box4Image} shadowLeft={false} />

      <Box style={{ marginTop: isLg ? -40 : isMd ? 30 : -20 }}>
        <Text
          style={{
            fontWeight: 800,
            color: "var(--grey-100)",
            fontSize: isLg
              ? "clamp(7rem, 18vw, 7rem)"
              : isMd
              ? "clamp(5rem, 16vw, 5rem)"
              : "clamp(2.5rem, 15vw, 2.5rem)",
          }}
        >
          THE MESSAGE
        </Text>
        <Text
          style={{
            fontSize: isLg
              ? "clamp(7rem, 18vw, 7rem)"
              : isMd
              ? "clamp(5rem, 16vw, 5rem)"
              : "clamp(2.5rem, 15vw, 2.5rem)",
            color: "var(--grey-100)",
            opacity: 0.7,
            fontWeight: 800,
            marginTop: isLg ? -50 : isMd ? -10 : -10,
            marginBottom: -30,
          }}
        >
          IS JESUS IS LORD
        </Text>
      </Box>

      <Actions />
    </Box>
  );
};

export default Welcome;
