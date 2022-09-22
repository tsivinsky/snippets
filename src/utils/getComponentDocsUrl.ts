import { BRANCH_NAME, COMPONENTS_DIR, REPO_NAME } from "@/lib/constants";

export const getComponentDocsUrl = (componentName: string) => {
  const parsedName = componentName.split(".")[0].toLowerCase();
  const url = `https://github.com/${REPO_NAME}/tree/${BRANCH_NAME}/${COMPONENTS_DIR}#${parsedName}`;

  return url;
};
