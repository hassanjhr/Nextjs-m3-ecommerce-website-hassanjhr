


import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  apiVersion: '2023-01-01', 
  useCdn: process.env.NODE_ENV === 'production', 
  token: "sk7ZdeRTeQDjLTAeYxpYNsP4lZauwUKglmUmvJkltYuvBUPp1kpd6MvL1GG3vbfpnQiXP8V2xVbrtAae9CuaSeZHtC3ocFELO46SB9MgSfPGOCPJNKwzWaZrPzfwv4Ww2K8LTHJWVOqHRlbNaVKCw3szaVAqy4wpbRysTDGnR2e5m2UcFVQc", 
});


