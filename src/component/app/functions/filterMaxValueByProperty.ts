/* eslint-disable @typescript-eslint/no-explicit-any */
export const filterMaxValueByProperty = (
  arr: any[],
  property: string,
  max = false
) => {
  const maxArr = arr.map((ele: any) => {
    return Number(ele[property]);
  });
  const maxValue = Math.max(...maxArr);
  const minValue = Math.min(...maxArr);
  if (max) return maxValue;
  return minValue;
};
