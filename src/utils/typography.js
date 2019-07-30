import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

stAnnesTheme.overrideThemeStyles = ({ color }, options) => ({
  'a': {
    color: '#005cc5',
  },
  'a:hover': {
    color: '#006eec',
  }
})

const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
