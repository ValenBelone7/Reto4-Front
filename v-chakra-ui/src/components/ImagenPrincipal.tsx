import { Box, Image } from "@chakra-ui/react";

export const ImagenPrincipal = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={6}>
      <Image
        src="/logo.png"
        alt="Imagen de un mate"
        maxW="100%"
        height="auto"
        objectFit="contain"
      />
    </Box>
  );
};
