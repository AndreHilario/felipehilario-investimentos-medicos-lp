// src/types/globals.d.ts
export {};

declare global {
  interface Window {
    gapi: any;
    google: any;
  }

  // Se quiser usar importações diretas:
  const gapi: any;
  const google: any;
}