import { useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import { Mobile } from "./Mobile";
import { DeskTop } from "./DeskTop";
import React from "react";
import { getImageUrl } from "./clients/RandomImage";

export function App() {
  const cliqueDesenhaImage = import.meta.env.VITE_IMAGE_URL;
  const [imageLoaded, setImageLoaded] = React.useState(true);
  const [loading, setLoaging] = React.useState(false);
  const [image, setImage] = React.useState<{ url: string; author: string }>({
    url: "",
    author: "",
  });

  const getNewReference = async (): Promise<void> => {
    try {
      setLoaging(true);
      setImageLoaded(false);

      const response = await getImageUrl();
      setImage(response);
    } finally {
      setLoaging(false);
    }
  };

  const awitNextReference: boolean = (image.url && !imageLoaded) || false;
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  });
 
  if (isMobile) {
    return (
      <Mobile
        cliqueDesenhaImage={cliqueDesenhaImage}
        loading={loading}
        getNewReference={getNewReference}
        awitNextReference={awitNextReference}
        image={image}
        setImage={setImage}
        setImageLoaded={setImageLoaded}
      />
    );
  } else {
    return (
      <DeskTop
        cliqueDesenhaImage={cliqueDesenhaImage}
        loading={loading}
        getNewReference={getNewReference}
        awitNextReference={awitNextReference}
        image={image}
        setImage={setImage}
        setImageLoaded={setImageLoaded}
      />
    );
  }
}
