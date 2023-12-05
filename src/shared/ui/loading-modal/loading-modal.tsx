import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './loading-modal.styles';

interface ILoadingModalProps {
  visible: boolean;
}

export function LoadingModal({visible}: ILoadingModalProps) {
  return (
    <Modal
      isVisible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.8}>
      <View style={styles.modal}>
        <StatusBar backgroundColor="rgba(0,0,0,0.7)" barStyle="light-content" />
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
}
