import {
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

export function TravelTypes() {
  const [isMobileVersion] = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid
      minChildWidth={[136, 158]}
      maxW={1160}
      mx={"auto"}
      pt={["36px", "80px"]}
    >
      <Stack justifyContent={"center"} alignItems="center">
        <UnorderedList
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          <ListItem
            color={"#FFBA08"}
            listStyleType={`${isMobileVersion ? "initial" : "none"}`}
          >
            {!isMobileVersion && (
              <Image src="/images/cocktail.png" w={85} h={85} />
            )}
            <Text fontWeight={600} fontSize={"2xl"} color={"black"}>
              vida noturna
            </Text>
          </ListItem>
        </UnorderedList>

        {!isMobileVersion && <Image src="/images/cocktail.png" w={85} h={85} />}
        <Text fontWeight={600} fontSize={"2xl"}>
          vida noturna
        </Text>
      </Stack>

      <Stack justifyContent={"center"} alignItems="center">
        {!isMobileVersion && <Image src="/images/surf.png" w={85} h={85} />}
        <Text fontWeight={600} fontSize={"2xl"}>
          praia
        </Text>
      </Stack>

      <Stack justifyContent={"center"} alignItems="center">
        {!isMobileVersion && <Image src="/images/building.png" w={85} h={85} />}
        <Text fontWeight={600} fontSize={"2xl"}>
          moderno
        </Text>
      </Stack>

      <Stack justifyContent={"center"} alignItems="center">
        {!isMobileVersion && <Image src="/images/museum.png" w={85} h={85} />}
        <Text fontWeight={600} fontSize={"2xl"}>
          clássico
        </Text>
      </Stack>

      <Stack justifyContent={"center"} alignItems="center">
        {!isMobileVersion && <Image src="/images/earth.png" w={85} h={85} />}
        <Text fontWeight={600} fontSize={"2xl"}>
          e mais...
        </Text>
      </Stack>
    </SimpleGrid>
  );
}
