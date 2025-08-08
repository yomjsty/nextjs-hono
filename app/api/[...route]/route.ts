import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { auth } from '@/lib/auth';

export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
	return c.json({
		message: 'Hello from Hono!',
	});
});

app.on(['POST', 'GET'], '/auth/**', (c) => auth.handler(c.req.raw));

export const GET = handle(app);
export const POST = handle(app);
