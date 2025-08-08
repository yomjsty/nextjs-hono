import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { admin, haveIBeenPwned } from 'better-auth/plugins';
import {
	sendEmailVerificationEmail,
	sendForgotPasswordEmail,
} from '@/actions/resend';
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
		autoSignIn: false,
		requireEmailVerification: true,
		sendResetPassword: async ({ user, url }) => {
			await sendForgotPasswordEmail({
				email: user.email,
				url,
				subject: 'Reset your password',
			});
		},
		resetPasswordTokenExpiresIn: 30 * 60 * 1000,
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url }) => {
			await sendEmailVerificationEmail({
				fullName: user.name,
				email: user.email,
				url,
				subject: 'Verify your email address',
			});
		},
		expiresIn: 60 * 60 * 1000,
		sendOnSignUp: true,
		sendOnSignIn: true,
		autoSignInAfterVerification: true,
	},
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		},
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 12 * 60 * 60,
		},
	},
	plugins: [admin(), haveIBeenPwned(), nextCookies()],
});
