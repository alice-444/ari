import { csrfProtection, cookieParser } from '@/middleware/csrf';

export default async function handler(req, res) {
  await cookieParser()(req, res, () => {});
  await csrfProtection(req, res, () => {
    res.status(200).json({ csrfToken: req.csrfToken() });
  });
}