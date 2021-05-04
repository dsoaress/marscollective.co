import { parseISO, format } from 'date-fns'
import { es, pt } from 'date-fns/locale'

export function formatDate(rawDate) {
  const date = {
    en: format(parseISO(rawDate), 'MMM dd, yyyy'),
    es: format(parseISO(rawDate), "d 'de' MMMM 'de' yyyy", { locale: es }),
    pt: format(parseISO(rawDate), "d 'de' MMMM 'de' yyyy", {
      locale: pt
    })
  }
  return date
}
