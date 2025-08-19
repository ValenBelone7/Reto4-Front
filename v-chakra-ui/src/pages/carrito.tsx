import { useState } from "react";
import { Box, VStack, Text, Heading, Button, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Carrito() {
  // Leemos el carrito directamente desde localStorage al inicializar el estado
  const [carrito, setCarrito] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("carrito") || "[]");
    }
    return [];
  });

  const eliminarProducto = (index: number) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito); // actualizamos el estado para renderizar
  };

  const precioAcumulado = () => {
    return carrito.reduce((total, item) => {
        // Quitamos el $ y los puntos, y convertimos a número
        const precioNum = Number(item.precio.replace(/\./g, '').replace('$', ''));
        return total + precioNum;
    }, 0);
    };


  return (
    <Box bg="green.50" minH="150vh">
      <Header></Header>
      <Box width="100%" textAlign="center" px={{ base: 4, md: 6 }} py={8}>
      <Heading size="lg" mb={4}>🛒 Tu Carrito</Heading>
      </Box>

      <VStack align="start" spacing={3}>
        {carrito.length === 0 ? (
          <Text>Tu carrito está vacío.</Text>
        ) : (
          carrito.map((item: any, index: number) => (
            <Box
              key={index}
              p={3}
              borderWidth="1px"
              borderRadius="md"
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.nombre}
                    boxSize="60px"
                    objectFit="cover"
                    mr={4}
                  />
                )}
                <Box>
                  <Text fontWeight="bold">{item.nombre}</Text>
                  <Text>{item.precio}</Text>
                </Box>
              </Box>

              <Button
                colorScheme="red"
                size="sm"
                onClick={() => eliminarProducto(index)}
              >
                Eliminar
              </Button>
            </Box>
          ))
        )}
      </VStack>
     <Box width="100%" textAlign="center" px={{ base: 4, md: 6 }} py={10}>
      <VStack spacing={4}>
        <Text fontWeight="bold">
        Total: ${precioAcumulado().toLocaleString()}
        </Text>
        <Button colorScheme="green" width="50%">
        Ir a pagar
        </Button>
      </VStack>
     </Box>
     <Footer></Footer>

    </Box>
  );
}
