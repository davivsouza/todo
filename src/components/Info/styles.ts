import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: 390,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingBottom: 20,

    },
    infoTags: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    tagLabel: {
        fontSize: 14,
    },
    counter: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        backgroundColor: "#333",
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
    }
})