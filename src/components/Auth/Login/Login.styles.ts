import { StyleSheet } from "react-native";
import { gray, grayBlue, orange, purple, white } from "../../../utils/Colors";

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        padding: 8
    }, 
    imageLogin: {
        width: 142,
        height: 128,
        marginHorizontal: '32%'
    },
    bgImageLogin: {
        width: 200,
        aspectRatio: 1,
        borderTopStartRadius: 100,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 20,
        backgroundColor: white,
        position: 'absolute',
        left: '26%',
        top: -20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    imputContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: gray
    },
    inputContainerError: {
        borderColor: orange
    },
    inputTextError: {
        color: orange,
        fontSize: 12,
        marginTop: -8
    },
    textInput: {
        fontSize: 16,
        flex: 1
    },
    inputIcon: {
        color: gray,
        fontSize: 18
    },
    loginButtonContainer: {
        width: '60%',
        minWidth: 96,
        display: 'flex',
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: purple,
        marginHorizontal: '20%',
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 20,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: white,
    }
});

export default Styles;