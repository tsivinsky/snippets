export const clampHTMLString = (html: string, numberOfChildren = 3) => {
  const parser = new DOMParser();

  const dom = parser.parseFromString(html, "text/html");

  const elements = [];
  for (let i = 0; i <= dom.body.children.length; i++) {
    if (i >= numberOfChildren) {
      break;
    }

    elements.push(dom.body.children.item(i));
  }

  return elements.map((element) => element?.outerHTML ?? "").join("");
};
