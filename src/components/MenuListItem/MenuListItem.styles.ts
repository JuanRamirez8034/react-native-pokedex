import { StyleSheet } from "react-native";
import { black, gray } from "../../utils/Colors";

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: gray,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-end'
    },
    label: {
        fontWeight: '700',
        fontSize: 18,
        color: black,
        width: '40%'
    },
    value: {
        fontWeight: 'normal',
        fontSize: 16,
        color: black,
        width: '60%'
    }
});

export default Styles;