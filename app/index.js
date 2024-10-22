import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("0");

    const handlePress = (value) => {
        if (value === "=") {
            calculateResult();
        } else if (value === "AC") {
            clear();
        } else {
            setInput(input + value);
        }
    };
    const BUTTON_COLOR = "#eb870e";
    const BUTTON_AC = "#5c5c5f";

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (e) {
            setResult("Erreur");
        }
    };

    const clear = () => {
        setInput("");
        setResult("0");
    };
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.inputText}>{input}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.row}>
                <Button label="AC" onPress={() => handlePress("AC")} style={{ backgroundColor: BUTTON_AC }} />
                <Button label="/" onPress={() => handlePress("/")} style={{ backgroundColor: BUTTON_COLOR }} />
            </View>
            <View style={styles.row}>
                <Button label="1" onPress={() => handlePress("1")} />
                <Button label="2" onPress={() => handlePress("2")} />
                <Button label="3" onPress={() => handlePress("3")} />
                <Button label="-" onPress={() => handlePress("-")} style={{ backgroundColor: BUTTON_COLOR }} />
            </View>
            <View style={styles.row}>
                <Button label="4" onPress={() => handlePress("4")} />
                <Button label="5" onPress={() => handlePress("5")} />
                <Button label="6" onPress={() => handlePress("6")} />
                <Button label="+" onPress={() => handlePress("+")} style={{ backgroundColor: BUTTON_COLOR }} />
            </View>
            <View style={styles.row}>
                <Button label="7" onPress={() => handlePress("7")} />
                <Button label="8" onPress={() => handlePress("8")} />
                <Button label="9" onPress={() => handlePress("9")} />
                <Button label="x" onPress={() => handlePress("*")} style={{ backgroundColor: BUTTON_COLOR }} />
            </View>
            <View style={styles.row}>
                <Button label="0" onPress={() => handlePress("0")} style={styles.wideButton} />
                <Button label="." onPress={() => handlePress(".")} />
                <Button label="=" onPress={() => handlePress("=")} style={{ backgroundColor: BUTTON_COLOR }} />
            </View>
        </View>
    );
};

const Button = ({ label, onPress, style }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 30,
        backgroundColor: "black",
    },
    display: {
        marginBottom: 40,
        backgroundColor: "black",
        padding: 20,
        borderRadius: 10,
        alignItems: "flex-end",
    },
    inputText: {
        fontSize: 30,
        color: "#5c5c5f",
    },
    resultText: {
        fontSize: 60,
        fontWeight: "normal",
        color: "#ffffff",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    button: {
        width: 70,
        height: 70,
        backgroundColor: "#2a2a2c",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    wideButton: {
        width: 150,
    },
    buttonText: {
        fontSize: 30,
        color: "#fff",
    },
});

export default Calculator;
