import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="green.50" minH="100vh">
      {/* ENCABEZADO */}
      <Box bg="green.600" color="white" py={4} px={6}>
        <Flex justify="space-between" align="center">
          <Heading size="md">Mateando</Heading>
          <Flex gap={4}>
            <Button variant="ghost" color="white">Inicio</Button>
            <Button variant="ghost" color="white">Tradición</Button>
            <Button variant="ghost" color="white">Accesorios</Button>
          </Flex>
        </Flex>
      </Box>

      {/* IMAGEN PRINCIPAL */}
      <Box display="flex" justifyContent="center" alignItems="center" py={6}>
        <Image
          src="/logo.png"
          alt="Imagen de un mate"
          width="auto"
          maxH="auto"
          objectFit="cover"
        />
      </Box>

      {/* SECCIÓN DE TEXTO Y CARDS */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={6} textAlign="center">
          <Heading size="lg">UN RITUAL QUE UNE</Heading>
          <Text fontSize="lg" color="gray.600">
            El mate es mucho más que una bebida. Es compartir, es pausa, es identidad.
          </Text>

          {/* CARDS */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
              <Heading fontSize="xl" mb={2}>Yerba</Heading>
              <Text>Con palo, sin palo, orgánica o saborizada. Conocé las variedades.</Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
              <Heading fontSize="xl" mb={2}>Accesorios</Heading>
              <Text>Desde el clásico mate de calabaza hasta los termos mas lindos.</Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
              <Heading fontSize="xl" mb={2}>Tradición</Heading>
              <Text>Costumbres que pasan de generación en generación en todo el país.</Text>
            </Box>
          </SimpleGrid>

          {/* BOTÓN */}
          <Button colorScheme="green" size="lg" mt={6}>
            Descubrí más
          </Button>
        </VStack>
      </Container>

      {/* PIE DE PÁGINA */}
      <Box bg="green.700" color="white" textAlign="center" py={4} mt={10}>
        © 2025 Mateando. Celebrando la cultura del mate.
      </Box>
    </Box>
  );
}
