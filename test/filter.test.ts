import { expect, test } from "vitest";
import { pipe } from "../src/pipe.js";
import { filter } from "../src/filter.js";

test("filter type", () => {
  const input = [1, 2, "sdf", new Date()];
  const isNumber = (x: unknown): x is number => typeof x == "number";
  pipe(input, filter(isNumber), (x) => expect(x).deep.eq([1, 2]));
});

test("filter basic", () => {
  const input = [1, 2, 3, 4, 5];
  pipe(
    input,
    filter((v) => v > 2),
    (x) => expect(x).deep.eq([3, 4, 5])
  );
});
