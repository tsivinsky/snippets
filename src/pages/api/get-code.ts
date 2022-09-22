import { NextApiHandler } from "next";

const REPO_NAME = "tsivinsky/ui";
const BRANCH_NAME = "master";

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
  if (req.method?.toLowerCase() !== "GET") {
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

  const fullUrl = `src/components/${component}`;
  const content = await getGitHubFileContent(fullUrl);

  return res.status(200).json({
    content,
  });
};

export default handler;
