import fs from "node:fs/promises";

import { UTILS_DIR } from "@/lib/constants";

import { Util } from "@/types/Util";

export async function getAllUtils() {
  const dirs = await fs.readdir(UTILS_DIR);

  const utils: Util[] = [];

  for (const dir of dirs) {
    const code = await fs.readFile(`${UTILS_DIR}/${dir}/code.ts`, "utf-8");
    const docs = await fs.readFile(`${UTILS_DIR}/${dir}/readme.md`, "utf-8");

    utils.push({ name: dir, code, docs });
  }

  return utils;
}
