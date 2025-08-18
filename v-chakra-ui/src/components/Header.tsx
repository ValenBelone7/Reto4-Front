import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => (
  <Box bg="green.600" color="white" py={4} px={6}>
    <Flex justify="space-between" align="center">
      <Heading size="md">Mateando</Heading>
      <Flex gap={4}>
        <Link href="/">
          <Button variant="ghost" color="white">Inicio</Button>
        </Link>
        <Link href="/tradicion">
        <Button variant="ghost" color="white">Tradición</Button>
        </Link>
        <Link href="/venta">
        <Button variant="ghost" color="white">Tienda</Button>
        </Link>
      </Flex>
    </Flex>
  </Box>
);
