import { Stack, Image, Title, Group, Text } from "@mantine/core";
import { IconBolt, IconCheck, IconBell } from "@tabler/icons-react";


// Post interface for strong typing
interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

/**
 * Main Component
 *
 * Handles:
 * - Fetching posts from API
 * - Creating, updating, deleting posts
 * - Searching posts
 * - Displaying posts grid
 * - Showing success/error messages
 */

const Main: React.FC = () => {

  return (
    <Stack p="md" mt={80} gap={30} style={{ maxWidth: 800, margin: "0 auto" }}>
      {/* Header Section */}
      <Stack gap={0} align="center">
       
        <Title style={{ fontSize: 32, fontWeight: 400, color: "var(--black-100)", textAlign: "center" }}>
          The latest in TiPost
        </Title>
        <Title style={{ fontSize: 32, fontWeight: 400, color: "var(--white-400)", textAlign: "center" }}>
          delivered to your inbox weekly.
        </Title>
        <Group gap="sm" mt={20}>
          <Group gap={4}>
            <IconBolt size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Easy to use</Text>
          </Group>
          <Group gap={4}>
            <IconCheck size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Hassle free</Text>
          </Group>
          <Group gap={4}>
            <IconBell size={9.5} stroke={1.5} style={{ color: "var(--white-400)" }} />
            <Text style={{ fontSize: 9.5, fontWeight: 450, color: "var(--white-400)" }}>Fast updates</Text>
          </Group>
        </Group>
      </Stack>

      {/* Create / Edit Post Section */}
    
    </Stack>
  );
};

export default Main;
