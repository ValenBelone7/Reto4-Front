import { SimpleGrid, Box, Image, Text, Heading, VStack, HStack, Button } from "@chakra-ui/react";

const ProductoCard = ({ imagen, nombre, descripcion, precio, onAgregar }: any) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" bg="white" shadow="md">
    <Image src={imagen} alt={nombre} objectFit="cover" width="100%" height="200px" />
    <VStack spacing={2} p={4} align="start">
      <Heading size="md">{nombre}</Heading>
      <Text fontSize="sm" color="gray.600">{descripcion}</Text>
      <Text fontSize="lg" fontWeight="bold">{precio}</Text>
    </VStack>
    <HStack spacing={2} p={4}>
      <Button colorScheme="green" flex="1" onClick={onAgregar}>
        🛒 Comprar
      </Button>
    </HStack>
  </Box>
);

export const ProductosMate = () => {
  const agregarAlCarrito = (producto: any) => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
    carritoGuardado.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
    alert(`${producto.nombre} agregado al carrito 🛒`);
  };

  const eliminarProducto = (producto: any) => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");

    const nuevoCarrito = carritoGuardado.filter(
      (item: any) => item.nombre !== producto.nombre
    );

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };


  return (
    <Box width="100%" px={{ base: 4, md: 6 }} py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} justifyItems="center">
        <ProductoCard
          imagen="/mate-algarrobo.jpg"
          nombre="Mate Algarrobo"
          descripcion="Mate artesanal de madera de algarrobo, ideal para compartir."
          precio="$45.000"
          onAgregar={() => agregarAlCarrito({ 
            nombre: "Mate Algarrobo", 
            precio: "$45.000", 
            image: "/mate-algarrobo.jpg" 
          })}
        />
        <ProductoCard
          imagen="/mate-imperial-algarrobo.jpg"
          nombre="Mate Imperial"
          descripcion="Mate tradicional de calabaza, liviano y clásico, ideal para compartir."
          precio="$30.000"
          onAgregar={() => agregarAlCarrito({ 
            nombre: "Mate Imperial",
            precio: "$30.000",
            image: "/mate-imperial-algarrobo.jpg" })}
        />
        <ProductoCard
          imagen="/mate-torpedo-algarrobo.jpg"
          nombre="Mate Torpedo"
          descripcion="Mate de cerámica con diseño moderno y elegante, ideal para vos."
          precio="$50.000"
          onAgregar={() => agregarAlCarrito({ 
            nombre: "Mate Torpedo",
            precio: "$50.000",
            image: "/mate-torpedo-algarrobo.jpg" })}
        />
      </SimpleGrid>
    </Box>
  );
};
