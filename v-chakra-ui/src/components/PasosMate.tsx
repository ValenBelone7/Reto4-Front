import { Box, Heading, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";     

export const PasosMate = () => {
  return (
    <Box py={12} px={6}>
      <Heading size="lg" textAlign="center" mb={8}>
        Cómo preparar el mate
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        {/* Paso 1 */}
        <VStack spacing={3} textAlign="center">
          <Image
            src="/agregar-yerba.jpg"
            alt="Yerba mate"
            boxSize="220px"
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontWeight="bold">1. Poner la yerba</Text>
        </VStack>

        {/* Paso 2 */}
        <VStack spacing={3} textAlign="center">
          <Image
            src="/mate-inclinado.jpeg"
            alt="Inclinar mate"
            boxSize="220px"
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontWeight="bold">2. Inclinar el mate</Text>
        </VStack>

        {/* Paso 3 */}
        <VStack spacing={3} textAlign="center">
          <Image
            src="/agua-caliente.jpg"
            alt="Bombilla"
            boxSize="220px"
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontWeight="bold">3. Agregar agua</Text>
        </VStack>

        {/* Paso 4 */}
        <VStack spacing={3} textAlign="center">
          <Image
            src="/bombilla-colocada.jpg"
            alt="Agua caliente"
            boxSize="220px"
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontWeight="bold">4. Colocar la bombilla</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};
