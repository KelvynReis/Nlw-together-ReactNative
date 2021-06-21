import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1, //ocupar toda a tela
        justifyContent: 'center', // alinhar na vertical
        alignItems: 'center',
        backgroundColor: theme.colors.background //alinhar na horizontal
    },
    image: {
        width: '100%',
        height: 360,
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
    }
});