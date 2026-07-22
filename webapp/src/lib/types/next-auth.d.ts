/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import {JWT} from 'next-auth/jwt';
//los imoprts se ponen para que en auth.ts no de errores con el async jwt y el async session

declare module 'next-auth' {
    interface Session {
        accessToken: string;
    }  
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        accessTokenExpires: number;
        error?: string;
    }
}