import { Box, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";

export const CardYerba = () => (
  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="white" maxW="sm" mx="auto">
    <AspectRatio ratio={1} mb={4} borderRadius="md" overflow="hidden">
      <Image src="/yerba.jpg" alt="Yerba" objectFit="cover" />
    </AspectRatio>
    <Heading fontSize="xl" mb={2}>Yerba</Heading>
    <Text>Con palo, sin palo, orgánica o saborizada. Conocé las variedades.</Text>
  </Box>
);
