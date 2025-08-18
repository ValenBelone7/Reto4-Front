import { Box, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";

export const CardTradicion = () => (
  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="white" maxW="100%">
    <AspectRatio ratio={1} mb={3} borderRadius="md" overflow="hidden">
      <Image src="/tradicion.jpg" alt="Tradición" objectFit="cover" />
    </AspectRatio>
    <Heading fontSize="xl" mb={2}>Tradición</Heading>
    <Text>Costumbres que pasan de generación en generación en todo el país.</Text>
  </Box>
);
