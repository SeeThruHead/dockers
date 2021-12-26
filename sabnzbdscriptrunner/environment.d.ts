declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: string;
      PORT: string;
      APIKEY: string;
    }
  }
}
