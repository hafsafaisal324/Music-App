import React from 'react';
import { View, Text, Image, ImageBackground,FlatList, TouchableOpacity } from 'react-native';
import styles from "./styles";
import ConditionalImage from '../../ConditionalImage';



const CategoryCard = ({items}) => {
  return (
    <View >
        <FlatList data={items}
        style={styles.card}
        vertical
        renderItem={({item})=>(
        <TouchableOpacity  style={styles.categories}>
        <ImageBackground
              source={{ uri: item.images[0]?.url }} 
              style={styles.image}
              resizeMode='stretch'
            >
                
             < View style={styles.textContainer}>
             <Text style={styles.title}>{item.name}</Text>
             <Text style={styles.duration}>Duration:
                 {/* {item.duration} */}
                 25 Minutes
                 </Text>
             </View>
            </ImageBackground>
           
        </TouchableOpacity>
        )}
>
        
      </FlatList>
    </View>
  );
};

export default CategoryCard;
