import { checkUniqString } from "./main.js";

test("Является ли строка уникальной", () => {
  const stringIsFullyUnique = checkUniqString("asfghjkl");
  const stringIsNotUnique = checkUniqString("asfghjkla");

  expect(stringIsFullyUnique).toBe(true); 
  expect(stringIsNotUnique).toBe(false);
});
