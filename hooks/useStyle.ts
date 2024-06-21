import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet } from "react-native";
import { sp } from '@/constants/Sizes'

export default function useStyle() {

    const theme = useColorScheme() ?? 'light'

    const isDark = theme === 'dark'

    const colors = Colors[theme]

    const { front, bg, sub, mid, warn } = colors

    const navColors = {
        primary: front,
        background: bg,
        card: bg,
        text: sub,
        border: mid,
        notification: warn
    }

    const { m, xl, xxl, s, xs, l } = sp

    const styles = StyleSheet.create({
        container: { flex: 1 },
        center: { justifyContent: 'center', alignItems: 'center' },
        m: { margin: m },
        mx: { marginHorizontal: m },
        my: { marginVertical: m },
        p: { padding: m },
        px: { paddingHorizontal: m },
        py: { paddingVertical: m },
        radius: { borderRadius: m },
        // containers
        box: { backgroundColor: mid, borderRadius: m },
        borderbox: { borderRadius: m, borderColor: sub, borderWidth: StyleSheet.hairlineWidth },
        radiusBox: {
            borderRadius: m, padding: m, alignItems: 'center', backgroundColor: mid
        },
    })

    const text = StyleSheet.create({
        normal: { color: front, fontSize: m },
        sub: { color: sub, fontSize: m },
        header: { color: front, fontSize: xl },
        title: { color: front, fontSize: l },
        subTitle: { color: sub, fontSize: l },
        small: { fontSize: s, color: sub },
    })

    return {isDark, navColors, s: styles, t: text, cl: colors}
}