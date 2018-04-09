// sorted alphabetically
const locales = {
  en: {
    name: 'English',
    locale: 'en',
    messages: () => import('@/locales/locale-en.json'),
    intlLocale: () => import('intl/locale-data/jsonp/en'),
    dateFnsLocale: () => import('date-fns/locale/en'),
  },

  sv: {
    name: 'Svenska',
    locale: 'sv',
    messages: () => import('@/locales/locale-sv.json'),
    intlLocale: () => import('intl/locale-data/jsonp/sv'),
    dateFnsLocale: () => import('date-fns/locale/sv'),
  },
}

export default locales

/**
 * Loading helpers
 */

export function messages (locale) {
  switch (locale) {
    case 'en': return locales.en.messages()
    case 'sv': return locales.sv.messages()
  }
}

export function intlLocale (locale) {
  switch (locale) {
    case 'en': return locales.en.IntlData()
    case 'sv': return locales.sv.IntlData()
  }
}

export function dateFnsLocale (locale) {
  switch (locale) {
    case 'en': return locales.en.dateFnsLocale()
    case 'sv': return locales.sv.dateFnsLocale()
  }
}
