import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
 const styles={
    background:{
      flex: 1,
      padding:10,
      backgroundColor:colors.spotifyBlack
    } ,
    container:
    {
    flex: 1,
    backgroundColor:colors.spotifyBlack,
  },
    header: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 20,
        color: colors.spotifyWhite,
      },
      backButton: {
        marginTop:30,
        marginBottom:30,
      
      
        },
}

export default styles;