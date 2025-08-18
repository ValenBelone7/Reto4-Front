import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const BotonPrecios = () => (
  <Link href="/venta">
    <Button colorScheme="green" size="lg" mt={6}>
      Descubrí más
    </Button>
  </Link>
);
