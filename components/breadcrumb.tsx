'use client';

import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function BreadcrumbComponent() {
	const pathname = usePathname();

	const segments = pathname.split('/').filter(Boolean); // hapus "" dari split awal "/"
	const breadcrumbs = segments.map((segment, index) => {
		const href = `/${segments.slice(0, index + 1).join('/')}`;
		return {
			label: segment,
			href,
		};
	});

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((breadcrumb, index) => {
					const isCurrentPage = index === breadcrumbs.length - 1;
					return (
						<Fragment key={breadcrumb.href}>
							<BreadcrumbItem>
								{isCurrentPage ? (
									<span className="text-foreground capitalize">
										{breadcrumb.label}
									</span>
								) : (
									<BreadcrumbLink
										className="capitalize"
										href={breadcrumb.href}
									>
										{breadcrumb.label}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							<BreadcrumbSeparator className="last:hidden" />
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
