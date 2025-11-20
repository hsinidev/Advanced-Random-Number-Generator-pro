import { GenerationOptions } from '../types';

/**
 * Generates a single random number using either Math.random() or crypto.getRandomValues().
 * @param secure - If true, use cryptographically secure random number generator.
 * @returns A random number between 0 (inclusive) and 1 (exclusive).
 */
function getSecureRandom(secure: boolean): number {
  if (secure && typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    const randomArray = new Uint32Array(1);
    window.crypto.getRandomValues(randomArray);
    // Scale to a float between 0 and 1
    return randomArray[0] / (0xffffffff + 1);
  }
  return Math.random();
}

/**
 * Generates a list of random numbers based on the provided options.
 * @param options - The parameters for number generation.
 * @returns A string array of the generated numbers.
 */
export const generateRandomNumbers = (options: GenerationOptions): string[] => {
  const { min, max, quantity, allowDecimals, secure } = options;
  const results: string[] = [];

  if (min >= max) {
    throw new Error('Minimum value must be less than maximum value.');
  }
  if (quantity <= 0) {
    throw new Error('Quantity must be greater than zero.');
  }

  for (let i = 0; i < quantity; i++) {
    const random = getSecureRandom(secure);
    let result: number;
    
    if (allowDecimals) {
      // Generates a float in [min, max)
      result = random * (max - min) + min;
    } else {
      // Generates an integer in [min, max] (inclusive)
      result = Math.floor(random * (max - min + 1)) + min;
    }
    
    // To avoid potential floating point precision issues in display
    results.push(result.toString());
  }

  return results;
};