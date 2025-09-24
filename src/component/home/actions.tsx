import { Box, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import SubstackIcon from "@/assets/icons/substack";
import InstagramIcon from "@/assets/icons/instagram";
import PeopleIcon from "@/assets/icons/people";

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
        padding: 3,
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

const FooterActions = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1200px)");

  const iconSize = isLg ? 14 : isMd ? 13 : 12;
  const iconPadding = isLg ? 6 : isMd ? 5 : 3;

  return (
    <Group
      px="md"
      justify="space-between"
      align="center"
      w="100%"
      style={{ position: "absolute", bottom: 10, zIndex: 4 }}
    >
      <Group gap={6}>
        <IconButton href="https://instagram.com" padding={iconPadding}>
          <InstagramIcon width={iconSize} height={iconSize} />
        </IconButton>
        <IconButton href="https://substack.com" padding={iconPadding}>
          <SubstackIcon width={iconSize} height={iconSize} />
        </IconButton>
      </Group>

      <Box
        style={{
          background: "white",
          borderRadius: 12,
          padding: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            background: "var(--white-200)",
            borderRadius: 8,
            padding: `${isLg ? "6px" : isMd ? "5px" : "3px"} 8px`,
            display: "flex",
            alignItems: "center",
            gap: 5,
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
  );
};

export default FooterActions;
