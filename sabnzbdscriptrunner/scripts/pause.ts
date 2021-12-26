import { SABnzbd } from "node-sabnzbd";

const client = new SABnzbd("127.0.0.1", "8080", "6e961fd677a74326a07f1df4c06e3f38");

client.version().then((version: string) => {
  console.log('success');
  console.log(version);
}).catch((error: { message: string }) => {
  console.log('error');
  console.log(error.message);
});
