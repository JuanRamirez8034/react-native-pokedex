import { StyleSheet } from 'react-native';
import { yellow } from '../../../utils/Colors';

const Styles = StyleSheet.create({
    content: {
        paddingHorizontal: 24,
    },
    flexContent: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 16,
    },
    typeFigure: {
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 16,
        fontSize: 16,
        backgroundColor: yellow
    }
});

export default Styles;