import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({});

export const Session = authClient.$Infer.Session;
