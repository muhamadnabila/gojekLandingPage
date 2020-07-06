import {
    StyleSheet
} from 'react-native'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    text_white: {
        color: 'white'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gainsboro'
    },
    searchInput: {
        height: 30,
        borderColor: 'gainsboro',
        backgroundColor: 'whitesmoke',
        borderWidth: 0.5,
        borderRadius: 7,
        width: '75%',
        paddingHorizontal: 10,
        paddingVertical:3
    },
    buttonPromo: {
        borderRadius: 15,
        backgroundColor: 'whitesmoke',
        width: '23%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    promoText: {
        fontSize: 12
    },
    featureWrapper: {
        height: 120,
    },
    featureHeader: {
        backgroundColor: '#000080',
        height: '25%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    featureBody: {
        height: '75%',
        backgroundColor: '#0909a6e3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7
    },
    featureHeaderText: {
        color: 'white',
        fontWeight: 'bold'
    },
    featureBodyButtonWrapper: {
        flexDirection: 'column',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featureBodyButtonText: {
        color: 'white'
    },
    serviceWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 200
    },
    featureBodyServiceWrapper: {
        width: '25%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryButtonWrapper: {
        height: 80,
        width: '100%',
    },
    categoryButtonText: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },
    ContainerContent: {
        marginBottom: 70
    },
    contentWrapper:{
        marginTop: 20,
    },
    contentTagText: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contentTitleText: {
        marginBottom: 3,
        fontWeight: 'bold'
    },
    contentDescriptionText: {
        marginBottom: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 5
    }
});