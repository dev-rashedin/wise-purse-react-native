declare interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  border: string;
  white: string;
  textLight: string;
  expense: string;
  income: string;
  card: string;
  shadow: string;
}

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  import React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
