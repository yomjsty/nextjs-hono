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
	fullName: string;
	email: string;
	url: string;
}

export function EmailVerificationEmail({ fullName, email, url }: iAppProps) {
	return (
		<Html dir="ltr" lang="en">
			<Head />
			<Preview>
				Please verify your email address to complete your registration
			</Preview>
			<Tailwind>
				<Body className="bg-gray-100 py-[40px] font-sans">
					<Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[40px] shadow-sm">
						{/* Header */}
						<Section className="mb-[32px] text-center">
							<Heading className="m-0 mb-[8px] font-bold text-[28px] text-gray-900">
								Welcome to Our Platform! 🎉
							</Heading>
							<Text className="m-0 text-[16px] text-gray-600">
								Just one more step to get started
							</Text>
						</Section>

						{/* Main Content */}
						<Section className="mb-[32px]">
							<Text className="mb-[16px] text-[16px] text-gray-700 leading-[24px]">
								Hi {fullName},
							</Text>
							<Text className="mb-[16px] text-[16px] text-gray-700 leading-[24px]">
								Thank you for signing up! We&apos;re excited to
								have you on board.
							</Text>
							<Text className="mb-[24px] text-[16px] text-gray-700 leading-[24px]">
								To complete your registration and start using
								your account, please verify your email address{' '}
								<strong>{email}</strong> by clicking the button
								below:
							</Text>
						</Section>

						{/* Verification Button */}
						<Section className="mb-[32px] text-center">
							<Button
								className="box-border inline-block rounded-[6px] bg-green-600 px-[32px] py-[14px] font-semibold text-[16px] text-white no-underline"
								href={url}
							>
								Verify Email Address
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

						{/* Important Information */}
						<Section className="mb-[32px] border-gray-200 border-t pt-[24px]">
							<Text className="mb-[12px] text-[14px] text-gray-600 leading-[20px]">
								<strong>Important:</strong>
							</Text>
							<Text className="mb-[8px] text-[14px] text-gray-600 leading-[20px]">
								• This verification link will expire in one hour
							</Text>
							<Text className="mb-[8px] text-[14px] text-gray-600 leading-[20px]">
								• If you didn&apos;t create this account, please
								ignore this email
							</Text>
							<Text className="mb-[16px] text-[14px] text-gray-600 leading-[20px]">
								• Need help? Contact our support team anytime
							</Text>
						</Section>

						{/* Footer */}
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
