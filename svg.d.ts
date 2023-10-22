declare module "*.svg" {
  import { FunctionComponent, SVGProps } from "react";

  const component: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default component;
}
