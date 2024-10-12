/**
 * Combine class names into a single string
 */
export function classnames(classes: any[] = []): string {
  const classList: string[] = [];

  classes.forEach((options: string | Record<string, boolean>) => {
    if (!options) return;

    if (typeof options === "object") {
      Object.entries(options).forEach(([className, isApplied]) => {
        if (isApplied) classList.push(className);
      });
    } else if (typeof options === "string") {
      classList.push(options);
    }
  });

  return classList.join(" ");
}
