export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export interface ComponentBase {
  id?: string;
  className?: string;
  classes?: any;
  styles?: any;
}
