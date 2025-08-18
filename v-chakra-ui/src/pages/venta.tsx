import { Header } from "../components/Header";
import { ProductosMate } from "../components/ProductosMate";
import { Box } from "@chakra-ui/react";
import { Heading, VStack } from "@chakra-ui/react"
import { Footer } from "../components/Footer";

export default function Venta() {
  return (
    <Box bg="green.50" minH="100vh">
      <Header />
      <Box width="100%" px={{ base: 4, md: 6 }} py={10}>
        <VStack spacing={6} textAlign="center">
        <Heading size="2xl" mb={4}>Bienvenidos a la tienda de Mateando.</Heading>
        </VStack>
        <ProductosMate />
      </Box>
      <Footer></Footer>
    </Box>
  )
}
