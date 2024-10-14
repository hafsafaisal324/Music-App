import React, { useMemo } from "react";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { StyleProps } from "react-native-reanimated";
import styles from "./styles";
import colors from "../../utils/colors";

type Props<ItemType> = {
  data: ItemType[];
  onPressListItem?: (item: ItemType) => void;
  renderDetails: React.FC<{ item: ItemType; index: number }>;
  keyExtractor: (item: ItemType) => string;
  headerTitle?: string;
  HeaderComponent?: React.ReactElement;
  listEmptyComponent?: React.ReactElement;
  numColumns?: number;
  horizontal?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
  style?: StyleProp<ViewStyle>;
  ListFooterComponent?: React.ReactElement;
  columnWrapperStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  contentHeaderStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  scrollEventThrottle?: number;
  onScroll?: FlashListProps<unknown>["onScroll"];
  onScrollBeginDrag?: FlashListProps<unknown>["onScrollBeginDrag"];
  scrollEnabled?: boolean;
  containerWrapper?: StyleProp<ViewStyle>;
  ListComponent?: React.ComponentClass<React.ComponentProps<typeof FlashList>>;
};

const SoulList = <ItemType,>({
  data,
  onPressListItem,
  keyExtractor,
  headerTitle,
  renderDetails: RenderDetailsComponent,
  numColumns,
  horizontal,
  HeaderComponent,
  listEmptyComponent,
  onRefresh,
  refreshing = false,
  style,
  onEndReached,
  onEndReachedThreshold,
  ListFooterComponent,
  containerWrapper,
  columnWrapperStyle,
  contentContainerStyle,
  disable,
  scrollEventThrottle,
  onScroll,
  onScrollBeginDrag,
  contentHeaderStyle,
  ListComponent,
  ...props
}: Props<ItemType>) => {
  const renderItem = ({ item, index }: { item: ItemType; index: number }) => (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => onPressListItem && onPressListItem(item)}
      disabled={disable}
    >
      <View style={styles.textContainer}>
        <RenderDetailsComponent item={item} index={index} />
      </View>
    </TouchableOpacity>
  );

  const List = useMemo(() => {
    return ListComponent || FlashList;
  }, [ListComponent]);
  let defaultTextStyles: StyleProps = {
    // ...newTheme.layout.pageWrapper(colors),
    backgroundColor: colors.appBackgroundTwo,
  };

  return (
    <KeyboardAvoidingView
      style={[
        defaultTextStyles,
        {
          flex: 1,
          flexGrow: 1,
          justifyContent: "center",
        },
        containerWrapper,
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <List
        data={data}
        numColumns={numColumns}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponentStyle={contentHeaderStyle}
        ListHeaderComponent={HeaderComponent}
        estimatedItemSize={200}
        ListEmptyComponent={listEmptyComponent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold ?? 0.6}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={{}}
        scrollEventThrottle={scrollEventThrottle}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};

export default SoulList;
