import {
  Box,
  Flex,
  Heading,
  Image,
  Hide,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Banner() {
  return (
    <Stack h={370} w={"100vw"}>
      <Box
        h={335}
        w={"100vw"}
        bgImage={"/images/bg.png"}
        backgroundSize={"cover"}
      >
        <Flex
          maxW={1160}
          p={5}
          h={"100%"}
          mx="auto"
          justify="space-between"
          align="center"
          color={"white"}
        >
          <VStack align={"start"} spacing={5}>
            <Heading lineHeight={10} fontWeight="500">
              5 Continentes,
              <br />
              Infinitas possibilidades.
            </Heading>
            <Text>
              Chegou a hora de tirar do papel a viagem que você
              <br /> sempre sonhou.
            </Text>
          </VStack>

          <Hide below="md">
            <Image
              src="/images/airplane.png"
              h={270}
              transform="rotate(3deg)"
              mb={-100}
            />
          </Hide>
        </Flex>
      </Box>
    </Stack>
  );
}
