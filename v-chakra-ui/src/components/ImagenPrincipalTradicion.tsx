import { Box, Heading, Text, Image} from "@chakra-ui/react"

export const ImagenPrincipalTradicion = () => {
    return (     
      <Box textAlign="center" py={16} px={6}>
        <Heading size="2xl" mb={4}>El Mate: Un Ritual que Nos Une</Heading>
        <Text fontSize="lg" color="gray.600">
          Más que una bebida, es compartir, es identidad y es tradición.
        </Text>
        <Image src="/logo.png" alt="Mate tradicional" mx="auto" mt={8} borderRadius="lg" />
      </Box>
    )};