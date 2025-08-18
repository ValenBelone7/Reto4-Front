import { Box, Heading, Text, Image, AspectRatio } from "@chakra-ui/react";

export const CardAccesorios = () => (
  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="white" maxW="100%">
    <AspectRatio ratio={1} mb={3} borderRadius="md" overflow="hidden">
      <Image src="/accesorios.jpeg" alt="Accesorios" objectFit="cover" />
    </AspectRatio>
    <Heading fontSize="xl" mb={2}>Accesorios</Heading>
    <Text>Desde el clásico mate de calabaza hasta los termos más lindos.</Text>
  </Box>
);
