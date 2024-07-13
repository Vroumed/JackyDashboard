import { View, StyleSheet } from "react-native"

const TestScreen = () => {


    return (

        <View style={styles.container}>
            <h1>Bonjour</h1>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    controlsContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    controlRow: {
        flexDirection: "row",
        marginVertical: 10,
    },
});

export default TestScreen