import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#287aff'
  },
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
})
