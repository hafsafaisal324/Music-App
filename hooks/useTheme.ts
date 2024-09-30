import { useMemo } from "react";

import { useAppSelector } from "../store";
import colors from "../utils/colors";

export default function () {
  const theme = useAppSelector((state) => state.global.theme);
  const appTheme = useMemo(() => {
    return {
      colors: theme === "dark" ? colors : colors,
      theme: theme,
    };
  }, [theme]);

  return appTheme;
}
