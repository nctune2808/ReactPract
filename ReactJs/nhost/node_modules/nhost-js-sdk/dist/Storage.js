"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var utils_1 = require("./utils");
var Storage = /** @class */ (function () {
    function Storage(config, session) {
        this.currentSession = session;
        this.useCookies = config.useCookies;
        this.httpClient = axios_1.default.create({
            baseURL: config.baseURL,
            timeout: 120 * 1000,
            withCredentials: this.useCookies,
        });
    }
    Storage.prototype.generateAuthorizationHeader = function () {
        var _a;
        if (this.useCookies)
            return null;
        var JWTToken = (_a = this.currentSession.getSession()) === null || _a === void 0 ? void 0 : _a.jwt_token;
        if (JWTToken) {
            return {
                Authorization: "Bearer " + JWTToken,
            };
        }
        else {
            return null;
        }
    };
    Storage.prototype.put = function (path, file, metadata, onUploadProgress) {
        if (metadata === void 0) { metadata = null; }
        if (onUploadProgress === void 0) { onUploadProgress = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var formData, upload_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!path.startsWith("/")) {
                            throw new Error("`path` must start with `/`");
                        }
                        formData = new FormData();
                        formData.append("file", file);
                        // todo: handle metadata
                        if (metadata !== null) {
                            console.warn("Metadata is not yet handled in this version.");
                        }
                        return [4 /*yield*/, this.httpClient.post("/storage/o" + path, formData, {
                                headers: __assign({ "Content-Type": "multipart/form-data" }, this.generateAuthorizationHeader()),
                                onUploadProgress: onUploadProgress,
                            })];
                    case 1:
                        upload_res = _a.sent();
                        return [2 /*return*/, upload_res.data];
                }
            });
        });
    };
    Storage.prototype.putString = function (path, data, type, metadata, onUploadProgress) {
        if (type === void 0) { type = "raw"; }
        if (metadata === void 0) { metadata = null; }
        if (onUploadProgress === void 0) { onUploadProgress = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var fileData, contentType, isBase64, matches, middle, restData, file, form_data, uploadRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!path.startsWith("/")) {
                            throw new Error("`path` must start with `/`");
                        }
                        if (type === "raw") {
                            fileData = utils_1.utf8Bytes(data);
                            contentType =
                                metadata && metadata.hasOwnProperty("content-type")
                                    ? metadata["content-type"]
                                    : undefined;
                        }
                        else if (type === "data_url") {
                            isBase64 = false;
                            matches = data.match(/^data:([^,]+)?,/);
                            if (matches === null) {
                                throw "Data must be formatted 'data:[<mediatype>][;base64],<data>";
                            }
                            middle = matches[1] || null;
                            if (middle != null) {
                                isBase64 = middle.endsWith(";base64");
                                contentType = isBase64
                                    ? middle.substring(0, middle.length - ";base64".length)
                                    : middle;
                            }
                            restData = data.substring(data.indexOf(",") + 1);
                            fileData = isBase64
                                ? utils_1.base64Bytes(utils_1.StringFormat.BASE64, restData)
                                : utils_1.percentEncodedBytes(restData);
                        }
                        if (!fileData) {
                            throw new Error("Unbale to generate file data");
                        }
                        file = new File([fileData], "untitled", { type: contentType });
                        form_data = new FormData();
                        form_data.append("file", file);
                        return [4 /*yield*/, this.httpClient.post("/storage/o" + path, form_data, {
                                headers: __assign({ "Content-Type": "multipart/form-data" }, this.generateAuthorizationHeader()),
                                onUploadProgress: onUploadProgress,
                            })];
                    case 1:
                        uploadRes = _a.sent();
                        return [2 /*return*/, uploadRes.data];
                }
            });
        });
    };
    Storage.prototype.delete = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var requestRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!path.startsWith("/")) {
                            throw new Error("`path` must start with `/`");
                        }
                        return [4 /*yield*/, this.httpClient.delete("storage/o" + path, {
                                headers: __assign({}, this.generateAuthorizationHeader()),
                            })];
                    case 1:
                        requestRes = _a.sent();
                        return [2 /*return*/, requestRes.data];
                }
            });
        });
    };
    Storage.prototype.getMetadata = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!path.startsWith("/")) {
                            throw new Error("`path` must start with `/`");
                        }
                        return [4 /*yield*/, this.httpClient.get("storage/m" + path, {
                                headers: __assign({}, this.generateAuthorizationHeader()),
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    return Storage;
}());
exports.default = Storage;
//# sourceMappingURL=Storage.js.map