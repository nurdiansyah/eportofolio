import { appConfig } from "../app.config";
export default function generateNav(input) {
  const grandparents = [];

  for (const [key, value] of input) {
    let name = key.charAt(0).toUpperCase() + key.slice(1);
    for (const [, valueC] of value) {
      name = valueC.name ?? name;
      break;
    }
    grandparents.push({ link: `/${appConfig.markdown.base}/${key}`, name });
  }

  return grandparents;
}
