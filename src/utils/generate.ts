/**
 * Generate a random UUID
 */
export interface RandomUUIDParams {
  prefix?: string;
  suffix?: string;
  radii?: number[];
}

export function generateUUID(params: RandomUUIDParams): string {
  const { prefix = "uuid", suffix, radii = [4, 6, 6, 4] } = params;

  const idParts: string[] = [prefix];

  radii.forEach((radix) => {
    const randomString = Math.random().toString(16).slice(2, radix);
    idParts.push(randomString);
  });

  if (suffix) idParts.push(suffix);

  return idParts.join("-");
}
