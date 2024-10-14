import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  /**
   * Background style.
   * Represents the style for a background with the following properties:
   * - flex: 1 (flexible size to fit available space)
   * - paddingHorizontal: 10 (horizontal padding of 10 units)
   * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
   */
  background: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.appBackgroundTwo,
  },
  titleText: {
    color: colors.spotifyWhite,
    fontSize: 25,
    fontFamily: "GothamBold",
    textAlign: "left",
    marginVertical: 7,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionLink: {
    fontSize: 14,
    color: "#3a5e96",
  },
  collectionsContainer: {
    marginBottom: 16,
  },
  collectionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    // marginRight: 16,
    width: "48%",
    overflow: "hidden",
    marginBottom: 10,
  },
  collectionImage: {
    width: "100%",
    height: 177,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  collectionTextContainer: {
    padding: 10,
    position: "absolute",
    bottom: 0,
  },
  playlistCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  playlistImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  playlistTextContainer: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  playlistSessions: {
    fontSize: 14,
    color: "#666",
  },
  collectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  collectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.spotifyBlack,
    width: "90%",

    justifyContent: "flex-end",
  },
  collectionDuration: {
    fontSize: 8,
    opacity: 0.7,
    color: colors.spotifyBlack,
  },
  arrowIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default styles;
