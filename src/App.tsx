import {
  Box,
  Button,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { getImageUrl } from "./clients/RandomImage";

function App() {
  const [imageLoaded, setImageLoaded] = React.useState(true);
  const [loading, setLoaging] = React.useState(false);
  const [image, setImage] = React.useState<{ url: string; author: string }>({
    url: "",
    author: "",
  });

  const getNewReference = async () => {
    try {
      setLoaging(true);
      setImageLoaded(false);

      const response = await getImageUrl();
      setImage(response);
    } finally {
      setLoaging(false);
    }
  };

  const awitNextReference = (image.url && !imageLoaded) || false;
  return (
    <Flex width="100%" height="100%" justifyContent="space-between">
      <Box background="#B8451F" width="30%" color="#ede5da" padding="3rem">
        <Flex
          border="1px solid #ede5da"
          height="100%"
          padding="1rem"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex justifyContent="flex-end">
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="20px"
              fontWeight="700"
              maxWidth="fit-content"
              textAlign="right"
            >
              Clique
              <br />
              Desenhe
            </Text>
          </Flex>
          <Image src="https://res.cloudinary.com/dmqy0gmqw/image/upload/v1767885277/e12e9b0c-c912-48be-bc01-0afd2577dcd3.png" />
          <Flex justifyContent="flex-start" gap=".3rem">
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="sm"
              fontWeight="700"
              maxWidth="fit-content"
              textAlign="left"
            >
              Criado por:
            </Text>
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="sm"
              maxWidth="fit-content"
              textAlign="left"
            >
              Gabriel Ferreira
              <br />
              Belo horizonte
              <br />
              2025
            </Text>
          </Flex>
          <Button
            borderRadius={0}
            background="#1F4E2E"
            _hover={{ background:"#4b795aff"}}
            marginTop="1rem"
            fontWeight="bold"
            variant="solid"
            loading={loading}
            disabled={awitNextReference}
            onClick={() => {
              getNewReference();
            }}
          >
            Clique aqui para gerar referência
          </Button>
        </Flex>
      </Box>
      <Box background="#ede5da" width="70%" position="relative">
        {image.url ? (
          <Image
            src={image.url}
            alt={image.author}
            onLoad={() => setImageLoaded(true)}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ) : (
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize="96px"
              fontWeight="700"
              letterSpacing="-2px"
              color="#B8451F"
            >
              Ideia.
            </Text>
          </Flex>
        )}

        <Box
          position="absolute"
          bottom="1"
          right="1"
          zIndex={1}
          background="rgba(0, 0, 0, 0.5)"
          padding="0.75rem 1rem"
        >
          <Flex alignItems="center" gap="0.5rem" color="white">
            <Text fontWeight="bold">Autor:</Text>
            {image.url ? (
              <Text>{image.author}</Text>
            ) : (
              <Text>Gabriel Ferreira</Text>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
