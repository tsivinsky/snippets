export type GetComponentCodeResult = {
  content: string | null;
};

export async function getComponentCode(componentName: string) {
  const resp = await fetch(
    `/api/get-code?component=${encodeURIComponent(componentName)}`
  );
  const data: GetComponentCodeResult = await resp.json();

  return data;
}
