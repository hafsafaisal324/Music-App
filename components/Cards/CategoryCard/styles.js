import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
const styles = StyleSheet.create({
    card: {
      marginBottom: 15,
      backgroundColor: colors.spotifyBlack,

    },
   
    categories:{
        marginBottom: 16,
        overflow: 'hidden',
        borderRadius:10


    },
    image: {
      width: '100%',
      height: 150,
     justifyContent: 'flex-end',

    },
    textContainer: {
    padding: 10,
    },
  
    title: {
      fontSize: 25,
      fontWeight: '800',
      color: colors.spotifyBlack,
    },
    duration: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.spotifyBlack,
    },
  });
  export default styles;
  