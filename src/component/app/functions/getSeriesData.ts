import { SeriesOptionsType } from "highcharts";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSeriesData = (data: any) => {
  const keys = Object.keys(data[0]);
  const formattedData = keys.map((key) => data.map((obj: any) => obj[key]));
  console.log({ keys, formattedData });

  const dataToReturn: SeriesOptionsType[] = keys?.map(
    (_row: any, index: number) => {
      const arrOfNum = formattedData[index]?.map((str: any) => {
        return Number(str);
      });

      return {
        name: keys[index],
        type: "column",
        data: arrOfNum,
      };
    }
  );
  return dataToReturn;
};
