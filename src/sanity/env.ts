export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-20'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk7ZdeRTeQDjLTAeYxpYNsP4lZauwUKglmUmvJkltYuvBUPp1kpd6MvL1GG3vbfpnQiXP8V2xVbrtAae9CuaSeZHtC3ocFELO46SB9MgSfPGOCPJNKwzWaZrPzfwv4Ww2K8LTHJWVOqHRlbNaVKCw3szaVAqy4wpbRysTDGnR2e5m2UcFVQc",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
