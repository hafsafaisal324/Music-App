import React from "react";
import { SvgXml } from "react-native-svg";
import { ViewStyle } from "react-native";

interface IconProps {
  icon: any;
  color?: string;
  iconStyle?: { height?: number; width?: number; color?: string };
  style?: ViewStyle;

  fillColor?: boolean;
}

export const IconComponent: React.FC<IconProps> = ({
  style,
  icon,
  color,
  iconStyle,

  fillColor = true,
}) => {
  return (
    <SvgXml
      xml={icon}
      height={iconStyle?.height}
      color={color ? color : iconStyle?.color}
      fill={fillColor ? (color ? color : iconStyle?.color) : "transparent"}
      width={iconStyle?.width}
      style={style}
    />
  );
};
