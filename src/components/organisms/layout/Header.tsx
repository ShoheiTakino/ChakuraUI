import { Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
        ユーザー管理アプリ
      </Heading>
    </Flex>
  );
});
