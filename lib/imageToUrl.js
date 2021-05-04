const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8055'

export function imageToUrl(image) {
  return `${api}/assets/${image}`
}
