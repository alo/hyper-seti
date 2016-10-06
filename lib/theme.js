const foregroundColor = '#CCCFCE'
const backgroundColor = '#0E1112'
const black = '#303030'
const yellow = '#CBCB41'
const red = '#CC3E44'
const purple = '#9F73C3'
const blue = '#519ABA'
const cyan = '#39ad8d'
const green = '#85B645'
const grey = '#DDDDDD'
const darkerGrey = '#757575'
const white = foregroundColor

module.exports = (config) => {
  const themeOptions = config.themeOptions || {}
  const css = config.css || ''

  return {
    foregroundColor: themeOptions.foregroundColor || foregroundColor,
    backgroundColor: themeOptions.backgroundColor || backgroundColor,
    borderColor: themeOptions.borderColor || '#0E1112',
    cursorColor: themeOptions.cursorColor || '#FFFFFF',
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      purple,
      cyan,
      grey,
      darkerGrey,
      red,
      green,
      yellow,
      cyan,
      purple,
      blue,
      white
    ],
    css: `
      ${css}

      .tab_tab {
        background-color: ${themeOptions.inactiveTabColor || '#1F2326'};
      }

      .tab_tab.tab_active {
        background-color: ${themeOptions.activeTabColor || backgroundColor};
        border-bottom-color: ${themeOptions.accentColor || blue} !important;
        border-bottom-width: 2px;
      }
    `
  }
}
