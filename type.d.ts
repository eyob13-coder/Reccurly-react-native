import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabIconsProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }
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
declare module "*.gif" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}

export { };
