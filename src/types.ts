import type { RandomImageResponse } from "./clients/RandomImage";

export type getReferenceType = {
  cliqueDesenhaImage: string;
  loading: boolean;
  getNewReference: () => Promise<void>;
  awitNextReference: boolean;
  image: RandomImageResponse;
  setImage: React.Dispatch<React.SetStateAction<RandomImageResponse>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};