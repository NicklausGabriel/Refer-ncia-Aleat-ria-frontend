import { useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import { Mobile } from "./Mobile";
import { DeskTop } from "./DeskTop";
import React from "react";
import { getImageUrl, type RandomImageResponse } from "./clients/RandomImage";

export function App() {
  const cliqueDesenhaImage = import.meta.env.VITE_IMAGE_URL;
  const [imageLoaded, setImageLoaded] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState<RandomImageResponse>({
    url: "",
    author: "",
    likes: 0,
    userPage: "https://github.com/NicklausGabriel",
    views: 0,
  });

  const pixabayCategory = {
    BACKGROUNDS: "backgrounds",
    FASHION: "fashion",
    NATURE: "nature",
    SCIENCE: "science",
    EDUCATION: "education",
    FEELINGS: "feelings",
    HEALTH: "health",
    PEOPLE: "people",
    RELIGION: "religion",
    PLACES: "places",
    ANIMALS: "animals",
    INDUSTRY: "industry",
    COMPUTER: "computer",
    FOOD: "food",
    SPORTS: "sports",
    TRANSPORTATION: "transportation",
    TRAVEL: "travel",
    BUILDINGS: "buildings",
    BUSINESS: "business",
    MUSIC: "music",
  } as const;

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomCategory = (): string => {
    const categories = Object.values(pixabayCategory);
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const getNewReference = async (): Promise<void> => {
    try {
      setLoading(true);
      setImageLoaded(false);

      const response = await getImageUrl({
        category: getRandomCategory(),
        page: getRandomInt(1, 160),
        index: getRandomInt(0, 2),
      });

      setImage(response);
    } finally {
      setLoading(false);
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
