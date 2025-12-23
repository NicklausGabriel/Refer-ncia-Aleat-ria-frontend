import { Button, Card, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { getImageUrl } from "./clients/RandomImage";
import gifInitial from "./assets/initialImage.gif";

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
    <Card.Root
      w={{ base: "100vw", md: "lg" }}
      h={{ base: "100vh", md: "auto" }}
      maxW={{ base: "100vw", md: "lg" }}
      borderRadius={{ base: "0", md: "xl" }}
      boxShadow={{ base: "none", md: "lg" }}
      overflow="hidden"
    >
      {!image.url && (
        <Image src={gifInitial} alt="initial-gif" objectFit="cover" />
      )}
      <Skeleton loading={!imageLoaded} borderRadius="md">
        <Image
          src={image.url}
          alt={image.author}
          onLoad={() => setImageLoaded(true)}
          objectFit="cover"
        />
      </Skeleton>
      <Card.Body gap="2">
        {imageLoaded && image.url ? (
          <Flex alignItems="center" gap="1rem">
            <Card.Title>Autor:</Card.Title>
            <Card.Description>{image.author}</Card.Description>
          </Flex>
        ) : (
          <Text
            background="#6a0810"
            color="white"
            textAlign="center"
            fontWeight="bold"
          >
            Um clique, uma nova referência visual.
          </Text>
        )}
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          width="100%"
          variant="ghost"
          loading={loading}
          disabled={awitNextReference}
          onClick={() => {
            getNewReference();
          }}
        >
          Gerar referência
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default App;
