import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify={"center"} align="center" h={100}>
      <Image src="/images/logo.png" alt="logo" h={45.92} />
    </Flex>
  );
}
