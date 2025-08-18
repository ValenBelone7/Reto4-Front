import { Box, Heading, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoriaMate } from "../components/HistoriaMate";
import { PasosMate } from "../components/PasosMate";
import { ImagenPrincipalTradicion } from "../components/ImagenPrincipalTradicion";

export default function Tradicion() {
  return (
    <Box bg="green.50" minH="100vh">
      <Header />
      <ImagenPrincipalTradicion></ImagenPrincipalTradicion>
      <HistoriaMate></HistoriaMate>
      <PasosMate></PasosMate>
      <Footer />
    </Box>
  );
}
