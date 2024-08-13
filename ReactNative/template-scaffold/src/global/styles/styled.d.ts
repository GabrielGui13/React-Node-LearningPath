import 'styled-components'

import { theme } from './theme'

export type ThemeType = typeof theme

export declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
