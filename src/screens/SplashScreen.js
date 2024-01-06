import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         navigation.navigate('Warp');
    //     }, 3000);

    //     return () => clearTimeout(timeout);
    // }, [navigation]);
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/logo-512x512.png')}
                    style={styles.logo} />
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default SplashScreen;