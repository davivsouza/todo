import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
},
inputContainer: {
    width: '100%',
    position: "relative",
    bottom: 30,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    height: 54,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    padding: 16,
  },
  button: {
    textAlign: 'center',
    width: 52,
    height: 52,
    padding: 16,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
 

});
