import { SvgUriProps } from "react-native-svg-uri";

declare module "*.svg" {
  const content: SvgUriProps;
  export default content;
}