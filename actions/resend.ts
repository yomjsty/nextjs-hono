import { Resend } from 'resend';
import { ForgotPasswordEmail } from '@/components/email-template/ForgotPasswordEmail';
import { EmailVerificationEmail } from '@/components/email-template/VerifyEmailConfirmation';
import { env } from '@/lib/env';

export const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmailVerificationEmail({
	fullName,
	email,
	url,
	subject,
}: {
	fullName: string;
	email: string;
	url: string;
	subject: string;
}) {
	try {
		const { data, error } = await resend.emails.send({
			from: `${env.NEXT_PUBLIC_APP_NAME} <do-not-reply@email.captomatic.pro>`,
			// from: 'Acme <onboarding@resend.dev>', // For testing, default if you don't have a verified domain on Resend
			to: [email],
			subject,
			react: EmailVerificationEmail({ fullName, email, url }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}

export async function sendForgotPasswordEmail({
	email,
	url,
	subject,
}: {
	email: string;
	url: string;
	subject: string;
}) {
	try {
		const { data, error } = await resend.emails.send({
			from: `${env.NEXT_PUBLIC_APP_NAME} <do-not-reply@email.captomatic.pro>`,
			to: [email],
			subject,
			react: ForgotPasswordEmail({ email, url }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
