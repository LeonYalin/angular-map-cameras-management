export function generateUUID(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function normalize<T>(arr: Array<T>): {[key: string]: T} {
  const map: {[key: string]: T} = {};
  for (const item of arr) {
    map[item['id']] = item;
  }
  return map;
}
