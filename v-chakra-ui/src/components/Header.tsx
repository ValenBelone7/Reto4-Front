import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const Header = () => (
  <Box bg="green.600" color="white" py={4} px={6}>
    <Flex justify="space-between" align="center">
      {/* Logo */}
      <Heading size="md">Mateando</Heading>

      {/* Menú en desktop */}
      <Flex gap={4} display={{ base: "none", md: "flex" }}>
        <Link href="/">
          <Button variant="ghost" color="white">Inicio</Button>
        </Link>
        <Link href="/tradicion">
          <Button variant="ghost" color="white">Tradición</Button>
        </Link>
        <Link href="/venta">
          <Button variant="ghost" color="white">Tienda</Button>
        </Link>
        <Link href="/carrito">
          <Button variant="ghost" color="white" p={2}>
            <FaShoppingCart size={20} />
          </Button>
        </Link>
      </Flex>

      {/* Menú hamburguesa en mobile */}
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          aria-label="Abrir menú"
          variant="outline"
          color="white"
          borderColor="white"
        />
        <MenuList bg="green.600" color="white">
          <Link href="/"><MenuItem bg="green.600" _hover={{ bg: "green.700" }}>Inicio</MenuItem></Link>
          <Link href="/tradicion"><MenuItem bg="green.600" _hover={{ bg: "green.700" }}>Tradición</MenuItem></Link>
          <Link href="/venta"><MenuItem bg="green.600" _hover={{ bg: "green.700" }}>Tienda</MenuItem></Link>
          <Link href="/carrito"><MenuItem bg="green.600" _hover={{ bg: "green.700" }}><FaShoppingCart /></MenuItem></Link>
        </MenuList>
      </Menu>
    </Flex>
  </Box>
);
