import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import "./App.css";
import type { getReferenceType } from "./types";

export function Mobile(props: getReferenceType) {
  const sobre =
    "Uma ferramenta simples para artistas que precisam de inspiração rápida. A cada clique, uma nova imagem para estudar, observar e desenhar.";

  const complete = !props.awitNextReference || !props.loading;
  return (
    <Flex
      background="#1b1b1bff"
      color="#ffff"
      width="100%"
      height="100%"
      justifyItems="center"
      flexDirection="column"
      justifyContent="space-between"
      padding="1rem"
      fontFamily="'Playfair Display', serif"
    >
      <Flex
        justifyContent="flex-start"
        width="100%"
        gap=".3rem"
        flexDirection="column"
      >
        <Image
          objectFit="cover"
          background="#1c4b2b"
          height="300px"
          borderRadius="1rem"
          onLoad={() => {
            if (props.image.url) {
              props.setImageLoaded(true);
            }
          }}
          src={props.image.url ? props.image.url : props.cliqueDesenhaImage}
          alt={props.image.url ? props.image.author : "image-inicial"}
        />
        {props.awitNextReference || props.loading ? (
          <Text fontSize="sm" fontWeight="700" textAlign="center">
            Carregando...
          </Text>
        ) : (
          <Text fontSize="sm" fontWeight="700" textAlign="center">
            {props.image.author || "Gabriel Ferreira"}
          </Text>
        )}
        <Link
          href={props.image.userPage}
          borderRadius="999px"
          bg="#2A2A2A"
          color="white"
          px="1.25rem"
          py="0.6rem"
          fontSize="sm"
          fontWeight="500"
          display="flex"
          justifyContent="center"
          _hover={{ bg: "#3A3A3A" }}
        >
          Página do Autor
        </Link>
      </Flex>

      <Flex flexDirection="column" gap="0.5rem">
        <Text color="rgba(155, 154, 154, 1)" textAlign="justify">
          {sobre}
        </Text>

        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="sm" color="gray.500">
            2025
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" gap="1rem">
        {complete && props.image.likes > 0 && (
          <Flex alignItems="center" gap="0.4rem">
            <Text as="span" fontWeight="300">
              {props.image.views}
            </Text>
            <IoEyeSharp />
          </Flex>
        )}
        {complete && props.image.likes > 0 && (
          <Flex alignItems="center" gap="0.4rem">
            <Text fontSize="sm" fontWeight="300">
              {props.image.likes}
            </Text>
            <AiFillLike />
          </Flex>
        )}
        <Button
          ml="auto"
          borderRadius="999px"
          bg="#2A2A2A"
          color="white"
          px="1.25rem"
          py="0.6rem"
          fontSize="sm"
          fontWeight="500"
          display="flex"
          alignItems="center"
          gap="0.4rem"
          _hover={{ bg: "#3A3A3A" }}
          _active={{ bg: "#1F1F1F" }}
          _focus={{ boxShadow: "none" }}
          loading={props.loading}
          disabled={props.awitNextReference}
          onClick={props.getNewReference}
        >
          Clique Desenhe
          <Text as="span" fontWeight="300">
            +
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
