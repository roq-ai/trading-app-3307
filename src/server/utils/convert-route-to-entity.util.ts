const mapping: Record<string, string> = {
  'crypto-assets': 'crypto_asset',
  invitations: 'invitation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
