import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => {
      return {
        body: {
          bg: mode("white", "slate.900")(props),
        },
      };
    },
  },
  colors: {
    slate:{
      900: '#0F172A',
    },
    gray: {
      900: "#111827",
      800: "#1f2937",
      700: "#374151",
      600: "#4b5563",
      500: "#6b7280",
      400: "#9ca3af",
    },
  },
});

export default theme;
