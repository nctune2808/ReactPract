import { Session } from "./types";
export default class UserSession {
    private session;
    private claims;
    constructor();
    setSession(session: Session): void;
    clearSession(): void;
    getSession(): Session | null;
    getClaim(claim: string): string | string[] | null;
}
