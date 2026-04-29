export const SITE = Object.freeze({
  name: 'Sanctuary of Grace Church',
  shortName: 'Sanctuary of Grace',
  email: 'hello@sanctuaryofgrace.org',
  phone: '+1 (555) 240-9001',
  address: '1184 Cedar Ridge Avenue, Brookfield, NY 11324',
  youtubeChannel: 'https://www.youtube.com/@sanctuaryofgracechurch',
})

export const NAV_LINKS = Object.freeze([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Servants', to: '/servants' },
  { label: 'Events', to: '/events' },
  { label: 'Videos', to: '/videos' },
])

export const SOCIAL_LINKS = Object.freeze([
  { label: 'YouTube', href: SITE.youtubeChannel },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
])
