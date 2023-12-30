import { StyleSheet } from 'react-native';
import { black, gray, purple } from '../../../utils/Colors';

const Styles = StyleSheet.create({
    content: {
        paddingHorizontal: 24,
        paddingTop: 12,
        gap: 4,
        paddingBottom: 40
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 12,
    },
    statContent: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    statName: {
        width: '36%',
        fontSize: 16,
        color: black,
        fontStyle: 'italic',
        fontWeight: '600'
    },
    statStatusBarContent: {
        width: '64%',
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    statStatusBar : {
        flex:1,
        backgroundColor: gray,
        borderRadius: 40,
        height: 8,
        marginTop: 5,
        overflow: 'hidden'
    },
    statStatusBarNumber: {
        fontSize: 14
    },
    statStatusBarPercent: {
        // backgroundColor: purple,
        // width: '40%',
        height: 8, 
        borderRadius: 40
    }
});

export default Styles;