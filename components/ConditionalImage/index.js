import React from "react";
import { View, Image, ImageBackground } from "react-native";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import colors from "../../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const ConditionalImage = ({ image, size, style, right = false }) => (
  <>
    {image && !right ? (
      <>
        <Image style={style} source={{ uri: image }} />
      </>
    ) : !right ? (
      <View style={style}>
        <SimpleLineIcons
          name="music-tone-alt"
          size={size}
          color={colors.spotifyGray}
        />
      </View>
    ) : (
      <ImageBackground style={style} source={{ uri: image }}>
        <View
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            bottom: 0,
            backgroundColor: colors.bottomBar,
          }}
        >
          <View style={{}}>
            <Ionicons
              name={"arrow-forward-sharp"}
              size={23}
              color={colors.spotifyBlack}
            />
          </View>
        </View>
      </ImageBackground>
    )}
  </>
);

export default ConditionalImage;
