import NhostClient from "./NhostClient";
import { UserConfig, User, Session } from "./types";
declare const createClient: (config: UserConfig) => NhostClient;
export { NhostClient, createClient, User, Session, UserConfig };
