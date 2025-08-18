import { CardYerba } from "../components/CardYerba";
import { CardAccesorios } from "../components/CardAccesorios";
import { CardTradicion } from "../components/CardTradicion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box, Heading, Text, VStack, SimpleGrid} from "@chakra-ui/react";
import { BotonPrecios } from "../components/BotonPrecios";
import { ImagenPrincipal } from "../components/ImagenPrincipal";

export default function Home() {
  return (
    <Box bg="green.50" minH="100vh" overflowX="hidden">
      <Header></Header>

      {/* IMAGEN PRINCIPAL */}
      <ImagenPrincipal></ImagenPrincipal>

      {/* SECCIÓN DE TEXTO Y CARDS */}
      <Box width="100%" px={{ base: 4, md: 6 }} py={10}>
        <VStack spacing={6} textAlign="center">
          <Heading size="lg">UN RITUAL QUE UNE</Heading>
          <Text fontSize="lg" color="gray.600">
            El mate es mucho más que una bebida. Es compartir, es pausa, es identidad.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 8 }} mt={6}>
            <CardYerba></CardYerba>
            <CardAccesorios></CardAccesorios>
            <CardTradicion></CardTradicion>
          </SimpleGrid>

          <BotonPrecios></BotonPrecios>

        </VStack>
      </Box>

      <Footer />
    </Box>
  );
}
