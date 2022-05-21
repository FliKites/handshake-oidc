import dotenv from 'dotenv';

dotenv.config();

export const isDevelopment: boolean = process.env.NODE_ENV === 'development';
export const oidc = {
  host: process.env.PUBLIC_HOST,
  oidc_provider_secrets: <string[]>JSON.parse(process.env.OIDC_PROVIDER_SECRETS || '[]'),
  oidc_provider_clients: JSON.parse(process.env.OIDC_PROVIDER_CLIENTS || '[]'),
  jwks: <[]>JSON.parse(process.env.OIDC_JWKS || '[]'),
};

export const config = {
  session_secret: process.env.SESSION_SECRET || 'session secret',
};
export const port = process.env.PORT || 8080;

export const redis = {
  host: process.env.REDIS_HOST || 'redis',
  port: <number>(<unknown>process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
};
export const sentry = process.env.SENTRY_DSN;

export const hsdResolvers = ['45.90.28.121', '45.90.30.121'];
