import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export const HistoriaMate = () => {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={6} textAlign="center">
        <Heading size="lg">Historia del Mate</Heading>
        <Text fontSize="lg" color="gray.700" textAlign="justify">
          El mate tiene sus raíces en los pueblos originarios guaraníes, quienes lo consideraban una planta sagrada. Ellos utilizaban las hojas de la yerba mate (Ilex paraguariensis) en infusiones para obtener energía, mantenerse despiertos durante largas jornadas de caza y también en rituales espirituales.
        </Text>
        <Text fontSize="lg" color="gray.700" textAlign="justify">
          Con la llegada de los colonizadores españoles en el siglo XVI, la costumbre de beber mate comenzó a expandirse rápidamente. Al principio fue visto con recelo, pero luego se adoptó y se convirtió en parte de la vida cotidiana de las colonias. Fueron los misioneros jesuitas quienes fomentaron su cultivo organizado, desarrollando yerbales que permitieron difundir la costumbre en toda la región.
        </Text>
        <Text fontSize="lg" color="gray.700" textAlign="justify">
          Durante los siglos siguientes, el mate pasó de ser una práctica indígena a transformarse en una tradición profundamente arraigada en la vida de los habitantes del Virreinato del Río de la Plata. Se consolidó como símbolo de hospitalidad: ofrecer un mate era, y sigue siendo, un gesto de bienvenida, confianza y camaradería.
        </Text>
        <Text fontSize="lg" color="gray.700" textAlign="justify">
          Hoy en día, el mate es parte de la identidad cultural de países como Argentina, Uruguay, Paraguay, el sur de Brasil, Bolivia e incluso Chile. Más allá de sus beneficios energéticos y digestivos, el mate representa un momento de encuentro. Su preparación y consumo no son individuales, sino colectivos: se comparte la bombilla, el tiempo y la palabra.
        </Text>
        <Text fontSize="lg" color="gray.700" textAlign="justify">
          Por eso, el mate no es solo una bebida. Es un ritual que atraviesa generaciones, conecta pasado y presente, y continúa siendo un lazo que une a millones de personas en torno a una tradición compartida.
        </Text>
      </VStack>
    </Box>
  );
};
