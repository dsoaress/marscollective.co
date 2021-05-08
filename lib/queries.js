function localeParams(locale) {
  return `translations.*&deep[translations][_filter][languages_code][_eq]=${locale}`
}

export function teamQuery(locale) {
  return `/users?sort=first_name&fields=*,${localeParams(locale)}`
}

export function indexBlogQuery(locale) {
  return `/items/blog?sort=-date&fields=*,${localeParams(locale)}&limit=4`
}

export function blogQuery(locale, slug) {
  return `/items/blog?fields=*,author.*,author.translations.*,${localeParams(
    locale
  )}&filter[slug]=${slug}`
}

export function blogSlugsQuery() {
  return '/items/blog?fields=slug'
}

export function linksQuery(locale) {
  return `/items/links?fields=${localeParams(locale)}`
}
