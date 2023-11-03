export const wordCounter = (text: string, size: number = 20): string => {
  return text.split(" ").slice(0, size).join(" ") + "...";
};
