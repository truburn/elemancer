export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export interface ComponentBase {
  id?: string;
  classes?: any;
  styles?: any;
}

export type NumberString = number | string;
