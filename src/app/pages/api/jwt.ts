import { JWT } from 'google-auth-library';

const CLIENT_EMAIL = process.env.CLIENT_EMAIL || '';
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n');

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: SCOPES,
});

export default jwt;