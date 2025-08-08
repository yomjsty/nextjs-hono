import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { db } from '@/db/drizzle';
import { schema } from '../db/schema';
import { env } from './env';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		},
	},
	plugins: [nextCookies()],
});
