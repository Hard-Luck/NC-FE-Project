export const formatDate = (unixTime) => {
  const date = new Date(unixTime);
  return date.toUTCString();
};
