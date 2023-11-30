import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("6568785339acdeb0e649");

export const account = new Account(client);

export default client;
