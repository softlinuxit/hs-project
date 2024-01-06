import { StyleSheet, Text, View } from "react-native";
// import { FaAlignJustify } from "react-icons/fa";

const WarpScreen = () => {

    return (
        <>
            <View style={styles.headerFlex}>
                <View style={styles.textContainer}>
                    <Text style={styles.textOne}>
                        1.1.1.1
                    </Text>
                    <Text style={styles.textCloud}>
                        by Cloudflare
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Text>?</Text>
                    <Text>-</Text>
                    {/* <FaAlignJustify /> */}
                </View>
            </View>
            <View style={styles.warpTextContainer}>
                <Text style={styles.warpText}>Warp</Text>
            </View>
            <View style={styles.disconnectedContainer}>
                <Text style={styles.textDisconnected}>Disconnected</Text>
                <Text style={styles.textNetwork}>{`Your network is using`}</Text>
                <Text style={styles.textNetwork}>
                    1.1.1.1 but is
                    <Text style={styles.textSecure}> not secure</Text>
                </Text>

            </View>
        </>
    )
};

const styles = StyleSheet.create({
    headerFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    textContainer: {

    },
    iconContainer: {
        flexDirection: 'row',
    },
    textOne: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
    },
    textCloud: {
        color: 'black',
        fontWeight: 'bold',
    },
    warpTextContainer: {
        paddingVertical: 60,
        alignItems: 'center',
    },
    warpText: {
        fontSize: 90,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase'
    },
    disconnectedContainer: {
        alignItems: 'center',
    },
    textDisconnected: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20
    },
    textNetwork: {
        color: 'black',
        fontSize: 18,
    },
    textSecure: {
        color: 'black',
        fontWeight: 'bold'
    }
});
export default WarpScreen;