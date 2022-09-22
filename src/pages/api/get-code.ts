import { NextApiHandler } from "next";

import { BRANCH_NAME, COMPONENTS_DIR, REPO_NAME } from "@/lib/constants";

type HandlerQueryParams = {
  component?: string | string[];
};

async function getGitHubFileContent(filepath: string) {
  const url = `https://raw.githubusercontent.com/${REPO_NAME}/${BRANCH_NAME}/${filepath}`;
  const resp = await fetch(url, {
    method: "GET",
  });
  const content = await resp.text();

  return content;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ content: null });
  }

  let { component } = req.query as HandlerQueryParams;

  if (!component) {
    return res.status(400).json({ content: null });
  }
  if (Array.isArray(component)) {
    component = component[0];
  }

  component = decodeURIComponent(component);

  const fullUrl = `${COMPONENTS_DIR}/${component}`;
  const content = await getGitHubFileContent(fullUrl);

  return res.status(200).json({
    content,
  });
};

export default handler;
