import { camelCase, snakeCase } from "change-case";
const transformKeys = (obj: any, fn: Function): any => {
  if (typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((row) => transformKeys(row, fn));
  }
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys.reduce((acc: any, key, index) => {
    const value =
      typeof values[index] === "object" && values[index] !== null
        ? transformKeys(values[index], fn)
        : values[index];
    acc[fn(key)] = value;
    return acc;
  }, {});
};

export const camelizeKeys = (obj: any) => transformKeys(obj, camelCase);

export const snakeCaseKeys = (obj: any) => transformKeys(obj, snakeCase);
