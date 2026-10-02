const DISCOUNTS = [
  { minLessons: 10, percent: 15 },
  { minLessons: 6, percent: 10 },
];

export function calculatePackagePrice(pricePerLesson, lessonsCount) {
  if (!Number.isInteger(lessonsCount) || lessonsCount < 1) {
    throw new Error("Количество занятий должно быть целым числом от 1");
  }
  if (typeof pricePerLesson !== "number" || pricePerLesson <= 0) {
    throw new Error("Цена занятия должна быть положительным числом");
  }

  const discount = DISCOUNTS.find((d) => lessonsCount >= d.minLessons);
  const percent = discount ? discount.percent : 0;
  const total = pricePerLesson * lessonsCount * (1 - percent / 100);

  return Math.round(total);
}
