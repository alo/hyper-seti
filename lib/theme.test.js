const lib = require('./theme')

test('should be an object', () => {
  const theme = lib({})
  expect(typeof theme).toBe('object')
})

test('should have necessary properties', () => {
  const theme = lib({})
  const props = [
    'foregroundColor',
    'backgroundColor',
    'borderColor',
    'cursorColor',
    'colors',
    'css'
  ]

  const hasAllProps = props.reduce((last, current) => {
    return !last ? last : theme.hasOwnProperty(current)
  }, true)

  expect(hasAllProps).toBe(true)
})

test('should have default theme values', () => {
  const theme = lib({})

  expect(theme.cursorColor).toBe('#FFFFFF')
  expect(theme.foregroundColor).toBe('#CCCFCE')
  expect(theme.backgroundColor).toBe('#0E1112')
})

test('user options should override default theme values', () => {
  const userOptions = {
    themeOptions: {
      cursorColor: 'red',
      foregroundColor: 'green',
      backgroundColor: 'blue'
    }
  }

  const theme = lib(userOptions)

  expect(theme.cursorColor).toBe('red')
  expect(theme.foregroundColor).toBe('green')
  expect(theme.backgroundColor).toBe('blue')
})
