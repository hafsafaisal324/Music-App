import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    // borderWidth: 0.5,
    // borderColor: AppColors.border,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  labelTxt: {
    fontSize: 14,
  },
  statusView: {
    flex: 1,
    alignItems: "flex-end",
  },
  titleTxt: {
    fontSize: 12,
    textAlign: "center",
  },
  //
  textContainer: {
    flex: 1,
  },

  headerLabel: {
    fontSize: 15,
  },
  listSeparator: {
    backgroundColor: "green",
    color: "red",
  },
});

export default styles;
