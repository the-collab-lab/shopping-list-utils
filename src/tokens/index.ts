import words from "./words.json";

// the below is heavily based on https://andrew.hedges.name/experiments/diceware/

/**
 * Gets a random integer *exclusive* of the max.
 * @see: https://www.rempe.us/diceware/
 */
const getRandomIntInRange = (min: number, max: number) => {
  const crypto = window.crypto;
  const rand = new Uint32Array(1);
  const bitwiseMaxInt = 0x7fffffff;
  const skip = bitwiseMaxInt - (bitwiseMaxInt % max);
  let result: number;

  if (((max - 1) & max) === 0) {
    crypto.getRandomValues(rand);
    return rand[0] & (max - 1);
  }

  do {
    crypto.getRandomValues(rand);
    result = rand[0] & bitwiseMaxInt;
  } while (result >= skip);

  return (result % max) + min;
};

/**
 * Generates a token of three space-separated words.
 * @see: http://stackoverflow.com/a/1527820/11577
 */
export const generateToken = () => {
  let phrase: string[] = new Array(3);

  for (let i = 0; i < 3; i += 1) {
    phrase[i] = words[getRandomIntInRange(0, words.length)];
  }

  return phrase.join(" ");
};
