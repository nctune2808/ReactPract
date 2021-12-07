import * as types from "./types";
import UserSession from "./UserSession";
export default class Storage {
    private httpClient;
    private useCookies;
    private currentSession;
    constructor(config: types.StorageConfig, session: UserSession);
    private generateAuthorizationHeader;
    put(path: string, file: File, metadata?: object | null, onUploadProgress?: any | undefined): Promise<any>;
    putString(path: string, data: string, type?: "raw" | "data_url", metadata?: {
        "content-type": string;
    } | null, onUploadProgress?: any | undefined): Promise<any>;
    delete(path: string): Promise<any>;
    getMetadata(path: string): Promise<object>;
}
