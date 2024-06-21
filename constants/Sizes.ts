import { Dimensions } from "react-native";

// 服装大小
const Spacings = {
    xs: 4,
    s: 8,
    m: 16, // 标准字体
    l: 24,
    xl: 32,
    xxl: 64
}

const { height, width } = Dimensions.get('window');

export { Spacings as sp, height as ScreenHeight, width as ScreenWidth }