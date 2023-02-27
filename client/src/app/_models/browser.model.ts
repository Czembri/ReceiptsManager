import { Column, GridOption } from "angular-slickgrid";

export interface IBrowser {
  name: string;
  columnDefinitions: Column[];
  gridOptions: GridOption;
}
