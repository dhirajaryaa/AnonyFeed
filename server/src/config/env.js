import dotenv from 'dotenv';

dotenv.config({
    path:"./.env"
});

export const {MONGODB_URI,PORT,ORIGIN,ALLOW_METHODS,RESEND_API_KEY} = process.env