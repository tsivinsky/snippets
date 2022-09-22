import { getComponentCode } from "@/api/getComponentCode";

export const copyComponentCode = async (componentName: string) => {
  if (!("clipboard" in navigator)) {
    throw new Error("Нет поддержки navigator.clipboard в браузере");
  }

  const { content } = await getComponentCode(componentName);

  if (!content) {
    throw new Error(`Компонент с именем ${componentName} не найден`);
  }

  await navigator.clipboard.writeText(content);
};
