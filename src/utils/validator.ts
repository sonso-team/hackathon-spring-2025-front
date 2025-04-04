const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cyrillicRegexp = /^[-а-яА-ЯёЁ\s]+$/;

export type Validation = {
  name: string;
  value: unknown;
  params?: object;
  message: string;
};

const isEmpty = (value: any): boolean => {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)
  );
};

const isInRange = (
  value: number,
  params: { min: number; max: number },
): boolean => {
  const { min, max } = params;
  return typeof value === 'number' && value >= min && value <= max;
};

const isEmail = (value: string): boolean => {
  return typeof value === 'string' && emailRegexp.test(value.toLowerCase());
};

const isEqualTo = (value: any, params: { compareValue: any }): boolean => {
  return value === params.compareValue;
};

const isCyrillic = (value: string, _params = {}): boolean => {
  return typeof value === 'string' && cyrillicRegexp.test(value);
};

export const Validator = {
  isEmpty,
  isInRange,
  isEmail,
  isEqualTo,
  isCyrillic,
};
