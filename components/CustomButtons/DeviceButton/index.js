import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ModalContext } from '../../../context/modal';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const DeviceButton = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <TouchableOpacity onPress={() => openModal()}>
      <Ionicons name={'headset-sharp'} size={24} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default DeviceButton; 