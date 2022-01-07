export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

export const randomTimer = (
  totalTime: number,
  amountCapture: number,
): number[] => {
  const arrTime: number[] = [];
  const range = Math.ceil(totalTime / amountCapture);
  for (let i = 0; arrTime.length < amountCapture; i += range) {
    const number = getRandomIntInclusive(i + 1, i + range);
    arrTime.push(number);
  }
  return arrTime;
};
