import { describe, it, expect } from "vitest";
import { calculatePackagePrice } from "./pricing.js";

describe("calculatePackagePrice", () => {
  it("без скидки для 1–4 занятий", () => {
    expect(calculatePackagePrice(1000, 1)).toBe(1000);
    expect(calculatePackagePrice(1000, 4)).toBe(4000);
  });

  it("скидка 10% с 5 занятий", () => {
    expect(calculatePackagePrice(1000, 5)).toBe(4500);
    expect(calculatePackagePrice(1000, 9)).toBe(8100);
  });

  it("скидка 15% с 10 занятий", () => {
    expect(calculatePackagePrice(1000, 10)).toBe(8500);
  });

  it("ошибка при некорректном количестве занятий", () => {
    expect(() => calculatePackagePrice(1000, 0)).toThrow("Количество занятий");
    expect(() => calculatePackagePrice(1000, -3)).toThrow("Количество занятий");
    expect(() => calculatePackagePrice(1000, 2.5)).toThrow("Количество занятий");
  });

  it("ошибка при некорректной цене", () => {
    expect(() => calculatePackagePrice(0, 5)).toThrow("Цена занятия");
    expect(() => calculatePackagePrice("1000", 5)).toThrow("Цена занятия");
  });
});
