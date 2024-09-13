import Toast from "react-native-toast-message";

const ToastShow = (message: string, type: string) => {
  Toast.show({
    type: type,
    text1: type,
    text2: message,
  });
};

export default ToastShow;
