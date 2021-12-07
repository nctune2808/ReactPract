"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.NhostClient = void 0;
var NhostClient_1 = __importDefault(require("./NhostClient"));
exports.NhostClient = NhostClient_1.default;
var createClient = function (config) {
    return new NhostClient_1.default(config);
};
exports.createClient = createClient;
//# sourceMappingURL=index.js.map