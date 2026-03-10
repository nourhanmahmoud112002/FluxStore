import { AppIcons } from "../../assets/svgs";

export interface ISocialIconProps {
    source:keyof typeof AppIcons;
    onPress:()=>void;
}