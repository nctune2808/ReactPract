"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var UserSession = /** @class */ (function () {
    function UserSession() {
        this.session = null;
        this.claims = null;
    }
    UserSession.prototype.setSession = function (session) {
        this.session = session;
        var jwtTokenDecoded = jwt_decode_1.default(session.jwt_token);
        this.claims = jwtTokenDecoded["https://hasura.io/jwt/claims"];
    };
    UserSession.prototype.clearSession = function () {
        this.session = null;
        this.claims = null;
    };
    UserSession.prototype.getSession = function () {
        return this.session;
    };
    UserSession.prototype.getClaim = function (claim) {
        if (this.claims) {
            return this.claims[claim];
        }
        else {
            return null;
        }
    };
    return UserSession;
}());
exports.default = UserSession;
//# sourceMappingURL=UserSession.js.map