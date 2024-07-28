// 'use server'

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { z } from 'zod';
// import { ResultCode } from '@/lib/utils';
// import { authAdmin } from '@/lib/firebaseAdmin'; // Assume this is an admin utility for server-side actions

// export async function getUser(email) {
//   try {
//     const user = await authAdmin.getUserByEmail(email); // Using Firebase Admin SDK
//     return user;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// }

// interface Result {
//   type: string;
//   resultCode: ResultCode;
// }

// export async function authenticate(
//   _prevState: Result | undefined,
//   formData: FormData
// ): Promise<Result | undefined> {
//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const parsedCredentials = z
//     .object({
//       email: z.string().email(),
//       password: z.string().min(6),
//     })
//     .safeParse({ email, password });

//   if (!parsedCredentials.success) {
//     return {
//       type: 'error',
//       resultCode: ResultCode.InvalidCredentials,
//     };
//   }

//   try {
//     const auth = getAuth();
//     await signInWithEmailAndPassword(auth, email, password);

//     return {
//       type: 'success',
//       resultCode: ResultCode.UserLoggedIn,
//     };
//   } catch (error) {
//     console.error('Authentication error:', error);

//     if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
//       return {
//         type: 'error',
//         resultCode: ResultCode.InvalidCredentials,
//       };
//     }

//     return {
//       type: 'error',
//       resultCode: ResultCode.UnknownError,
//     };
//   }
// }
