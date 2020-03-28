export const getRandomNumbersBetweenRange = (
  min: number,
  max: number,
  count: number
) => {
  const result: Array<number> = [];

  while (result.length !== count) {
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(x)) result.push(x);
  }

  return result;
};
