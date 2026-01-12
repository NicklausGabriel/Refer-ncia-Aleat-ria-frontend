export type getReferenceType = {
  cliqueDesenhaImage: string;
  loading: boolean;
  getNewReference: () => Promise<void>;
  awitNextReference: boolean;
  image: {
    url: string;
    author: string;
  };
  setImage: React.Dispatch<
    React.SetStateAction<{
      url: string;
      author: string;
    }>
  >;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};