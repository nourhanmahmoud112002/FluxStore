import {  Pressable, Text } from "react-native";
import { ButtonProps } from "./types";
import { styles } from "./styles";

const Button = ({ label, variant='primary', disabled, size='medium', onPress }: ButtonProps) => {
    return <Pressable onPress={onPress} disabled={disabled} style={styles({ variant, size }).container}>
        <Text style={styles({ variant, size }).label}>{label}</Text>
    </Pressable>
};
export default Button;
