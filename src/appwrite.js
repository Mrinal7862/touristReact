import {Client, Storage, Account} from "appwrite"

const  client = new Client();
client
.setProject(import.meta.env.VITE_PROJECT_ID)
.setEndpoint(import.meta.env.VITE_ENDPOINT)

export const account = new Account(client);
export const storage = new Storage(client);