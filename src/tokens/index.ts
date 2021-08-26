import { words } from "./words";

// the below is heavily based on https://andrew.hedges.name/experiments/diceware/

// from: https://www.rempe.us/diceware/
const secureRandom = (count: number) => {
  const cryptoObj = window.crypto || window.msCrypto;
  const rand = new Uint32Array(1);
  const skip = 0x7fffffff - (0x7fffffff % count);
  let result: number;

  if (((count - 1) & count) === 0) {
    cryptoObj.getRandomValues(rand);
    return rand[0] & (count - 1);
  }

  do {
    cryptoObj.getRandomValues(rand);
    result = rand[0] & 0x7fffffff;
  } while (result >= skip);

  return result % count;
};

// based on: http://stackoverflow.com/a/1527820/11577
const getRandomInt = (min: number, max: number) => {
  if (window.crypto || window.msCrypto) {
    return secureRandom(max) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

export const getToken = () => {
  let phrase: string[] = [];

  for (let i = 0; i < 3; i += 1) {
    phrase.push(words[getRandomInt(0, words.length)]);
  }

  return phrase.join(" ");
};
