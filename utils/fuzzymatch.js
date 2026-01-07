export function fuzzyMatch(input, target) {
  input = input.toLowerCase();
  target = target.toLowerCase();

  if (target.includes(input)) return true;

  let mismatches = 0;
  let i = 0;
  let j = 0;

  while (i < input.length && j < target.length) {
    if (input[i] === target[j]) {
      i++;
      j++;
    } else {
      mismatches++;
      j++;
      if (mismatches > 2) return false;
    }
  }

  return true;
}
