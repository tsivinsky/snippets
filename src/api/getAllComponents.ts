import { COMPONENTS_DIR } from "@/lib/constants";
import fs from "node:fs/promises";

import { Component } from "@/types/Component";

export async function getAllComponents() {
  const dirs = await fs.readdir(COMPONENTS_DIR);

  const components: Component[] = [];

  for (const dir of dirs) {
    const code = await fs.readFile(
      `${COMPONENTS_DIR}/${dir}/code.tsx`,
      "utf-8"
    );
    const docs = await fs.readFile(
      `${COMPONENTS_DIR}/${dir}/readme.md`,
      "utf-8"
    );

    components.push({ name: dir, code, docs });
  }

  return components;
}
