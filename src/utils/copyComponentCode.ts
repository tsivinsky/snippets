import { getComponentCode } from "@/api/getComponentCode";

export const copyComponentCode = async (componentName: string) => {
  if (!("clipboard" in navigator)) {
    throw new Error("No browser support for clipboard");
  }

  const { content } = await getComponentCode(componentName);

  if (!content) {
    throw new Error(`No component with name ${componentName}`);
  }

  await navigator.clipboard.writeText(content);
};
