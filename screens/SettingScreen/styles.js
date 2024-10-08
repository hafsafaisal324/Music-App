import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.spotifyBlack,
      padding: 15,
      
    },
    backButton: {
    paddingTop:20
    },

    wrapper:
    {flexDirection: 'row',
      justifyContent: 'space-between'},

    iconContainer: {
      width: 60,         
      height: 60,        
      borderRadius: 40,  
      marginTop:10,

    },
    iconImage: {
      width: '100%',  
      height:'100%',
     
      borderRadius: 60,  
    },
    
    
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.spotifyWhite,
    },
    
    section: {
      paddingTop:15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:colors.spotifyWhite,
      marginBottom: 10,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 6,
      // borderBottomWidth: 1,
    },
    itemText: {
      fontSize: 14,
      color: colors.spotifyDarkGray,
    },
    logoutButton: {
      marginTop:40,
    },
    logoutText: {
      fontSize: 16,
      fontWeight:'600',
      color: colors.spotifyWhite,
      textAlign: 'left',
    }
})

export default styles;