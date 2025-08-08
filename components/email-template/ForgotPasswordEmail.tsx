import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';
import { env } from '@/lib/env';

interface iAppProps {
	email: string;
	url: string;
}

export function ForgotPasswordEmail({ email, url }: iAppProps) {
	return (
		<Html dir="ltr" lang="en">
			<Head />
			<Preview>Reset your password - Action required</Preview>
			<Tailwind>
				<Body className="bg-gray-100 py-[40px] font-sans">
					<Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[40px] shadow-sm">
						{/* Header */}
						<Section className="mb-[32px] text-center">
							<Heading className="m-0 mb-[8px] font-bold text-[24px] text-gray-900">
								Reset Your Password
							</Heading>
							<Text className="m-0 text-[16px] text-gray-600">
								We received a request to reset your password
							</Text>
						</Section>

						{/* Main Content */}
						<Section className="mb-[32px]">
							<Text className="mb-[16px] text-[16px] text-gray-700 leading-[24px]">
								Hello,
							</Text>
							<Text className="mb-[16px] text-[16px] text-gray-700 leading-[24px]">
								We received a request to reset the password for
								your account associated with{' '}
								<strong>{email}</strong>.
							</Text>
							<Text className="mb-[24px] text-[16px] text-gray-700 leading-[24px]">
								Click the button below to create a new password:
							</Text>
						</Section>

						{/* Reset Button */}
						<Section className="mb-[32px] text-center">
							<Button
								className="box-border inline-block rounded-[6px] bg-blue-600 px-[32px] py-[12px] font-semibold text-[16px] text-white no-underline"
								href={url}
							>
								Reset Password
							</Button>
						</Section>

						{/* Alternative Link */}
						<Section className="mb-[32px]">
							<Text className="mb-[16px] text-[14px] text-gray-600 leading-[20px]">
								If the button above doesn&apos;t work, copy and
								paste the following link into your browser:
							</Text>
							<Text className="break-all text-[14px] text-blue-600 leading-[20px]">
								<Link
									className="text-blue-600 underline"
									href={url}
								>
									{url}
								</Link>
							</Text>
						</Section>

						{/* Security Information */}
						<Section className="mb-[32px] border-gray-200 border-t pt-[24px]">
							<Text className="mb-[12px] text-[14px] text-gray-600 leading-[20px]">
								<strong>Important security information:</strong>
							</Text>
							<Text className="mb-[8px] text-[14px] text-gray-600 leading-[20px]">
								• This link will expire in 30 minutes
							</Text>
							<Text className="mb-[8px] text-[14px] text-gray-600 leading-[20px]">
								• If you didn&apos;t request this reset, please
								ignore this email
							</Text>
							<Text className="mb-[16px] text-[14px] text-gray-600 leading-[20px]">
								• For security reasons, this link can only be
								used once
							</Text>
							<Text className="text-[14px] text-gray-600 leading-[20px]">
								If you continue to have problems, please contact
								our support team.
							</Text>
						</Section>

						<Section className="border-gray-200 border-t pt-[24px]">
							<Text className="m-0 mb-[8px] text-center text-[12px] text-gray-500">
								© 2025 {env.NEXT_PUBLIC_APP_NAME}. All rights
								reserved.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
