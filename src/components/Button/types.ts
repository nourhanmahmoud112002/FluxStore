export interface ButtonProps {
    label:string;
    variant?:'primary' | 'secondary';
    disabled?:boolean;
    size?:'small' | 'medium' | 'large';
    onPress: () => void;
}