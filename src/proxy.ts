import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Updated matcher per next-intl v4 recommendation
    matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)']
};
