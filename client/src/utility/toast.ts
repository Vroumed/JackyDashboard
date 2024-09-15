import Toast from "react-native-toast-message";

declare type ToastType = "success" | "error" | "info";

/**
 * Show a toast message
 * @param message - The message to display
 * @param type - The type of the toast message
 * @example
 * ```ts
 * ToastShow("This is a success message", "success");
 * ```
 */
const ToastShow = (message: string, type: ToastType) => {
  if (!message || !type) {
    return;
  }

  Toast.show({
    type: type,
    text1: type,
    text2: message,
  });
};

export default ToastShow;
