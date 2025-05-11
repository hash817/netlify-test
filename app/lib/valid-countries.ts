export const ALLOWED_COUNTRIES = ['singapore', 'malaysia', 'vietnam', 'thailand', 'taiwan', 'genting-dream', 'star-voyager', 'star-navigator'] as const

export function isValidCountry(country: string): boolean {
  return ALLOWED_COUNTRIES.includes(country.toLowerCase() as any)
}