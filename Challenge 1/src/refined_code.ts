// @ts-nocheck

const CLEAN_CPF_LENGTH = 11;
const LENGTH_FOR_FIRST_DIGIT = 9;

function cleanCpf(rawCpf) {
  return rawCpf.replace("/D/g", ""); //Visual Code está removendo caractere \
}

function isEveryDigitEqual(cpf) {
  return cpf.split("").every((c) => c === cpf[0]);
}

function calculateCpf(cpf) {
  let sumFirstDigit = 0,
    sumSecondDigit = 0;

  for (let i = 0; i < LENGTH_FOR_FIRST_DIGIT; i++) {
    sumFirstDigit += cpf[i] * (10 - i);
    sumSecondDigit += cpf[i] * (11 - i);
  }

  let firstDigit = getDigit(sumFirstDigit);
  sumSecondDigit += firstDigit * 2;
  let secondDigit = getDigit(sumSecondDigit);

  let calculatedCpf = cpf;

  calculatedCpf = cpf.substring(0, 9) + firstDigit.toString();
  calculatedCpf = calculatedCpf + secondDigit.toString();

  return calculatedCpf;
}

function getDigit(sum) {
  let rest = sum % 11;
  return rest < 2 ? 0 : 11 - rest;
}

export function validate(rawCpf) {
  if (!rawCpf) return false;

  let cpfCleaned = cleanCpf(rawCpf);

  if (cpfCleaned.length !== CLEAN_CPF_LENGTH) return false;

  if (isEveryDigitEqual(cpfCleaned)) return false;

  let cpfCalculated;

  cpfCalculated = calculateCpf(cpfCleaned);

  return cpfCalculated === cpfCleaned;
}
