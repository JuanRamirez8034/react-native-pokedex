import { StyleSheet } from "react-native";
import { black, gray, grayBlue, orange, white } from "../../../utils/Colors";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: black,
        textAlign: 'center',
        marginTop: 24
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: gray,
        textAlign: 'center',
        marginBottom: 32
    },
    profileImageContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImageContent: {
        width: 232,
        height: 232,
        aspectRatio: 1,
        overflow: 'hidden',
        borderWidth: 4,
        borderRadius: 200,
        borderColor: grayBlue
    },
    profileImage: {
        width: 232,
        height: 232,
        aspectRatio: 1,
        resizeMode: 'cover'  
    },
    logupButton: {
        marginTop: 24,
        marginBottom: 40,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        backgroundColor: orange,
        paddingVertical: 16,
        borderRadius: 24
    },
    logupButtonText: {
        fontSize: 18,
        color: white,
        fontWeight: 'bold'
    },
    modalPreviewImageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: black
    },
    modalPreviewImageToolBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: gray
    },
    modalPreviewImageToolBarIcon: {
        color: white,
        fontSize: 18
    }
});

export default Styles;