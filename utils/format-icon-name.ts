export const formatIconName = (initialName: string) => {
  return initialName.toLocaleLowerCase().split(/\.| /).join("");
};
