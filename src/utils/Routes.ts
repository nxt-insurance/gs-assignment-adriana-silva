import { ProductIds } from "./enums";

export enum AppRoutes {
  Root = '/',
  Buy = '/buy',
  Purchased = '/purchased'
}

export const insuranceDevRoute = `${AppRoutes.Buy}/${ProductIds.devIns}`;
export const insuranceDesignerRoute = `${AppRoutes.Buy}/${ProductIds.designerIns}`;