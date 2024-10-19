export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export interface ComponentBase {
  id?: string;
  overrideClasses?: any;
}

export type NumberString = number | string;
