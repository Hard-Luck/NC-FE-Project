export const idGen = () => {
  let id = 1;
  return () => {
    return id++;
  };
};
