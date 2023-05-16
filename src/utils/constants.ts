import { ProductIds } from "./enums";

export const MIN_NAME_SIZE = 2;
export const MAX_NAME_SIZE = 100;

// I'm not sure about which is the minimum age for having an insurance
// so this number is a lucky guess :D

export const MINIMUM_AGE = 18;
export const INITIAL_AGE = MINIMUM_AGE - 1;
export const MAXIMUM_AGE = 100;

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}